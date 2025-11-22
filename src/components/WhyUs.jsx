export default function WhyUs() {
  const points = [
    {
      title: 'Not a Platform, A Real Partner',
      desc: "We don't just offer tools, we build intelligent solutions with them for you.",
    },
    {
      title: 'Faster Time-to-Launch',
      desc: 'Get your AI-powered MVP, app, or automation live in weeks, not months.',
    },
    {
      title: 'AI Automation Specialists',
      desc: 'From intelligent chatbots to smart workflows, we power your business with AI.',
    },
    {
      title: 'Global Support, Local Understanding',
      desc: 'Flexible, remote-first collaboration tailored to your specific needs.',
    },
    {
      title: 'Teach or Take Over',
      desc: "Want us to build it all? Done. Want to learn and build yourself? We'll teach you.",
    },
    {
      title: 'Future-Proof Solutions',
      desc: 'Built with scalability and emerging AI technologies in mind.',
    },
  ]

  return (
    <section id="why-us" className="relative py-20 bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Nocode Solutions</h2>
          <p className="mt-3 text-slate-300/80">Efficient and tailored AI solutions for your business needs. Leave the complex tech to us and focus on growing your business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
