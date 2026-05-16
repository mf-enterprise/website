import { useEffect } from 'react';

const WHEEL_LINE_HEIGHT = 16;
const EASE = 0.16;

function maxScrollY() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function clampScroll(value) {
  return Math.max(0, Math.min(value, maxScrollY()));
}

function wheelPixels(event) {
  if (event.deltaMode === 1) return event.deltaY * WHEEL_LINE_HEIGHT;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

function nestedScrollableCanMove(target, deltaY) {
  let el = target instanceof Element ? target : null;

  while (el && el !== document.body && el !== document.documentElement) {
    const style = window.getComputedStyle(el);
    const canScroll =
      /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight;

    if (canScroll) {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
    }

    el = el.parentElement;
  }

  return false;
}

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let current = window.scrollY;
    let target = current;
    let raf = 0;
    let animating = false;

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      animating = false;
      current = window.scrollY;
      target = current;
    };

    const step = () => {
      target = clampScroll(target);
      current += (target - current) * EASE;

      if (Math.abs(target - current) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        raf = 0;
        animating = false;
        return;
      }

      window.scrollTo(0, current);
      raf = requestAnimationFrame(step);
    };

    const onWheel = (event) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey) return;
      if (event.target?.closest?.('input, textarea, select, [contenteditable="true"]')) return;

      const delta = wheelPixels(event);
      if (!delta || nestedScrollableCanMove(event.target, delta)) return;

      event.preventDefault();
      if (!animating) {
        current = window.scrollY;
        target = current;
        animating = true;
      }
      target = clampScroll(target + delta);
      if (!raf) raf = requestAnimationFrame(step);
    };

    const onNativeScroll = () => {
      if (animating) return;
      current = window.scrollY;
      target = current;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onNativeScroll, { passive: true });
    window.addEventListener('resize', stop);
    window.addEventListener('hashchange', stop);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onNativeScroll);
      window.removeEventListener('resize', stop);
      window.removeEventListener('hashchange', stop);
      stop();
    };
  }, []);

  return null;
}
