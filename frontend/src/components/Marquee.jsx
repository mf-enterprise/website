import React from 'react';

const ITEMS = [
  'POLYMARKET ALPHA ENGINE',
  'AUTONOMOUS QUANT',
  '$40 → $1,062 IN A DAY',
  'GLOBAL INVESTOR',
  'PYTHON LAB',
  'RIGA HERITAGE',
  'EST. 2009 / IN MIND',
  'STUDYING IN THE UK',
  'COMPOUNDING DAILY'
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track py-5">
        {loop.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-2xl md:text-3xl tracking-[0.06em] text-[#f5f5f4]"
          >
            <span className="text-[#5a5a57] text-lg">◆</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
