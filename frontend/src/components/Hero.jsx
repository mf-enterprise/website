import React, { useEffect, useRef } from 'react';
import { BRAND } from '../mock';
import Logo from './Logo';
import ScrambleText from './ScrambleText';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const scaleRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const y = Math.min(window.scrollY, 600);
        const el = scaleRef.current;
        if (!el) return;
        el.style.transform = `translate3d(0, ${Math.round(y * 0.055)}px, 0)`;
        el.style.opacity = String(Math.max(0.72, 1 - y / 1400));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-[#141414]">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-[2] max-w-[1500px] mx-auto min-h-screen px-6 md:px-10 pt-28 md:pt-36 pb-10 flex flex-col">
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-center gap-4">
            <Logo height={72} rounded="8px" />
            <div>
              <div className="font-mono-mf text-[10px] md:text-xs tracking-[0.34em] uppercase text-[#8a8a87]">
                {BRAND.org}
              </div>
              <div className="mt-1 text-[#cfcfcc] text-sm md:text-base">{BRAND.status}</div>
            </div>
          </div>
          <div className="hidden md:block max-w-xs text-right font-mono-mf text-[10px] tracking-[0.26em] uppercase text-[#8a8a87]">
            {BRAND.locations.join(' / ')}
          </div>
        </div>

        <div ref={scaleRef} className="hero-copy mt-auto">
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono-mf text-[10px] md:text-xs tracking-[0.34em] uppercase text-[#8a8a87]">
            <span>{BRAND.establishedNote}</span>
            <span className="h-px w-12 bg-[#3a3a37]" />
            <ScrambleText text={BRAND.tagline} />
          </div>
          <h1 className="hero-name font-display text-[#f5f5f4]" aria-label="Maikl Fedulov">
            <span>MAIKL</span>
            <span>FEDULOV</span>
          </h1>
          <div className="mt-8 grid md:grid-cols-12 gap-8 md:items-end">
            <p className="md:col-span-5 text-[#cfcfcc] text-lg md:text-xl leading-relaxed max-w-xl">
              {BRAND.bio}
            </p>
            <div className="md:col-span-7 flex flex-col md:flex-row md:items-center md:justify-end gap-4">
              <a
                href="#ventures"
                className="inline-flex items-center justify-between gap-6 border border-[#2a2a2a] hover:border-white px-5 py-4 font-mono-mf text-[11px] tracking-[0.26em] uppercase text-[#f5f5f4] transition-colors"
              >
                Explore Ventures
                <ArrowDownRight size={16} />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center justify-between gap-6 bg-[#f5f5f4] text-[#0a0a0a] hover:bg-white px-5 py-4 font-mono-mf text-[11px] tracking-[0.26em] uppercase transition-colors"
              >
                Contact
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
