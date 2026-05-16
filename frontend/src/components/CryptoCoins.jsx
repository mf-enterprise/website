import React from 'react';

const BtcIcon = (p) => (
  <svg viewBox="0 0 32 32" {...p}>
    <path
      fill="currentColor"
      d="M22.7 14.5c.3-2-1.3-3.1-3.5-3.8l.7-2.8-1.7-.4-.7 2.8-1.4-.3.7-2.8-1.7-.4-.7 2.8c-.4-.1-.7-.2-1.1-.3l-2.4-.6-.4 1.8s1.3.3 1.3.3c.7.2.8.6.8 1l-.8 3.2c.1 0 .2.1.3.1l-.3-.1-1.1 4.5c-.1.2-.3.5-.7.4 0 0-1.3-.3-1.3-.3l-.9 1.9 2.3.6c.4.1.8.2 1.2.3l-.7 2.9 1.7.4.7-2.8 1.4.3-.7 2.8 1.7.4.7-2.9c2.9.6 5.1.4 6.1-2.3.8-2.1-.1-3.3-1.6-4.1 1.1-.3 1.9-1 2.1-2.5zm-3.7 5.4c-.5 2.1-4.1 1-5.3.7l.9-3.7c1.2.3 5.1.9 4.4 3zm.6-5.4c-.5 2-3.5 1-4.5.7l.8-3.4c1 .3 4.2.8 3.7 2.7z"
    />
  </svg>
);

const EthIcon = (p) => (
  <svg viewBox="0 0 32 32" {...p}>
    <path fill="currentColor" opacity="0.65" d="M16 4 8 17l8-3.5L24 17 16 4Z" />
    <path fill="currentColor" d="M16 13.5 8 17l8 4.5L24 17l-8-3.5Z" />
    <path fill="currentColor" opacity="0.85" d="M16 22.5 8 18.5 16 30l8-11.5-8 4Z" />
  </svg>
);

const UsdtIcon = (p) => (
  <svg viewBox="0 0 32 32" {...p}>
    <path
      fill="currentColor"
      d="M17.4 14.7v-2.2H22V9.6H10v2.9h4.6v2.2c-3.8.2-6.7 1-6.7 1.9 0 .9 2.9 1.7 6.7 1.9v6.9h2.8v-6.9c3.8-.2 6.7-1 6.7-1.9 0-.9-2.9-1.7-6.7-1.9Zm0 3.3v-.1c-.1 0-.7.1-2.2.1-1.2 0-2-.1-2.4-.1v.1c-3.2-.1-5.6-.7-5.6-1.4 0-.7 2.4-1.3 5.6-1.4v2.3c.4 0 1.2.1 2.4.1 1.4 0 2.1-.1 2.2-.1V15.2c3.2.1 5.6.7 5.6 1.4 0 .7-2.4 1.3-5.6 1.4Z"
    />
  </svg>
);

const SolIcon = (p) => (
  <svg viewBox="0 0 32 32" {...p}>
    <path
      fill="currentColor"
      d="M6.5 22.2c.2-.2.5-.4.9-.4h19.9c.6 0 1 .7.6 1.2L23.8 27c-.2.2-.5.4-.9.4H3c-.6 0-1-.7-.6-1.2l4.1-4Zm0-15.4C6.7 6.6 7 6.4 7.4 6.4h19.9c.6 0 1 .7.6 1.2l-4.1 4c-.2.2-.5.4-.9.4H3c-.6 0-1-.7-.6-1.2l4.1-4Zm17.3 7.6c-.2-.2-.5-.4-.9-.4H3c-.6 0-1 .7-.6 1.2l4.1 4.1c.2.2.5.4.9.4h19.9c.6 0 1-.7.6-1.2l-4.1-4.1Z"
    />
  </svg>
);

const COINS = [
  { symbol: 'BTC', accent: '#F7931A', glow: 'rgba(247,147,26,0.45)', Icon: BtcIcon, label: 'Bitcoin' },
  { symbol: 'ETH', accent: '#6F84E0', glow: 'rgba(111,132,224,0.45)', Icon: EthIcon, label: 'Ethereum' },
  { symbol: 'USDT', accent: '#26A17B', glow: 'rgba(38,161,123,0.45)', Icon: UsdtIcon, label: 'Tether' },
  { symbol: 'SOL', accent: '#9C66FF', glow: 'rgba(156,102,255,0.45)', Icon: SolIcon, label: 'Solana' }
];

export default function CryptoCoins({ size = 132 }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 perspective-1200">
      {COINS.map((c, i) => {
        const Icon = c.Icon;
        return (
          <div key={c.symbol} className="flex flex-col items-center gap-5 group">
            <div
              className="coin3d"
              style={{
                width: size,
                height: size,
                animationDelay: `${i * 0.55}s`,
                '--coin-color': c.accent,
                '--coin-glow': c.glow
              }}
            >
              <div className="coin-face coin-front">
                <Icon className="coin-icon" />
                <div className="coin-shine" />
              </div>
              <div className="coin-face coin-back">
                <span className="coin-mf">MF</span>
                <div className="coin-shine" />
              </div>
              {Array.from({ length: 14 }).map((_, k) => (
                <div
                  key={k}
                  className="coin-edge-slice"
                  style={{ transform: `translateZ(${(k - 6.5) * 0.9}px)` }}
                />
              ))}
            </div>
            <div className="font-mono-mf text-[10px] tracking-[0.28em] uppercase text-[#8a8a87] group-hover:text-[#f5f5f4] transition-colors">
              {c.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

