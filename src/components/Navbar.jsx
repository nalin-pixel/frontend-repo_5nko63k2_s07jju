import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Get Quote', href: '#quote' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-sky-500 to-emerald-400"></span>
              <span className="text-white font-semibold">Nocode Solutions</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {items.map((it) => (
                <a key={it.label} href={it.href} className="text-slate-200 hover:text-white text-sm">{it.label}</a>
              ))}
              <a href="#call" className="ml-2 inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Schedule Call</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {items.map((it) => (
                <a key={it.label} href={it.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white text-sm">{it.label}</a>
              ))}
              <a href="#call" onClick={() => setOpen(false)} className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Schedule Call</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
