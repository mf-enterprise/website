import React, { useEffect, useRef, useState } from 'react';
import CryptoCoins from './CryptoCoins';
import { TRADING } from '../mock';
import { ArrowUpRight } from 'lucide-react';

function AnimatedNumber({ value }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || fired.current) return;
      fired.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / 1800);
        setN(Math.floor(value * (1 - Math.pow(1 - p, 4))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

export default function TradingDeck() {
  return (
    <section className="py-24 md:py-36 border-b border-[#141414] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-3">
              — Trading Deck / {TRADING.venue}
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f5f4] leading-[0.95]">
              Market hours<br />are all hours.
            </h2>
            <p className="mt-6 text-[#cfcfcc] text-base md:text-lg leading-relaxed max-w-md">
              {TRADING.note}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a] max-w-xl">
              <div className="bg-[#0d0d0d] p-6">
                <div className="font-mono-mf text-[10px] tracking-[0.28em] uppercase text-[#6a6a67]">Trades</div>
                <div className="mt-4 font-display text-5xl text-[#f5f5f4]">
                  <AnimatedNumber value={TRADING.tradesCount} />
                </div>
              </div>
              <div className="bg-[#0d0d0d] p-6">
                <div className="font-mono-mf text-[10px] tracking-[0.28em] uppercase text-[#6a6a67]">Volume USDT</div>
                <div className="mt-4 font-display text-5xl text-[#f5f5f4]">
                  $<AnimatedNumber value={TRADING.volumeUsdt} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 reveal">
            <div className="mb-8 flex items-center justify-between">
              <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87]">
                Primary rails
              </div>
              <ArrowUpRight size={18} className="text-[#f5f5f4]" />
            </div>
            <CryptoCoins />
          </div>
        </div>
      </div>
    </section>
  );
}
