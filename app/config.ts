// ─────────────────────────────────────────────
//  PICO — Site Configuration
//  Edit this file to update links, emails,
//  versions, and metadata across the whole site.
// ─────────────────────────────────────────────

export const SITE = {
  // Brand
  name: "PICO",
  tagline: "Human Presence Pro",
  fullName: "PICO Human Presence Pro",

  // Contact
  email: "cesar.gonzalez.franco@gmail.com",

  // Downloads (replace with real URLs when available)
  configuratorDownloadUrl: "https://github.com/haxstat/pico-landing/releases/download/v1.0.0/PICO_Configurator_Installer.exe",
  firmwareDownloadUrl: "",     // e.g. "https://github.com/.../firmware.uf2"

  // Versions
  firmwareVersion: "v1.0.0",
  configuratorVersion: "1.0.0",
  circuitpythonVersion: "CircuitPython 10.0.3",

  // SEO / Meta
  siteUrl: "https://pico-landing.haxstat.workers.dev",
  metaTitle: "PICO Human Presence Pro — Programmable USB HID Automation Device",
  metaDescription:
    "PICO is a programmable USB HID device built on the RP2040. It generates human-patterned keyboard and mouse activity — configurable timing, natural pauses, randomized paths. Offline. No drivers. Plug and play.",

  // Social (add when available)
  social: {
    github: "",
    instagram: "",
    twitter: "",
  },

  // Copyright
  author: "César Tulio González F.",
};

// Mailto helpers — generated from SITE.email above
export const MAILTO = {
  configurator: `mailto:${SITE.email}?subject=PICO%20Human%20Presence%20Pro%20-%20Configurator%20Download`,
  prebuilt: `mailto:${SITE.email}?subject=PICO%20Human%20Presence%20Pro%20-%20Pre-built%20Unit`,
  contact: `mailto:${SITE.email}`,
};
