import React, { useEffect, useState } from 'react';
import { BRAND } from '../mock';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => goTo('top')}
          className="flex items-center gap-3 group"
          aria-label="MF Enterprise home"
        >
          <Logo height={44} />
          <div className="hidden sm:flex flex-col leading-tight text-left">
            <span className="font-display text-[15px] tracking-[0.18em] text-[#f5f5f4]">
              MF ENTERPRISE
            </span>
            <span className="font-mono-mf text-[10px] tracking-[0.3em] text-[#8a8a87]">
              EST. {BRAND.established}
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="font-mono-mf text-[11px] tracking-[0.28em] uppercase text-[#a6a6a3] hover:text-white ink-link"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <a
          href={`mailto:${BRAND.email}`}
          className="hidden md:inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-white px-4 py-2 text-[11px] tracking-[0.28em] uppercase font-mono-mf text-[#f5f5f4] transition-colors"
        >
          <span className="h-1.5 w-1.5 bg-emerald-400 dot-pulse rounded-full" />
          Available
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                className="text-left font-mono-mf text-xs tracking-[0.28em] uppercase text-[#cfcfcc]"
              >
                {n.label}
              </button>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="font-mono-mf text-xs tracking-[0.28em] uppercase text-emerald-400"
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
