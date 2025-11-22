import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import QuoteForm from './components/QuoteForm'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />

      <section className="py-10 border-y border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs tracking-widest uppercase text-slate-400">Platforms</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 opacity-80">
            {['Flutterflow','Bubble','Webflow','n8n','Make','Buildship'].map((t) => (
              <div key={t} className="rounded-xl border border-white/5 bg-white/0 py-6 text-center text-xs text-slate-300">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
      <CTA />

      <footer id="contact" className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="text-white/90 font-medium">Nocode Solutions</h4>
              <p className="mt-2 text-slate-400">AI apps and automations with a minimal, future-first approach.</p>
              <p className="mt-3 text-slate-400">📩 hello@nocodesolutions.tech</p>
            </div>
            <div>
              <h4 className="text-white/90 font-medium">Services</h4>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li>AI Products</li>
                <li>Automations</li>
                <li>Integrations</li>
                <li>Mentorship</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 font-medium">Contact</h4>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li>Email us</li>
                <li>Schedule call</li>
                <li>Get quote</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 font-medium">Legal</h4>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between text-xs text-slate-500">
            <p>© 2025 Nocode Solutions</p>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-slate-300">Services</a>
              <a href="#why-us" className="hover:text-slate-300">Why Us</a>
              <a href="#quote" className="hover:text-slate-300">Get Quote</a>
              <a href="#contact" className="hover:text-slate-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
