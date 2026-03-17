"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Is this tool legal to use?",
    a: "PICO is a generic USB HID device — the same class as any keyboard or mouse. In most jurisdictions, sending input to your own machine via a USB peripheral is not illegal in itself. However, using any tool to falsify working hours, breach employment contracts, or defraud clients can be illegal and carries serious professional and legal consequences. Read your contracts carefully. If in doubt, consult a lawyer in your jurisdiction.",
  },
  {
    q: "Does it transmit any data to the internet?",
    a: "No. The RP2040 microcontroller has no network hardware. The firmware has no network stack. All configuration is stored as a plain JSON file directly on the device's flash memory (the CIRCUITPY drive). Nothing is transmitted, logged, or phoned home — ever.",
  },
  {
    q: "Will it work on macOS and Linux?",
    a: "Yes. The device uses the standard USB HID class, which is supported natively by every modern operating system — Windows, macOS, and Linux. No driver installation is required on any of these platforms. The desktop configurator app currently requires Windows, but the device itself works everywhere.",
  },
  {
    q: "Do I need to install software on the target machine?",
    a: "No. The device identifies itself as a standard USB keyboard and mouse. The target machine sees it as a regular peripheral — no driver prompt, no software install, no elevated permissions required on the machine it's connected to.",
  },
  {
    q: "Can I build it myself?",
    a: "Yes. The firmware targets any RP2040 board running CircuitPython (a Raspberry Pi Pico costs ~$4). The source is Python — readable, editable, no compilation needed. You need code.py, boot.py, settings.toml, and the Adafruit HID library bundle. Full instructions are included with the firmware package.",
  },
  {
    q: "What does the pre-built option include?",
    a: "Pre-built units come with the RP2040 board, flashed firmware, and a 3D-printed enclosure. The desktop configurator app (.exe installer) and default config.json are also included. Contact us to specify your text content or custom behavior profile before assembly.",
  },
  {
    q: "Will my employer or platform detect it?",
    a: "We make no claims about detection resistance, and we do not market PICO as a detection-evasion tool. The device presents as a standard USB peripheral. Whether any specific monitoring tool flags it depends entirely on that tool's implementation. Use it responsibly and in contexts where you're authorized to do so.",
  },
  {
    q: "Can I customize the typing patterns?",
    a: "Yes — all behavioral parameters are configurable via the desktop app: typo probability, minimum and maximum pause before and after each text, keyboard session probability, mouse-only session probability, and whether mouse movement and idle sessions are enabled. Text blocks (up to 30) are fully editable.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32" id="faq">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-1">
            <div className="section-label mb-3">FAQ</div>
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">
              Common questions
            </h2>
            <p className="section-subtext text-sm mb-6">
              Questions about setup, compatibility, legal use, and how the
              device works.
            </p>
            <div className="p-4 rounded-xl border border-amber-400/20 bg-amber-400/5">
              <div className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2L1 14h14L8 2z"
                    stroke="#FCD34D"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7v3"
                    stroke="#FCD34D"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="11.5" r="0.6" fill="#FCD34D" />
                </svg>
                <p className="text-xs text-amber-300/80 leading-relaxed">
                  This is a technical tool. How you use it is your
                  responsibility. Ensure you comply with your employment
                  agreements, platform terms, and local laws.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2 space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`card-base rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? "border-pico-600" : ""
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-medium text-sm text-pico-text leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-5 h-5 rounded-md border border-pico-600 flex items-center justify-center transition-transform duration-200 ${
                        isOpen ? "rotate-45 border-pico-primary/50 bg-pico-primary/10" : ""
                      }`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 1v8M1 5h8"
                          stroke={isOpen ? "#2DD4BF" : "#7878A8"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-pico-700/40">
                      <p className="text-sm text-pico-muted leading-relaxed pt-4">
                        {faq.a}
                      </p>
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
