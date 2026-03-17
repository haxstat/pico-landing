// ─────────────────────────────────────────────
//  PICO API — Cloudflare Worker
//  Routes:
//    POST /leads          → save interested lead + send emails
//    POST /webhook/stripe → handle Stripe payment events
//    OPTIONS *            → CORS preflight
// ─────────────────────────────────────────────

export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_KEY: string;
  RESEND_API_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  NOTIFICATION_EMAIL: string;
}

// ── CORS ────────────────────────────────────
const ALLOWED_ORIGINS = [
  "https://pico-landing.haxstat.workers.dev",
  "http://localhost:3000",
  "http://localhost:3001",
];

function corsHeaders(origin: string | null): HeadersInit {
  const allowed =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data: unknown, status = 200, origin: string | null = null) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

// ── SUPABASE HELPERS ─────────────────────────
async function supabaseUpsert(
  env: Env,
  table: string,
  record: Record<string, unknown>,
  onConflict: string
) {
  const res = await fetch(
    `${env.SUPABASE_URL}/rest/v1/${table}?on_conflict=${onConflict}`,
    {
      method: "POST",
      headers: {
        apikey: env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify(record),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Supabase upsert failed: ${err}`);
  }
  return res.json();
}

// ── RESEND HELPERS ───────────────────────────
async function sendEmail(
  env: Env,
  opts: {
    to: string;
    subject: string;
    html: string;
    from?: string;
  }
) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: opts.from ?? "PICO <onboarding@resend.dev>",
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    }),
  });
  if (!res.ok) {
    console.error("Resend error:", await res.text());
  }
}

// ── EMAIL TEMPLATES ──────────────────────────
function leadConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#07070F;font-family:'Inter',Arial,sans-serif;color:#E2E2F0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:40px auto;">
    <tr>
      <td style="padding:32px;background:#111120;border-radius:16px;border:1px solid #2A2A45;">
        <!-- Logo -->
        <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          <tr>
            <td style="background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:8px;width:36px;height:36px;text-align:center;vertical-align:middle;">
              <span style="font-size:18px;color:#07070F;font-weight:900;">◆</span>
            </td>
            <td style="padding-left:10px;vertical-align:middle;">
              <div style="font-weight:700;font-size:14px;color:#E2E2F0;line-height:1;">PICO</div>
              <div style="font-size:11px;color:#8888AA;line-height:1;margin-top:2px;">Human Presence Pro</div>
            </td>
          </tr>
        </table>

        <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#E2E2F0;line-height:1.3;">
          Got it, ${name} ✓
        </h1>
        <p style="margin:0 0 20px;font-size:14px;color:#8888AA;line-height:1.7;">
          We received your request for a pre-built PICO unit. We'll review it and get back to you within 1–2 business days with pricing, availability, and shipping details.
        </p>

        <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;width:100%;background:#0C0C18;border-radius:10px;border:1px solid #2A2A45;">
          <tr><td style="padding:16px 20px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#2DD4BF;letter-spacing:0.08em;text-transform:uppercase;">What's included</p>
            <ul style="margin:0;padding-left:18px;font-size:13px;color:#8888AA;line-height:1.8;">
              <li>RP2040 board, flashed firmware</li>
              <li>3D-printed enclosure</li>
              <li>Desktop configurator (Windows .exe)</li>
              <li>Default config.json — editable</li>
            </ul>
          </td></tr>
        </table>

        <p style="margin:0 0 6px;font-size:13px;color:#8888AA;">
          Questions? Just reply to this email.
        </p>
        <p style="margin:0;font-size:13px;color:#8888AA;">
          — César, PICO
        </p>

        <hr style="margin:28px 0;border:none;border-top:1px solid #2A2A45;">
        <p style="margin:0;font-size:11px;color:#4A4A6A;text-align:center;">
          PICO Human Presence Pro · pico-landing.haxstat.workers.dev
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function leadNotificationEmail(
  name: string,
  email: string,
  message: string
): string {
  return `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#07070F;color:#E2E2F0;padding:32px;">
  <div style="max-width:480px;margin:0 auto;background:#111120;border-radius:12px;padding:24px;border:1px solid #2A2A45;">
    <p style="margin:0 0 4px;font-size:11px;color:#2DD4BF;letter-spacing:0.08em;font-weight:600;text-transform:uppercase;">New PICO Lead</p>
    <h2 style="margin:0 0 20px;font-size:18px;color:#E2E2F0;">${name}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr><td style="padding:8px 0;color:#8888AA;width:80px;">Email</td><td style="padding:8px 0;color:#E2E2F0;"><a href="mailto:${email}" style="color:#2DD4BF;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#8888AA;">Message</td><td style="padding:8px 0;color:#E2E2F0;">${message || "(none)"}</td></tr>
    </table>
    <a href="mailto:${email}?subject=Re: Your PICO request" style="display:inline-block;margin-top:20px;padding:10px 20px;background:#2DD4BF;color:#07070F;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;">Reply to ${name}</a>
  </div>
</body>
</html>`;
}

function orderConfirmationEmail(
  name: string,
  orderId: string,
  amount: number
): string {
  const formatted = (amount / 100).toFixed(2);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#07070F;font-family:'Inter',Arial,sans-serif;color:#E2E2F0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:40px auto;">
    <tr>
      <td style="padding:32px;background:#111120;border-radius:16px;border:1px solid #2A2A45;">
        <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          <tr>
            <td style="background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:8px;width:36px;height:36px;text-align:center;vertical-align:middle;">
              <span style="font-size:18px;color:#07070F;font-weight:900;">◆</span>
            </td>
            <td style="padding-left:10px;vertical-align:middle;">
              <div style="font-weight:700;font-size:14px;color:#E2E2F0;line-height:1;">PICO</div>
              <div style="font-size:11px;color:#8888AA;line-height:1;margin-top:2px;">Human Presence Pro</div>
            </td>
          </tr>
        </table>

        <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#E2E2F0;">
          Payment confirmed ✓
        </h1>
        <p style="margin:0 0 24px;font-size:14px;color:#8888AA;line-height:1.7;">
          Thanks ${name}! Your PICO Human Presence Pro is confirmed and will ship within 3–5 business days. You'll receive a tracking number by email when it's on its way.
        </p>

        <table cellpadding="0" cellspacing="0" style="width:100%;background:#0C0C18;border-radius:10px;border:1px solid #2A2A45;margin-bottom:24px;">
          <tr><td style="padding:16px 20px;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:600;color:#2DD4BF;letter-spacing:0.08em;text-transform:uppercase;">Order details</p>
            <table style="width:100%;font-size:13px;">
              <tr><td style="padding:4px 0;color:#8888AA;">Order ID</td><td style="padding:4px 0;color:#E2E2F0;text-align:right;font-family:monospace;font-size:11px;">${orderId.slice(-12)}</td></tr>
              <tr><td style="padding:4px 0;color:#8888AA;">Amount paid</td><td style="padding:4px 0;color:#E2E2F0;text-align:right;font-weight:600;">$${formatted} USD</td></tr>
              <tr><td style="padding:4px 0;color:#8888AA;">Product</td><td style="padding:4px 0;color:#E2E2F0;text-align:right;">PICO Human Presence Pro</td></tr>
            </table>
          </td></tr>
        </table>

        <p style="margin:0 0 6px;font-size:13px;color:#8888AA;">
          Questions? Reply to this email and we'll help.
        </p>
        <p style="margin:0;font-size:13px;color:#8888AA;">— César, PICO</p>

        <hr style="margin:28px 0;border:none;border-top:1px solid #2A2A45;">
        <p style="margin:0;font-size:11px;color:#4A4A6A;text-align:center;">
          PICO Human Presence Pro · pico-landing.haxstat.workers.dev
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── STRIPE WEBHOOK VERIFICATION ──────────────
async function verifyStripeSignature(
  body: string,
  signature: string,
  secret: string
): Promise<boolean> {
  try {
    const parts = signature.split(",");
    const tsPart = parts.find((p) => p.startsWith("t="));
    const v1Part = parts.find((p) => p.startsWith("v1="));
    if (!tsPart || !v1Part) return false;

    const timestamp = tsPart.slice(2);
    const expectedSig = v1Part.slice(3);
    const payload = `${timestamp}.${body}`;

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const sig = await crypto.subtle.sign(
      "HMAC",
      key,
      new TextEncoder().encode(payload)
    );
    const computed = Array.from(new Uint8Array(sig))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return computed === expectedSig;
  } catch {
    return false;
  }
}

// ── ROUTE: POST /leads ───────────────────────
async function handleLead(req: Request, env: Env): Promise<Response> {
  const origin = req.headers.get("Origin");

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400, origin);
  }

  const { name, email, message } = body;

  // Validate
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return json({ error: "Name is required" }, 400, origin);
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return json({ error: "Valid email is required" }, 400, origin);
  }

  const cleanName = name.trim().slice(0, 120);
  const cleanEmail = email.trim().toLowerCase().slice(0, 254);
  const cleanMessage = (message ?? "").trim().slice(0, 1000);

  // Save to Supabase (upsert on email — avoids duplicate leads)
  try {
    await supabaseUpsert(
      env,
      "leads",
      {
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
        source: "landing_prebuilt",
        updated_at: new Date().toISOString(),
      },
      "email"
    );
  } catch (err) {
    console.error("Supabase lead save error:", err);
    return json({ error: "Could not save your request. Try again." }, 500, origin);
  }

  // Send emails (non-blocking — don't fail the response if email fails)
  await Promise.allSettled([
    sendEmail(env, {
      to: cleanEmail,
      subject: "We got your PICO request ✓",
      html: leadConfirmationEmail(cleanName),
    }),
    sendEmail(env, {
      to: env.NOTIFICATION_EMAIL,
      subject: `New PICO lead: ${cleanName}`,
      html: leadNotificationEmail(cleanName, cleanEmail, cleanMessage),
    }),
  ]);

  return json({ success: true }, 200, origin);
}

// ── ROUTE: POST /webhook/stripe ──────────────
async function handleStripeWebhook(req: Request, env: Env): Promise<Response> {
  const signature = req.headers.get("stripe-signature") ?? "";
  const body = await req.text();

  // Verify signature
  const valid = await verifyStripeSignature(
    body,
    signature,
    env.STRIPE_WEBHOOK_SECRET
  );
  if (!valid) {
    return new Response("Unauthorized", { status: 401 });
  }

  let event: {
    type: string;
    data: {
      object: {
        id: string;
        customer_details?: {
          name?: string;
          email?: string;
          address?: Record<string, string>;
        };
        amount_total?: number;
        payment_status?: string;
        metadata?: Record<string, string>;
      };
    };
  };

  try {
    event = JSON.parse(body);
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const details = session.customer_details ?? {};
    const name = details.name ?? "Customer";
    const email = details.email ?? "";
    const address = details.address ?? {};
    const amount = session.amount_total ?? 0;

    // Save order to Supabase
    try {
      await supabaseUpsert(
        env,
        "orders",
        {
          stripe_session_id: session.id,
          name,
          email,
          address,
          amount_cents: amount,
          payment_status: session.payment_status ?? "paid",
          updated_at: new Date().toISOString(),
        },
        "stripe_session_id"
      );
    } catch (err) {
      console.error("Supabase order save error:", err);
      // Still return 200 to Stripe so it doesn't retry
    }

    // Send confirmation email to customer
    if (email) {
      await Promise.allSettled([
        sendEmail(env, {
          to: email,
          subject: "Your PICO order is confirmed ✓",
          html: orderConfirmationEmail(name, session.id, amount),
        }),
        sendEmail(env, {
          to: env.NOTIFICATION_EMAIL,
          subject: `New PICO order: ${name} — $${(amount / 100).toFixed(2)}`,
          html: leadNotificationEmail(
            name,
            email,
            `ORDER — $${(amount / 100).toFixed(2)} — ${JSON.stringify(address)}`
          ),
        }),
      ]);
    }
  }

  return new Response("ok", { status: 200 });
}

// ── MAIN HANDLER ─────────────────────────────
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    // CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Routes
    if (method === "POST" && url.pathname === "/leads") {
      return handleLead(request, env);
    }

    if (method === "POST" && url.pathname === "/webhook/stripe") {
      return handleStripeWebhook(request, env);
    }

    return new Response("Not found", { status: 404 });
  },
};
