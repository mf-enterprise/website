import React from 'react';
import { BRAND } from '../mock';
import Logo from './Logo';

export default function IntroLoader() {
  return (
    <div className="intro-loader fixed inset-0 z-[80] grid place-items-center bg-[#0a0a0a] pointer-events-none">
      <div className="flex flex-col items-center gap-5">
        <Logo height={88} rounded="10px" />
        <div className="font-mono-mf text-[10px] tracking-[0.42em] uppercase text-[#8a8a87]">
          {BRAND.org} / EST. {BRAND.established}
        </div>
      </div>
    </div>
  );
}
