import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0 h-[680px] overflow-hidden">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.2),rgba(2,6,23,0.9))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[600px] flex flex-col items-center justify-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-slate-300/80">
            AI apps • automations • integrations
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Futuristic builds. Minimal surface.
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300/80">
            We craft clean, fast experiences powered by AI and no‑code.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#call" className="inline-flex items-center rounded-xl bg-white/90 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-white">
              Schedule Free Call
            </a>
            <a href="#quote" className="inline-flex items-center rounded-xl border border-white/15 text-white px-5 py-3 text-sm font-medium hover:border-white/30">
              Get Free Quote
            </a>
          </div>
          <div className="mt-6 text-slate-400 text-xs flex items-center gap-4">
            <span>100+ happy teams</span>
            <span>•</span>
            <span>50+ AI products</span>
            <span>•</span>
            <span>500+ hours automated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
