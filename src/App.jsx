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

      {/* Logos / tools section placeholder spacing */}
      <section className="py-10 border-y border-white/5 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-400">AI & No-Code Platforms We Master</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 opacity-70">
            {['Flutterflow','Bubble','Webflow','n8n','Make','Buildship'].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/5 py-6 text-center text-sm">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
      <CTA />

      <footer id="contact" className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="text-white font-semibold">Nocode Solutions</h4>
              <p className="mt-2 text-slate-400">Custom AI app development & intelligent automation solutions. Helping businesses scale with no-code AI technologies.</p>
              <p className="mt-3 text-slate-400">📍 Based Online – Serving Clients Worldwide</p>
              <p className="text-slate-400">📩 hello@nocodesolutions.tech</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Services</h4>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li>AI App Development</li>
                <li>Business Automation</li>
                <li>AI Integrations</li>
                <li>Mentorship</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Contact</h4>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li>Email Us</li>
                <li>Schedule Call</li>
                <li>Get Quote</li>
                <li>Case Studies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Legal</h4>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between text-xs text-slate-500">
            <p>Copyright © 2025 Nocode Solutions</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-300">Services</a>
              <a href="#" className="hover:text-slate-300">Why Us</a>
              <a href="#" className="hover:text-slate-300">Testimonials</a>
              <a href="#" className="hover:text-slate-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
