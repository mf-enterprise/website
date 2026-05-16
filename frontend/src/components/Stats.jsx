import React from 'react';
import { STATS } from '../mock';

export default function Stats() {
  return (
    <section className="py-20 md:py-28 border-b border-[#141414]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-16 reveal">
          <div>
            <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-3">
              — The Numbers
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#f5f5f4] leading-none">
              By the digits.
            </h2>
          </div>
          <div className="hidden md:block font-mono-mf text-xs tracking-[0.3em] uppercase text-[#8a8a87]">
            Updated July 2026
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-6 md:p-10 group hover:bg-[#0f0f0f] transition-colors reveal"
            >
              <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67] mb-6">
                / {String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-display text-[64px] md:text-[112px] leading-none text-[#f5f5f4] flex items-baseline">
                {s.value}
                <span className="text-[#8a8a87] text-3xl md:text-5xl ml-1">{s.suffix}</span>
              </div>
              <div className="mt-4 md:mt-6 font-mono-mf text-[11px] tracking-[0.22em] uppercase text-[#a6a6a3]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
