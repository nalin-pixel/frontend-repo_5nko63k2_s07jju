export default function Services() {
  const services = [
    {
      title: 'Custom AI App Development',
      desc: 'Build custom web and mobile apps with AI capabilities using platforms like Flutterflow, Bubble, and Webflow. From MVPs to fully-scaled systems.',
      bullets: ['AI-powered features', 'Cross-platform compatibility', 'Scalable architecture', 'Rapid deployment'],
    },
    {
      title: 'AI Business Automation',
      desc: 'Leverage intelligent workflows using n8n, Make, and Buildship. Connect tools, reduce manual work, and enable data-driven processes.',
      bullets: ['Smart AI workflows', 'Multi-tool integration', 'Process optimization', 'Real-time monitoring'],
    },
    {
      title: 'Intelligent Integrations',
      desc: 'Eliminate inefficiencies with AI-enhanced integrations between CRMs, databases, and eCommerce platforms using advanced automation tools.',
      bullets: ['Seamless data flow', 'Automated decision making', 'Custom logic implementation', 'Error handling'],
    },
    {
      title: 'AI Solutions Mentorship',
      desc: 'Learn to build AI-powered solutions with guidance from experts. Includes 1:1 coaching, custom learning paths, and hands-on support.',
      bullets: ['Personalized coaching', 'AI tool mastery', 'Hands-on projects', 'Community access'],
    },
  ]

  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our AI-Powered Solutions</h2>
          <p className="mt-3 text-slate-300/80">We specialize in creating intelligent, automated solutions that transform how businesses operate</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{s.desc}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-200/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {b}
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
