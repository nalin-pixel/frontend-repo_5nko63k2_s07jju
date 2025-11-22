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
    <section id="quote" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get Your Free Quote</h2>
            <p className="mt-3 text-slate-300/80">We’ll respond within 24 hours with a detailed proposal</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-slate-200/80 text-sm">
              <li>Most projects completed in 2-6 weeks</li>
              <li>Free initial consultation</li>
              <li>AI-powered solutions</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name *</label>
                <input required name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email *</label>
                <input required name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">What do you need? *</label>
              <input required name="need" value={form.need} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="AI app, automations, integrations..." />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Message *</label>
              <textarea required name="message" rows={4} value={form.message} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Tell us more about your project" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100">Get Free Quote</button>
            {status === 'loading' && <p className="mt-3 text-slate-300">Submitting...</p>}
            {status === 'success' && <p className="mt-3 text-emerald-400">Thanks! We’ll get back within 24 hours.</p>}
            {status === 'error' && <p className="mt-3 text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
