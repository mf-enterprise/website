import React from 'react';
import { TIMELINE } from '../mock';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-36 border-b border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-3">
              — Timeline
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f5f4] leading-none">
              Compounding path.
            </h2>
          </div>
          <div className="font-mono-mf text-xs tracking-[0.26em] uppercase text-[#6a6a67]">
            2009 → Next
          </div>
        </div>

        <div className="border-l border-[#242424]">
          {TIMELINE.map((item, i) => (
            <div key={`${item.year}-${i}`} className="relative pl-7 md:pl-10 pb-10 reveal">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-[#f5f5f4] rounded-full" />
              <div className="font-display text-4xl md:text-5xl text-[#f5f5f4] leading-none">
                {item.year}
              </div>
              <p className="mt-3 text-[#cfcfcc] text-base md:text-lg leading-relaxed max-w-3xl">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
