const LOG_LINES = [
  { time: "19:04:12", text: "Keyboard session · block #07 selected" },
  { time: "19:04:14", text: 'Typing: "The pacing works but the cut at 0:38…"' },
  { time: "19:05:48", text: "Mouse route: 11 segments · 3 clicks · 9.2 s" },
  { time: "19:06:02", text: "Idle window: 23 s · LED = active" },
];

const SHIELDS = [
  "100% offline",
  "No drivers required",
  "Win / macOS / Linux",
  "RP2040 · CircuitPython",
];

export default function Hero() {
  return (
    <section
      className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 overflow-hidden"
      id="hero"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-pico-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-pico-indigo/4 blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-pico-700 bg-pico-800/80 text-xs text-pico-muted mb-7">
              <span className="badge-primary text-2xs px-2 py-0.5">v1.0</span>
              RP2040 · USB HID · CircuitPython
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-pico-text mb-6">
              Human presence,{" "}
              <span className="text-gradient">automated.</span>
            </h1>

            <p className="text-base sm:text-lg text-pico-muted leading-relaxed max-w-lg mb-8">
              A programmable{" "}
              <strong className="text-pico-text font-medium">USB HID device</strong>{" "}
              built on the RP2040. It generates realistic keyboard and mouse
              activity — randomized timing, natural pauses, configurable text
              — entirely from hardware.{" "}
              <strong className="text-pico-text font-medium">
                No software on the target machine.
              </strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="#cta" className="btn-primary">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download Configurator
              </a>
              <a href="#how-it-works" className="btn-ghost">
                How it works
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {SHIELDS.map((s) => (
                <div key={s} className="badge-neutral gap-2">
                  <span className="glow-dot" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Device visual */}
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute -inset-4 bg-pico-primary/5 rounded-3xl blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative card-base rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-pico-700/60">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-pico-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-pico-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-pico-primary/60" />
                  </div>
                  <span className="font-mono text-xs text-pico-muted">
                    Pico Configurator · Active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="glow-dot-green" />
                  <span className="text-xs text-pico-green font-mono">RUNNING</span>
                </div>
              </div>

              <div className="p-5 grid grid-cols-5 gap-4 items-stretch">
                {/* Left: real app screenshot — full height, no label */}
                <div className="col-span-3 flex">
                  <div className="rounded-xl overflow-hidden border border-pico-600/50 flex-1">
                    <img
                      src="/app-screenshot.png"
                      alt="Pico Human Presence Configurator"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Right: stats */}
                <div className="col-span-2 flex flex-col gap-3">
                  <div className="card-base rounded-xl p-3.5 bg-pico-900 flex-1">
                    <div className="text-2xs text-pico-muted mb-1">Active</div>
                    <div className="font-display font-bold text-xl text-pico-text leading-none">
                      63–74%
                    </div>
                    <div className="text-2xs text-pico-muted mt-1">
                      per 10-min window
                    </div>
                    <div className="mt-2.5 h-1 rounded-full bg-pico-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pico-primary to-pico-primary/60"
                        style={{ width: "68%" }}
                      />
                    </div>
                  </div>
                  <div className="card-base rounded-xl p-3.5 bg-pico-900 flex-1">
                    <div className="text-2xs text-pico-muted mb-1">Mode</div>
                    <div className="font-display font-bold text-base text-pico-text leading-tight">
                      Kbd + Mouse
                    </div>
                    <div className="mt-2 flex gap-1">
                      <span className="badge-primary text-2xs">60% KB</span>
                      <span className="badge-neutral text-2xs">40% MO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity log */}
              <div className="mx-5 mb-5 rounded-xl border border-pico-700/60 bg-pico-950/80 overflow-hidden">
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-pico-700/40">
                  <span className="text-2xs font-mono text-pico-subtle uppercase tracking-widest">
                    activity log
                  </span>
                  <span className="flex items-center gap-1.5 text-2xs text-pico-muted">
                    <span className="glow-dot animate-pulse_slow" />
                    live
                  </span>
                </div>
                <div className="p-3 space-y-1.5 font-mono text-xs">
                  {LOG_LINES.map((line, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-pico-primary shrink-0">
                        [{line.time}]
                      </span>
                      <span className="text-pico-muted">{line.text}</span>
                      {i === LOG_LINES.length - 1 && (
                        <span
                          className="inline-block w-1.5 h-3.5 bg-pico-primary animate-blink ml-0.5 rounded-sm shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
