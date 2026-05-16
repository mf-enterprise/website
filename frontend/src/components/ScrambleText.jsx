import React, { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&';

export default function ScrambleText({ text, className = '', delay = 0 }) {
  const [value, setValue] = useState(text);
  const frame = useRef(0);

  useEffect(() => {
    let raf = 0;
    let start = 0;
    const run = (now) => {
      if (!start) start = now + delay;
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(1, elapsed / 900);
      const revealed = Math.floor(progress * text.length);
      setValue(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' ';
            if (i < revealed) return ch;
            return CHARS[(i + frame.current) % CHARS.length];
          })
          .join('')
      );
      frame.current += 1;
      if (progress < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [text, delay]);

  return (
    <span className={className} aria-label={text}>
      {value}
    </span>
  );
}
