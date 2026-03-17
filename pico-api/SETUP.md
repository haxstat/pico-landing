# PICO API — Setup Guide

## Overview
This Worker handles two things:
- **Lead capture** → saves interested people to Supabase + sends emails via Resend
- **Stripe webhooks** → saves confirmed orders to Supabase + sends confirmation emails

---

## Step 1 — Supabase (free database)

1. Go to https://supabase.com → **New project**
2. Name it `pico`, choose a region close to you
3. Wait ~2 min for it to provision
4. Go to **SQL Editor** → **New query**
5. Paste the entire contents of `supabase-schema.sql` → **Run**
6. Go to **Settings** → **API** and copy:
   - **Project URL** → this is your `SUPABASE_URL`
   - **service_role** key (under "Project API keys") → this is your `SUPABASE_SERVICE_KEY`
   > ⚠️ Use service_role key (not anon key) — the Worker needs it to bypass RLS

---

## Step 2 — Resend (free email)

1. Go to https://resend.com → create account
2. Go to **API Keys** → **Create API key** → name it `pico-api`
3. Copy the key → this is your `RESEND_API_KEY`
4. (Optional) Add your domain under **Domains** for branded `from:` addresses
   - Without a domain, emails send from `onboarding@resend.dev` (fine for now)

---

## Step 3 — Deploy the Worker

```bash
# From the pico-api folder:
cd pico-api
npm install
npx wrangler deploy
```

After deploy, you'll see a URL like:
```
https://pico-api.haxstat.workers.dev
```

---

## Step 4 — Set secrets

Run these one by one (Wrangler will prompt you to paste the value):

```bash
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_SERVICE_KEY
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put NOTIFICATION_EMAIL
npx wrangler secret put STRIPE_WEBHOOK_SECRET
```

- `SUPABASE_URL` → from Step 1
- `SUPABASE_SERVICE_KEY` → from Step 1
- `RESEND_API_KEY` → from Step 2
- `NOTIFICATION_EMAIL` → your email (e.g. `cesar.gonzalez.franco@gmail.com`)
- `STRIPE_WEBHOOK_SECRET` → from Step 5 (set a placeholder for now: `whsec_placeholder`)

---

## Step 5 — Stripe (for actual purchases, optional now)

1. Go to https://stripe.com → create account
2. Go to **Developers** → **Webhooks** → **Add endpoint**
3. URL: `https://pico-api.haxstat.workers.dev/webhook/stripe`
4. Events to listen for: `checkout.session.completed`
5. Copy the **Signing secret** → update `STRIPE_WEBHOOK_SECRET`:
   ```bash
   npx wrangler secret put STRIPE_WEBHOOK_SECRET
   ```
6. Create a **Payment Link** (Products → Add product → Payment Links)
7. Copy the Payment Link URL and put it in `app/config.ts`:
   ```ts
   stripePaymentLink: "https://buy.stripe.com/xxxxx",
   ```

---

## Step 6 — Update the landing page env

1. Open `C:\_BRCK\_pico\_landing_page\.env.local`
2. Set `NEXT_PUBLIC_API_URL` to your Worker URL:
   ```
   NEXT_PUBLIC_API_URL=https://pico-api.haxstat.workers.dev
   ```
3. Rebuild and redeploy the landing:
   ```bash
   cd ..
   npm run build
   npx wrangler deploy
   ```

---

## Testing

Test the lead endpoint:
```bash
curl -X POST https://pico-api.haxstat.workers.dev/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Testing"}'
```

Expected response: `{"success":true}`

Then check Supabase → Table Editor → leads to confirm it was saved.
