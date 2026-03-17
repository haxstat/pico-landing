"use client";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../i18n/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const T = t[lang].nav;

  const NAV_LINKS = [
    { label: T.features, href: "#features" },
    { label: T.howItWorks, href: "#how-it-works" },
    { label: T.useCases, href: "#use-cases" },
    { label: T.specs, href: "#specs" },
    { label: T.faq, href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pico-700/60 backdrop-blur-xl bg-pico-950/80">
      <nav className="section-container flex items-center justify-between h-16 gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 cursor-pointer">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-pico-primary via-pico-primary/80 to-pico-primary/40 flex items-center justify-center shadow-glow-sm">
            <svg
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              aria-hidden="true"
            >
              <polygon points="5.5,0 11,8.5 5.5,17 0,8.5" fill="#07070F" />
            </svg>
          </div>
          <div>
            <div className="font-display font-semibold text-sm text-pico-text tracking-tight leading-none">
              PICO
            </div>
            <div className="text-2xs text-pico-muted leading-none mt-0.5">
              Human Presence Pro
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm text-pico-muted rounded-lg hover:text-pico-text hover:bg-pico-800 transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-pico-muted border border-pico-700 rounded-lg hover:text-pico-text hover:border-pico-600 transition-colors duration-150 cursor-pointer"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-pico-primary" : ""}>EN</span>
            <span className="text-pico-700">|</span>
            <span className={lang === "es" ? "text-pico-primary" : ""}>ES</span>
          </button>
          <a
            href="#cta"
            className="hidden sm:flex btn-primary text-xs px-4 py-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1v8M4 6l3 3 3-3M2 11h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {T.download}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg border border-pico-700 text-pico-muted hover:text-pico-text hover:border-pico-600 transition-colors duration-150 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-pico-700/60 bg-pico-900/95 backdrop-blur-xl">
          <ul className="section-container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm text-pico-muted hover:text-pico-text hover:bg-pico-800 rounded-lg transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#cta" className="btn-primary w-full justify-center">
                Download Configurator
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
