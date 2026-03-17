const FEATURES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="#2DD4BF" strokeWidth="1.3" />
        <path d="M5 8h3M5 10.5h5M5 13h2" stroke="#2DD4BF" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10.5 8.5c.5-.5 1.5-.5 1.5.5s-1 1-1 1.5" stroke="#7878A8" strokeWidth="1" strokeLinecap="round" />
        <circle cx="11" cy="12" r="0.6" fill="#7878A8" />
      </svg>
    ),
    title: "Human typing engine",
    body: "Characters are typed with 80–300 ms randomized delays. 8% typo probability (configurable) inserts a wrong character, pauses 50–120 ms, backspaces and corrects — exactly like a real typist catching a mistake.",
    detail: "Micro-pauses at . ! ? , and every 25–45 chars",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 14C5 10 7 4 9 8s4-2 6-4" stroke="#2DD4BF" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="6" cy="10" r="1.2" fill="#2DD4BF" opacity="0.6" />
        <circle cx="12" cy="6.5" r="1.2" fill="#2DD4BF" opacity="0.6" />
        <path d="M14 12l1 1.5-1.5.5" stroke="#7878A8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Curved mouse navigation",
    body: "Mouse sessions follow 8–13 randomized segments with sinusoidal easing and ±60 px lateral variation. Each session distributes 1–3 clicks randomly across segments. No linear movements, no robotic trajectories.",
    detail: "Ease-in-out interpolation · 40 steps/sec",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="5.5" height="5.5" rx="1.2" stroke="#2DD4BF" strokeWidth="1.3" />
        <rect x="10.5" y="2" width="5.5" height="5.5" rx="1.2" stroke="#7878A8" strokeWidth="1.3" />
        <rect x="2" y="10.5" width="5.5" height="5.5" rx="1.2" stroke="#7878A8" strokeWidth="1.3" />
        <path d="M10.5 10.5h5.5v5.5H10.5z" rx="1.2" stroke="#2DD4BF" strokeWidth="1.3" />
        <path d="M9 4.75h1.5M9 13.25h1.5M4.75 9v1.5M13.25 9v1.5" stroke="#2DD4BF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Probabilistic session scheduler",
    body: "Three session types — keyboard (60%), mouse-only (40%), and idle — alternate in a randomized loop. Over any 10-minute window, activity density mirrors real human work patterns rather than constant input.",
    detail: "All probabilities configurable 0–1",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 3h12v10H3z" rx="1.5" stroke="#2DD4BF" strokeWidth="1.3" />
        <path d="M6 7h6M6 9.5h4" stroke="#2DD4BF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7 14v1.5M11 14v1.5M5 15.5h8" stroke="#7878A8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "30-slot text configurator",
    body: "Load up to 30 custom text blocks into the device via the desktop app. These are typed verbatim (with human patterns) during keyboard sessions — evaluation notes, templates, responses, anything.",
    detail: "Stored in config.json on-device",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="#2DD4BF" strokeWidth="1.3" />
        <rect x="7.5" y="6" width="3" height="4" rx="1" fill="#2DD4BF" opacity="0.7" />
        <path d="M9 12v1.5" stroke="#2DD4BF" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="9" cy="4" r="0.8" fill="#4ADE80" />
        <path d="M8.5 4a.5.5 0 011 0" stroke="#4ADE80" strokeWidth="0.8" />
      </svg>
    ),
    title: "Hardware button control",
    body: "One button press starts or stops all activity. 250 ms hardware debounce prevents accidental toggles. A 5-second startup grace period prevents triggering on plug-in. The NeoPixel LED confirms state at a glance.",
    detail: "Green = active · Off = standby",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="14" height="12" rx="2" stroke="#2DD4BF" strokeWidth="1.3" />
        <path d="M2 7h14" stroke="#2DD4BF" strokeWidth="1.3" />
        <path d="M5 5h.5M7.5 5h.5M10 5h.5" stroke="#7878A8" strokeWidth="1" strokeLinecap="round" />
        <path d="M5.5 11l1.5-1.5 1.5 1.5 3-3" stroke="#4ADE80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14v-2M11 14v-1M15 14v-3" stroke="#2DD4BF" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "100% offline, zero traces",
    body: "The RP2040 has no network hardware. The firmware has no network stack. All configuration is stored as a plain JSON file on the device's flash. Nothing is transmitted, logged, or phoned home.",
    detail: "Air-gapped · no telemetry · open source firmware",
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32" id="features">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="max-w-xl mb-14">
          <div className="section-label mb-3">Features</div>
          <h2 className="section-heading text-3xl sm:text-4xl mb-4">
            Every detail deliberate
          </h2>
          <p className="section-subtext text-base">
            The firmware implements real human behavioral patterns — not random
            delays, but timing models derived from actual typing rhythm and
            cursor movement research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <article
              key={i}
              className="card-base p-6 group cursor-default relative overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-card-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

              <div className="relative z-10">
                <div className="w-9 h-9 rounded-xl border border-pico-700 bg-pico-900/80 flex items-center justify-center mb-5 group-hover:border-pico-primary/30 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-pico-text text-sm mb-2.5">
                  {f.title}
                </h3>
                <p className="text-sm text-pico-muted leading-relaxed mb-4">
                  {f.body}
                </p>
                <div className="font-mono text-2xs text-pico-primary/70 border-t border-pico-700/50 pt-3">
                  {f.detail}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
