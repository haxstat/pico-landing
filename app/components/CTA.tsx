"use client";
import { useState } from "react";
import { SITE, MAILTO } from "../config";
import { useLang } from "../context/LanguageContext";
import { t } from "../i18n/translations";
import LeadModal from "./LeadModal";

export default function CTA() {
  const { lang } = useLang();
  const T = t[lang].cta;
  const [modalOpen, setModalOpen] = useState(false);

  const TRUST_ITEMS = [
    { label: T.trust1Label, sub: T.trust1Sub },
    { label: T.trust2Label, sub: T.trust2Sub },
    { label: T.trust3Label, sub: T.trust3Sub },
    { label: T.trust4Label, sub: T.trust4Sub },
  ];

  return (
    <section className="py-24 sm:py-32" id="cta">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(45,212,191,0.10), rgba(14,14,28,0) 70%), linear-gradient(180deg, #111120 0%, #0C0C18 100%)",
            }}
          />
          <div className="absolute inset-0 border border-pico-700 rounded-3xl pointer-events-none" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="badge-primary mb-6 mx-auto w-fit">
              {T.badge} · {SITE.firmwareVersion}
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-pico-text tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
              {T.heading1}<br />
              <span className="text-gradient">{T.heading2}</span>
            </h2>

            <p className="section-subtext text-base max-w-lg mx-auto mb-10">
              {T.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href={SITE.configuratorDownloadUrl || MAILTO.configurator}
                className="btn-primary px-7 py-3 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1v10M5 8l3 3 3-3M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {T.downloadBtn}
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-ghost px-7 py-3 text-sm"
              >
                {T.prebuiltBtn}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="rounded-xl border border-pico-700/60 bg-pico-900/60 px-4 py-3 text-center">
                  <div className="font-display font-semibold text-sm text-pico-text mb-0.5">{item.label}</div>
                  <div className="text-2xs text-pico-muted">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-pico-muted">
            {T.contactNote}{" "}
            <a
              href={MAILTO.contact}
              className="text-pico-primary hover:text-pico-text transition-colors duration-150 underline underline-offset-2 decoration-pico-primary/30 cursor-pointer"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </div>

      {/* Lead capture modal */}
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
