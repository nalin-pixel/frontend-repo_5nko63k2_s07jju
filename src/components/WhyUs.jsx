export default function WhyUs() {
  const points = [
    { title: 'Partner, not platform', desc: 'We ship outcomes, not tools.' },
    { title: 'Weeks, not months', desc: 'Rapid delivery with quality.' },
    { title: 'AI-first', desc: 'Practical, measurable intelligence.' },
    { title: 'Teach or take over', desc: 'We build and/or enable your team.' },
    { title: 'Future-ready', desc: 'Scalable foundations and clean data.' },
    { title: 'Remote-native', desc: 'Global availability, local care.' },
  ]

  return (
    <section id="why-us" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Principles</h2>
          <p className="mt-3 text-slate-400">Simple, strong, sustainable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/5 p-6 hover:bg-white/[0.03] transition-colors">
              <h3 className="text-white/90 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
