import { useState } from 'react'

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', email: '', need: '', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', need: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="quote" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Get a quote</h2>
            <p className="mt-3 text-slate-400">Tell us what you need. We reply within 24 hours.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-slate-400 text-sm">
              <li>MVPs in weeks</li>
              <li>AI-first approach</li>
              <li>Clear pricing</li>
              <li>Dedicated team</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 p-6 bg-white/0 hover:bg-white/[0.03] transition-colors">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Name *</label>
                <input required name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Email *</label>
                <input required name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs text-slate-400 mb-1">What do you need? *</label>
              <input required name="need" value={form.need} onChange={handleChange} className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="AI app, automations, integrations..." />
            </div>
            <div className="mt-4">
              <label className="block text-xs text-slate-400 mb-1">Message *</label>
              <textarea required name="message" rows={4} value={form.message} onChange={handleChange} className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Tell us more about your project" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center rounded-xl bg-white/90 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-white">
              Send request
            </button>
            {status === 'loading' && <p className="mt-3 text-slate-300">Submitting...</p>}
            {status === 'success' && <p className="mt-3 text-emerald-400">Thanks! We’ll get back within 24 hours.</p>}
            {status === 'error' && <p className="mt-3 text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
