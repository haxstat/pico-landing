import { SITE, MAILTO } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-pico-700/60 bg-pico-950">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-pico-primary via-pico-primary/80 to-pico-primary/40 flex items-center justify-center opacity-80">
              <svg width="9" height="14" viewBox="0 0 11 17" fill="none" aria-hidden="true">
                <polygon points="5.5,0 11,8.5 5.5,17 0,8.5" fill="#07070F" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-display font-semibold text-pico-text/80 tracking-tight">
                {SITE.fullName}
              </div>
              <div className="text-2xs text-pico-subtle mt-0.5">
                © {new Date().getFullYear()} {SITE.author} · All rights reserved.
              </div>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-pico-muted">
              <li>
                <a href="#features" className="hover:text-pico-text transition-colors duration-150 cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-pico-text transition-colors duration-150 cursor-pointer">
                  How it works
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-pico-text transition-colors duration-150 cursor-pointer">
                  Specs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pico-text transition-colors duration-150 cursor-pointer">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={MAILTO.contact}
                  className="hover:text-pico-text transition-colors duration-150 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-pico-700/40">
          <p className="text-2xs text-pico-subtle leading-relaxed max-w-3xl">
            PICO Human Presence Pro is a hardware automation tool. All use is subject to the EULA.
            The creator accepts no liability for employment consequences, contract breaches, or any
            other damages arising from use or misuse. All third-party product names are trademarks
            of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
