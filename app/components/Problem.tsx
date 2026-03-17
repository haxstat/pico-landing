const PROBLEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#7878A8" strokeWidth="1.5" />
        <path d="M10 6v4.5l2.5 2.5" stroke="#7878A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 16.5L4 18M14 16.5l2 1.5" stroke="#ff6b6b" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    tag: "Session management",
    title: "Idle detection breaks your context",
    body: "Dashboards, remote tools, and collaboration platforms log you out after a few minutes of inactivity — even mid-task. Reading documentation, reviewing output, or thinking through a problem doesn't register as activity.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="#7878A8" strokeWidth="1.5" />
        <path d="M7 9h6M7 12h4" stroke="#7878A8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="5" r="3" fill="#ff6b6b" />
        <path d="M14 4.5l.8.8 1.2-1.3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Cognitive overhead",
    title: "Repetitive entry is mechanical noise",
    body: "Typing the same evaluation notes, templates, and responses across tools multiple times a day is low-value overhead. It keeps your hands busy without engaging your brain — the worst kind of work.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="12" height="9" rx="1.5" stroke="#7878A8" strokeWidth="1.5" />
        <path d="M14 9l4-3v8l-4-3" stroke="#7878A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10.5h4" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 8.5v4" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tag: "Automation limits",
    title: "Software solutions leave traces",
    body: "Script-based automation and virtual input drivers require elevated OS permissions, appear in process lists, and can conflict with platform restrictions. A software approach introduces exactly the kind of footprint you're trying to avoid.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 sm:py-32 relative">
      {/* Subtle top divider */}
      <div className="divider mb-0" />

      <div className="section-container pt-24">
        <div className="max-w-xl mb-14">
          <div className="section-label mb-3">The problem</div>
          <h2 className="section-heading text-3xl sm:text-4xl mb-4">
            Tools built for offices,<br />used in the real world
          </h2>
          <p className="section-subtext text-base">
            Modern remote work stacks were designed around the assumption that
            presence equals constant mouse movement. For developers, analysts, and
            creative workers, that assumption fails constantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROBLEMS.map((item, i) => (
            <article
              key={i}
              className="card-base p-6 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-pico-700/60 border border-pico-600/40 flex items-center justify-center mb-5 group-hover:border-pico-600 transition-colors duration-300">
                {item.icon}
              </div>
              <div className="section-label text-pico-muted mb-2">
                {item.tag}
              </div>
              <h3 className="font-display font-semibold text-pico-text text-base mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-pico-muted leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
