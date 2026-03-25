# PICO Human Presence Pro

> Programmable USB HID device that simulates human presence — keeping sessions alive with natural, configurable keyboard and mouse activity.

**Live site:** [pico-landing.haxstat.workers.dev](https://pico-landing.haxstat.workers.dev)

---

## What is PICO?

PICO is a plug-and-play USB device built on the RP2040 microcontroller running CircuitPython. It appears to the host computer as a standard keyboard and mouse (USB HID), generating human-patterned input activity with randomized timing and natural pauses — no drivers, no software installation required on the host.

Use cases include keeping remote sessions alive, preventing screensavers, automating repetitive keystrokes, and any scenario where simulated human presence is needed.

Physical units ship pre-flashed inside a custom 3D-printed enclosure.

---

## Repository Contents

This repository contains the **marketing landing page** for PICO, not the device firmware.

```
pico-landing/
├── app/                    # Next.js App Router
│   ├── components/         # Page sections (Hero, Features, CTA, etc.)
│   ├── config.ts           # Central config — URLs, emails, versions
│   ├── context/            # Language context (EN/ES i18n)
│   ├── i18n/               # Translation strings
│   └── layout.tsx          # Root layout + metadata
├── pico-api/               # Cloudflare Worker (lead capture API)
│   └── src/index.ts        # POST /leads endpoint → Supabase + Resend
├── public/
│   └── favicon.svg         # PICO diamond logo
└── wrangler.toml           # Cloudflare deployment config
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| i18n | React Context (EN / ES) |
| API | Cloudflare Workers |
| Database | Supabase (PostgreSQL + RLS) |
| Email | Resend |
| Hosting | Cloudflare Workers |
| Installer | InnoSetup (Windows) |
| Firmware | CircuitPython 10.0.3 on RP2040 |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Configuration

All hardcoded values (email, download URLs, versions, metadata) live in a single file:

```
app/config.ts
```

Edit that file and the changes propagate across the entire site.

---

## Deployment

### Landing Page (Cloudflare Workers)

```bash
npm run build
npx wrangler deploy
```

### API Worker

```bash
cd pico-api
npm install
npx wrangler deploy
```

Required secrets (set via `npx wrangler secret put <NAME>`):

| Secret | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Supabase service role key |
| `RESEND_API_KEY` | Resend API key |
| `NOTIFICATION_EMAIL` | Email to receive lead notifications |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret (when Stripe is enabled) |

---

## Downloads

| Asset | Link |
|---|---|
| Windows Configurator (v1.0.0) | [Download .exe](https://github.com/haxstat/pico-landing/releases/download/v1.0.0/PICO_Configurator_Installer.exe) |

---

## Author

**César Tulio González F.** — [github.com/haxstat](https://github.com/haxstat)

---

## License

MIT
