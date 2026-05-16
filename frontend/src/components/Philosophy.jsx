import React, { useEffect, useState } from 'react';
import { QUOTES } from '../mock';

export default function Philosophy() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-28 md:py-40 border-b border-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#1a1a1a] blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#161616] blur-3xl opacity-50" />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 text-center reveal">
        <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-8">
          — Philosophy / Rotating
        </div>
        <div className="min-h-[140px] md:min-h-[200px] flex items-center justify-center">
          <p
            key={i}
            className="font-display text-[clamp(30px,5.6vw,84px)] leading-[1] text-[#f5f5f4] max-w-5xl"
            style={{ animation: 'fadeIn 700ms ease both' }}
          >
            “{QUOTES[i]}”
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 transition-all ${
                idx === i ? 'w-8 bg-[#f5f5f4]' : 'w-3 bg-[#3a3a37] hover:bg-[#5a5a57]'
              }`}
              aria-label={`Quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }`}</style>
    </section>
  );
}
