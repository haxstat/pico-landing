const STEPS = [
  {
    number: "01",
    title: "Flash the firmware once",
    body: "Install CircuitPython on any RP2040 board and copy code.py and boot.py. The board immediately becomes a USB HID device — no compilation, no IDE.",
    chip: "CircuitPython · ~5 min",
  },
  {
    number: "02",
    title: "Configure in the desktop app",
    body: "Open Pico Configurator on Windows. Auto-detect the CIRCUITPY drive, write your text blocks, tune behavior settings, and save directly to the device's flash.",
    chip: "config.json on-device",
  },
  {
    number: "03",
    title: "Plug into any machine",
    body: "Connect the PICO to the target machine. It registers as a standard Logitech keyboard and mouse — no driver prompt, no software install, no admin rights required.",
    chip: "HID class · plug and play",
  },
  {
    number: "04",
    title: "Toggle with the hardware button",
    body: "Press the on-board button once. The NeoPixel turns green and the device begins cycling through keyboard sessions, mouse routes, and idle windows. Press again to stop.",
    chip: "Hardware button · LED feedback",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32" id="how-it-works">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: Steps */}
          <div>
            <div className="section-label mb-3">Setup</div>
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">
              Working in under 30 minutes
            </h2>
            <p className="section-subtext text-base mb-10 max-w-md">
              No compilation, no complex configuration. Flash, configure, plug in, press a button.
            </p>

            <div className="space-y-3">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  className="card-base p-5 flex gap-4 group cursor-default"
                >
                  <div className="shrink-0">
                    <div className="w-9 h-9 rounded-xl border border-pico-700 bg-pico-900 flex items-center justify-center font-mono font-medium text-sm text-pico-primary group-hover:border-pico-primary/40 group-hover:bg-pico-primary/5 transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-pico-text text-sm mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-pico-muted leading-relaxed mb-2.5">
                      {step.body}
                    </p>
                    <span className="badge-primary text-2xs">
                      {step.chip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Config app mockup */}
          <div className="lg:sticky lg:top-24">
            <div className="card-base rounded-2xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-pico-700/60 bg-pico-900/60">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-pico-700" />
                  <span className="w-3 h-3 rounded-full bg-pico-700" />
                  <span className="w-3 h-3 rounded-full bg-pico-700" />
                </div>
                <span className="text-xs font-mono text-pico-muted ml-2">
                  Pico Human Presence Configurator
                </span>
              </div>

              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-pico-900/40 border-b border-pico-700/40">
                <div className="flex items-center gap-2">
                  <span className="glow-dot-green" />
                  <span className="text-xs text-pico-green font-mono">
                    CIRCUITPY detected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-pico-muted font-mono">
                    Number of texts:
                  </span>
                  <span className="px-2 py-0.5 rounded border border-pico-600 bg-pico-800 text-xs font-mono text-pico-text">
                    20 ▾
                  </span>
                </div>
              </div>

              {/* Text blocks */}
              <div className="p-4 space-y-3">
                {[1, 2, 3].map((n) => (
                  <div key={n}>
                    <div className="text-xs font-mono text-pico-muted mb-1.5">
                      Text {n}
                    </div>
                    <div className="rounded-lg border border-pico-700/60 bg-pico-950/60 px-3 py-2.5 min-h-[52px] relative overflow-hidden">
                      {n === 1 ? (
                        <span className="text-xs font-mono text-pico-text/80">
                          The pacing works but the cut at 0:38 disrupts the
                          narrative flow — consider extending the transition
                          by 8–12 frames.
                          <span className="inline-block w-1.5 h-3 bg-pico-primary animate-blink ml-0.5 rounded-sm align-text-bottom" />
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-pico-subtle italic">
                          Write your completion / text block here...
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Behavior settings */}
                <div className="pt-2 border-t border-pico-700/40">
                  <div className="text-xs font-display font-semibold text-pico-text mb-3">
                    Behavior Settings
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Typo probability (0–1):", value: "0.080" },
                      {
                        label: "Pause BEFORE each text (min / max, s):",
                        value: "0.80  /  3.00",
                      },
                      {
                        label: "Pause AFTER each text (min / max, s):",
                        value: "10.00  /  20.00",
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="text-xs text-pico-muted font-mono shrink-0">
                          {row.label}
                        </span>
                        <span className="px-2 py-0.5 rounded border border-pico-600 bg-pico-800 text-xs font-mono text-pico-primary">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Checkboxes */}
                  <div className="flex gap-4 mt-3">
                    {["Enable mouse movement", "Enable idle sessions"].map(
                      (label) => (
                        <div key={label} className="flex items-center gap-1.5">
                          <div className="w-3.5 h-3.5 rounded-sm border border-pico-primary/60 bg-pico-primary/15 flex items-center justify-center">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M1.5 4l2 2 3-3"
                                stroke="#2DD4BF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-2xs text-pico-muted font-mono">
                            {label}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-2 pt-1">
                  <button className="btn-ghost text-xs px-3 py-1.5 cursor-pointer">
                    Load from Device
                  </button>
                  <button className="btn-primary text-xs px-3 py-1.5 cursor-pointer">
                    Save to Device
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
