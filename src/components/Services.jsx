export default function Services() {
  const services = [
    {
      title: 'AI Products',
      desc: 'From concept to launch. Clean UI, fast performance, real impact.',
      bullets: ['Web & mobile', 'LLM features', 'Scalable', 'MVP in weeks'],
    },
    {
      title: 'Automations',
      desc: 'Orchestrate tools and data. Let workflows run while you sleep.',
      bullets: ['n8n / Make', 'APIs & data', 'Human-in-the-loop', 'Monitoring'],
    },
    {
      title: 'Integrations',
      desc: 'Connect CRMs, stores and data pipelines with minimal friction.',
      bullets: ['Clean data flow', 'Custom logic', 'Error handling', 'Dashboards'],
    },
    {
      title: 'Mentorship',
      desc: 'Upskill your team to ship AI with clarity and confidence.',
      bullets: ['1:1 coaching', 'Playbooks', 'Hands-on support', 'Reviews'],
    },
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we build</h2>
          <p className="mt-3 text-slate-400">Minimal interfaces. Powerful systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/5 bg-white/0 p-6 hover:bg-white/[0.03] transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white/90">{s.title}</h3>
                <span className="h-1 w-8 rounded-full bg-white/20" />
              </div>
              <p className="mt-2 text-slate-400 text-sm">{s.desc}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
