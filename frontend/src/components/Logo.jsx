import React from 'react';

const SRC = `${process.env.PUBLIC_URL || ''}/assets/mf-enterprise-logo.png`;

export default function Logo({ height = 44, className = '', rounded = '8px', ring = true }) {
  const size = Math.round(height);

  return (
    <div
      className={`overflow-hidden inline-block bg-[#0a0a0a] ${ring ? 'ring-1 ring-[#252525]' : ''} ${className}`}
      style={{ width: size, height: size, borderRadius: rounded }}
      aria-label="MF Enterprise logo"
    >
      <img
        src={SRC}
        alt="MF Enterprise"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  );
}
