const USE_CASES = [
  {
    tag: "AI & data work",
    title: "Model evaluation & annotation",
    desc: "AI trainers and data labelers spend substantial time reading, analyzing, and composing nuanced feedback — not typing continuously. Load evaluation templates as text blocks and let PICO handle the mechanical output while you focus on the cognitive work.",
    stat: "Up to 30 text templates",
  },
  {
    tag: "Creative & production",
    title: "Long renders & export queues",
    desc: "Video editors and 3D artists often have workstations busy with renders or uploads for hours. Time tracking and collaboration tools see the machine as idle. PICO keeps sessions active during export queues without requiring you to babysit the cursor.",
    stat: "Mouse-only mode available",
  },
  {
    tag: "Remote operations",
    title: "Monitoring & dashboard shifts",
    desc: "NOC analysts, DevOps engineers, and on-call engineers watch dashboards for extended periods where significant time is spent observing rather than interacting. Prevent auto-logouts from monitoring platforms without interrupting your actual observation.",
    stat: "Configurable idle intervals",
  },
  {
    tag: "Development workflows",
    title: "CI/CD & build pipelines",
    desc: "Long-running builds, test suites, and deployment pipelines leave your machine sitting idle in collaboration tools. Stay registered as active in Slack, Jira, and other platforms while waiting on pipeline completion.",
    stat: "Keyboard + mouse sessions",
  },
  {
    tag: "Research & analysis",
    title: "Deep reading & review sessions",
    desc: "Researchers, technical reviewers, and documentation writers spend significant time reading rather than producing keystrokes. Prevent session timeouts during extended analysis blocks without disrupting your reading flow.",
    stat: "Adjustable session intervals",
  },
  {
    tag: "Freelance & contracting",
    title: "Platform presence management",
    desc: "Freelancers on time-tracking platforms need sessions to remain active across the full billable block, even during tasks that involve thinking more than typing. PICO maintains presence state without requiring constant mechanical input.",
    stat: "Per-device licensing",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 sm:py-32" id="use-cases">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="max-w-xl mb-14">
          <div className="section-label mb-3">Use cases</div>
          <h2 className="section-heading text-3xl sm:text-4xl mb-4">
            Built for focused, deep work
          </h2>
          <p className="section-subtext text-base">
            PICO started as a personal tool for AI trainers. It turned out
            that the same problem — presence detection that penalizes
            cognitive over mechanical work — affects many disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_CASES.map((uc, i) => (
            <article
              key={i}
              className="card-base p-6 group cursor-default flex flex-col"
            >
              <div className="badge-primary mb-4 self-start">{uc.tag}</div>
              <h3 className="font-display font-semibold text-pico-text text-[15px] mb-3 leading-snug">
                {uc.title}
              </h3>
              <p className="text-sm text-pico-muted leading-relaxed flex-1">
                {uc.desc}
              </p>
              <div className="mt-4 pt-4 border-t border-pico-700/40 flex items-center gap-2">
                <span className="glow-dot" />
                <span className="text-xs font-mono text-pico-muted">
                  {uc.stat}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
