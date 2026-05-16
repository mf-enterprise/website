import React from 'react';
import { Lock, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

export default function AILab() {
  return (
    <section className="py-24 md:py-32 border-b border-[#141414]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 reveal">
            <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-3">
              — AI Lab / 0?
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f5f4] leading-[0.95]">
              Something’s <span className="outline-text">cooking.</span>
            </h2>
            <p className="mt-6 text-[#cfcfcc] text-base md:text-lg leading-relaxed max-w-md">
              A few research threads on artificial intelligence. Some product ideas that, frankly, I’m too obsessed about to talk about. Yet.
            </p>
          </div>

          <div className="md:col-span-7 reveal">
            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
              {[1, 2, 3, 4].map((n) => (
                <TiltCard
                  key={n}
                  max={10}
                  className="bg-[#0d0d0d] aspect-[4/3] flex flex-col items-center justify-center gap-3 group hover:bg-[#101010] transition-colors"
                >
                  <div className="h-10 w-10 grid place-items-center border border-[#262626] rounded-full">
                    {n === 1 ? (
                      <Sparkles size={16} className="text-[#cfcfcc]" />
                    ) : (
                      <Lock size={14} className="text-[#5a5a57] group-hover:text-[#cfcfcc] transition-colors" />
                    )}
                  </div>
                  <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#8a8a87]">
                    Project / 0{n}
                  </div>
                  <div className="font-display text-2xl text-[#f5f5f4]">
                    {n === 1 ? 'Coming Soon' : 'Classified'}
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
