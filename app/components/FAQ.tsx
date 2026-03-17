"use client";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../i18n/translations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLang();
  const T = t[lang].faq;

  return (
    <section className="py-24 sm:py-32" id="faq">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-1">
            <div className="section-label mb-3">{T.label}</div>
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">{T.heading}</h2>
            <p className="section-subtext text-sm mb-6">{T.sub}</p>
            <div className="p-4 rounded-xl border border-amber-400/20 bg-amber-400/5">
              <div className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M8 2L1 14h14L8 2z" stroke="#FCD34D" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="M8 7v3" stroke="#FCD34D" strokeWidth="1.3" strokeLinecap="round" />
                  <circle cx="8" cy="11.5" r="0.6" fill="#FCD34D" />
                </svg>
                <p className="text-xs text-amber-300/80 leading-relaxed">{T.warning}</p>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2 space-y-2">
            {T.items.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`card-base rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? "border-pico-600" : ""}`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-medium text-sm text-pico-text leading-snug">{faq.q}</span>
                    <span className={`shrink-0 w-5 h-5 rounded-md border border-pico-600 flex items-center justify-center transition-transform duration-200 ${isOpen ? "rotate-45 border-pico-primary/50 bg-pico-primary/10" : ""}`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M5 1v8M1 5h8" stroke={isOpen ? "#2DD4BF" : "#7878A8"} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-pico-700/40">
                      <p className="text-sm text-pico-muted leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
