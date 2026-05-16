import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import LiveClocks from '../components/LiveClocks';
import Manifesto from '../components/Manifesto';
import Stats from '../components/Stats';
import TradingDeck from '../components/TradingDeck';
import Ventures from '../components/Ventures';
import Foundation from '../components/Foundation';
import AILab from '../components/AILab';
import Timeline from '../components/Timeline';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import CustomCursor from '../components/CustomCursor';
import IntroLoader from '../components/IntroLoader';

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .fade-up');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grain relative">
      <IntroLoader />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="relative z-[2]">
        <Hero />
        <Marquee />
        <LiveClocks />
        <Manifesto />
        <Stats />
        <TradingDeck />
        <Ventures />
        <Foundation />
        <AILab />
        <Timeline />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
