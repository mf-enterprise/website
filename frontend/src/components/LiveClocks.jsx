import React, { useEffect, useState } from 'react';

const ZONES = [
  { label: 'Riga', zone: 'Europe/Riga' },
  { label: 'London', zone: 'Europe/London' },
  { label: 'New York', zone: 'America/New_York' },
  { label: 'Crypto', zone: 'UTC' }
];

function fmt(zone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date());
}

export default function LiveClocks() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-b border-[#141414] bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#141414]">
        {ZONES.map((z) => (
          <div key={z.label} className="bg-[#0a0a0a] px-5 py-5">
            <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67]">
              {z.label}
            </div>
            <div className="mt-2 font-display text-3xl md:text-4xl text-[#f5f5f4] tabular-nums">
              {fmt(z.zone, tick)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
