import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0 h-[720px]">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[620px] flex flex-col items-center justify-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            AI-Powered Solutions & Automations
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Build Apps & Automate with AI
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-200/80">
            From idea to launch, we help startups and teams develop powerful apps, automate workflows, and integrate AI tools using leading no-code platforms.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#call" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100">Schedule Free Call</a>
            <a href="#quote" className="inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-white/20">Get Free Quote</a>
          </div>
          <div className="mt-6 text-slate-200/70 text-sm flex items-center gap-4">
            <span>5.0 rated by 100+ clients</span>
            <span>•</span>
            <span>50+ AI applications</span>
            <span>•</span>
            <span>500+ hours automated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
