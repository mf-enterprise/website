import React from 'react';
import { MANIFESTO } from '../mock';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-36 border-b border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="font-mono-mf text-[10px] tracking-[0.34em] uppercase text-[#8a8a87] mb-8 reveal">
          {MANIFESTO.eyebrow}
        </div>
        <blockquote className="font-display text-[clamp(36px,6.4vw,96px)] leading-[0.98] text-[#f5f5f4] reveal">
          {MANIFESTO.body}
        </blockquote>
        <div className="mt-10 font-mono-mf text-xs tracking-[0.32em] uppercase text-[#8a8a87] reveal">
          {MANIFESTO.signature}
        </div>
      </div>
    </section>
  );
}
