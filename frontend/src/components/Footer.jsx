import React from 'react';
import { BRAND } from '../mock';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-[#141414] py-12 md:py-16 relative z-[2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 flex items-start gap-4">
            <Logo height={72} rounded="8px" />
            <div>
              <div className="font-display text-2xl text-[#f5f5f4] tracking-[0.12em]">MF ENTERPRISE</div>
              <div className="font-mono-mf text-[10px] tracking-[0.3em] text-[#8a8a87] mt-1">
                EST. {BRAND.established} · BORN IN MIND · RIGA / UK
              </div>
              <p className="text-[#8a8a87] text-sm mt-4 max-w-sm leading-relaxed">
                A one-person enterprise of compounding bets. Built obsessed.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67] mb-4">Reach</div>
            <ul className="space-y-2 text-[#cfcfcc] text-sm">
              <li><a className="ink-link" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              <li><a className="ink-link" href={`tel:${BRAND.phone.replace(/\s/g,'')}`}>{BRAND.phone}</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67] mb-4">Index</div>
            <ul className="space-y-2 text-[#cfcfcc] text-sm">
              <li><a className="ink-link" href="#manifesto">Manifesto</a></li>
              <li><a className="ink-link" href="#ventures">Ventures</a></li>
              <li><a className="ink-link" href="#timeline">Timeline</a></li>
              <li><a className="ink-link" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67] mb-4">Status</div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono-mf text-xs tracking-[0.22em] uppercase">
              <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full dot-pulse" />
              Available
            </div>
            <div className="font-mono-mf text-[10px] tracking-[0.22em] uppercase text-[#6a6a67] mt-3">
              Latency: zero<br/>Bandwidth: high
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#141414] flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67]">
            © {new Date().getFullYear()} Maikl Fedulov · All rights reserved
          </div>
          <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#6a6a67]">
            Designed in the dark. Compounded in the light.
          </div>
        </div>
      </div>
    </footer>
  );
}
