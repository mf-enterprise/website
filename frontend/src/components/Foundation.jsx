import React, { useEffect, useRef, useState } from 'react';
import { FOUNDATION } from '../mock';
import { ArrowUpRight, Lock, Cpu, Coins, GraduationCap, ArrowRight, Bot, Banknote, Repeat } from 'lucide-react';
import TiltCard from './TiltCard';

const ICONS = { Cpu, Coins, GraduationCap, Lock };

function VaultCounter({ end = 70000, duration = 2400 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 4);
              setVal(Math.floor(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      ${val.toLocaleString()}
      <span className="vault-amount-plus">+</span>
    </span>
  );
}

function Sparks({ count = 18 }) {
  const sparks = Array.from({ length: count }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / count + (i % 3) * 0.4;
    const r = 220 + (i % 5) * 60;
    return {
      key: i,
      style: {
        left: `${50 + Math.cos(angle) * 4}%`,
        top: `${50 + Math.sin(angle) * 4}%`,
        '--dx': `${Math.cos(angle) * r}px`,
        '--dy': `${Math.sin(angle) * r}px`,
        animationDelay: `${(i * 0.18) % 5}s`,
        animationDuration: `${5 + (i % 4) * 0.7}s`
      }
    };
  });
  return (
    <>
      {sparks.map((s) => (
        <span key={s.key} className="spark" style={s.style} />
      ))}
    </>
  );
}

function LoopNode({ icon: Icon, label, sub }) {
  return (
    <div className="loop-node">
      <div className="flex items-center justify-center gap-2 mb-1 text-amber-400/90">
        <Icon size={14} />
        <span className="font-mono-mf text-[10px] tracking-[0.28em] uppercase">{label}</span>
      </div>
      <strong>{sub}</strong>
    </div>
  );
}

function LoopArrow() {
  return (
    <div className="loop-arrow hidden md:block">
      <span className="loop-pulse" />
    </div>
  );
}

export default function Foundation() {
  return (
    <section id="foundation" className="relative py-28 md:py-44 border-b border-[#141414] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-amber-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[#1a1a1a] blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-8 reveal">
          <span className="h-1.5 w-1.5 bg-amber-400 rounded-full dot-pulse" />
          <span className="font-mono-mf text-[10px] md:text-xs tracking-[0.32em] uppercase text-amber-400/90">
            {FOUNDATION.eyebrow}
          </span>
        </div>

        <div className="reveal">
          <h2 className="font-display text-[clamp(48px,9vw,144px)] leading-[0.86] tracking-tight text-[#f5f5f4]">
            {FOUNDATION.title.first}{' '}
            <span className="outline-text">{FOUNDATION.title.outline}</span>
            <br />
            {FOUNDATION.title.last}
          </h2>
        </div>

        {/* MEGA VAULT REVEAL */}
        <div className="vault-stage mt-16 md:mt-24 reveal">
          <div className="vault-grid" />
          <Sparks count={22} />
          <div className="relative text-center px-4">
            <div className="font-mono-mf text-[10px] md:text-xs tracking-[0.4em] uppercase text-amber-400/80 mb-4">
              · Seed Liquidity · Day One ·
            </div>
            <div className="vault-amount">
              <VaultCounter end={70000} />
            </div>
            <div className="mt-6 font-mono-mf text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#a6a6a3]">
              Routed back to the token. Every winning session. Forever.
            </div>
            <div className="mt-8 inline-flex items-center gap-6 flex-wrap justify-center">
              <Stat k="Launch venue" v="Decentralized exchanges" />
              <span className="hidden md:block h-6 w-px bg-[#262626]" />
              <Stat k="Core engine" v="MIT Professor · S&P 500 algo" />
              <span className="hidden md:block h-6 w-px bg-[#262626]" />
              <Stat k="Status" v="Pre-launch · Q4 2026" />
            </div>
          </div>
        </div>

        {/* REINVESTMENT LOOP */}
        <div className="mt-20 md:mt-28 reveal">
          <div className="text-center mb-10">
            <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-amber-400/80 mb-3">
              — The Loop / Programmatic
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-[#f5f5f4]">
              How the machine prints.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
            <LoopNode icon={Bot} label="01 · Core" sub="SP500 Algo Bot" />
            <LoopArrow />
            <LoopNode icon={Banknote} label="02 · Profit" sub="Realized P&L" />
            <LoopArrow />
            <LoopNode icon={Coins} label="03 · Buy" sub="MF Token · DEX" />
            <LoopArrow />
            <LoopNode icon={Repeat} label="04 · Compound" sub="Liquidity ↑ · Forever" />
          </div>
        </div>

        {/* SUMMARY + PILLARS */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 reveal">
            <p className="text-[#cfcfcc] text-lg md:text-xl leading-relaxed">
              {FOUNDATION.summary}
            </p>
            <p className="mt-5 text-[#8a8a87] text-base leading-relaxed">
              {FOUNDATION.detail}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 bg-amber-400 text-[#0a0a0a] hover:bg-amber-300 px-6 py-4 font-mono-mf text-[11px] tracking-[0.28em] uppercase transition-colors"
              >
                Request Waitlist
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="inline-flex items-center gap-2 border border-amber-400/30 px-4 py-2 font-mono-mf text-[10px] tracking-[0.28em] uppercase text-amber-400/90">
                <Lock size={12} /> Pre-launch · confidential
              </div>
            </div>
          </div>

          <aside className="md:col-span-5 grid sm:grid-cols-2 gap-4 reveal">
            {FOUNDATION.pillars.map((p) => {
              const Icon = ICONS[p.icon] || Cpu;
              return (
                <TiltCard
                  key={p.label}
                  max={9}
                  className="group bg-[#0d0d0d] border border-[#1a1a1a] hover:border-amber-400/40 p-5 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 grid place-items-center border border-[#262626] group-hover:border-amber-400/40 transition-colors">
                      <Icon size={16} className="text-[#cfcfcc] group-hover:text-amber-400 transition-colors" />
                    </div>
                    <div>
                      <div className="font-mono-mf text-[10px] tracking-[0.28em] uppercase text-[#8a8a87]">
                        {p.label}
                      </div>
                      <div className="text-[#f5f5f4] text-sm mt-0.5">{p.value}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-[#8a8a87] text-xs leading-relaxed">{p.note}</div>
                </TiltCard>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="text-center">
      <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67] mb-1">{k}</div>
      <div className="text-[#f5f5f4] text-sm">{v}</div>
    </div>
  );
}
