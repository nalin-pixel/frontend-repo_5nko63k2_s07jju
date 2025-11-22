import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
  { label: 'Get Quote', href: '#quote' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-slate-950/40 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-white/80 via-sky-300 to-emerald-300"></span>
              <span className="text-white/90 font-medium tracking-wide">Nocode Solutions</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="text-slate-300/90 hover:text-white transition-colors text-sm">
                  {it.label}
                </a>
              ))}
              <a
                href="#call"
                className="ml-2 inline-flex items-center rounded-xl bg-white/90 text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white">
                Schedule Call
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/5 px-4 py-3 space-y-2">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block text-slate-300/90 hover:text-white text-sm">
                  {it.label}
                </a>
              ))}
              <a
                href="#call"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-xl bg-white/90 text-slate-900 px-4 py-2 text-sm font-medium">
                Schedule Call
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
