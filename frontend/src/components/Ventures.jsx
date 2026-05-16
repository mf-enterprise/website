import React, { useState } from 'react';
import { VENTURES } from '../mock';
import { ArrowUpRight } from 'lucide-react';

export default function Ventures() {
  const [active, setActive] = useState(VENTURES[0].id);
  const selected = VENTURES.find((v) => v.id === active) || VENTURES[0];

  return (
    <section id="ventures" className="py-24 md:py-36 border-b border-[#141414]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 reveal">
            <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-3">
              — Ventures / Active
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f5f4] leading-[0.95]">
              The portfolio<br />is the proof.
            </h2>
            <p className="mt-6 text-[#cfcfcc] leading-relaxed max-w-md">
              Systems, markets, software, capital, and patient real assets. Each line is built to compound.
            </p>

            <div className="mt-10 border border-[#1a1a1a] bg-[#0d0d0d] p-6">
              <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67]">
                Selected
              </div>
              <h3 className="mt-4 font-display text-4xl text-[#f5f5f4] leading-none">
                {selected.name}
              </h3>
              <p className="mt-4 text-[#a6a6a3] leading-relaxed">{selected.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span key={t} className="border border-[#262626] px-2.5 py-1 font-mono-mf text-[10px] tracking-[0.2em] uppercase text-[#8a8a87]">
                    {t}
                  </span>
                ))}
              </div>
              {selected.link && (
                <a
                  href={selected.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono-mf text-xs tracking-[0.24em] uppercase text-[#f5f5f4] ink-link"
                >
                  {selected.link.label}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-7 border-t border-[#1a1a1a] reveal">
            {VENTURES.map((v) => (
              <button
                key={v.id}
                onMouseEnter={() => setActive(v.id)}
                onFocus={() => setActive(v.id)}
                onClick={() => setActive(v.id)}
                className="venture-row w-full border-b border-[#1a1a1a] py-6 md:py-8 text-left group"
              >
                <div className="grid md:grid-cols-[80px_1fr_120px_32px] gap-4 md:items-center">
                  <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#6a6a67]">
                    {v.index}
                  </div>
                  <div>
                    <div className="font-display text-3xl md:text-5xl text-[#f5f5f4] leading-none">
                      {v.name}
                    </div>
                    <div className="mt-2 font-mono-mf text-[10px] tracking-[0.24em] uppercase text-[#8a8a87]">
                      {v.category}
                    </div>
                  </div>
                  <div className="font-mono-mf text-[10px] tracking-[0.24em] uppercase text-emerald-400">
                    {v.status}<br />
                    <span className="text-[#6a6a67]">{v.year}</span>
                  </div>
                  <ArrowUpRight className="venture-arrow text-[#f5f5f4]" size={20} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
