"use client";
import { useEffect, useState } from "react";

const phrases = [
  "Winter Is Coming",
  "Fire and Blood",
  "Ours Is the Fury",
  "Hear Me Roar",
  "Growing Strong",
  "We Do Not Sow",
  "Unbowed, Unbent, Unbroken",
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d0d] to-black" />
      <div className="absolute inset-0 bg-pattern opacity-30" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-[150px]" />

      {/* Sword divider SVG */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-10">
        <svg width="200" height="600" viewBox="0 0 200 600" fill="none">
          <line x1="100" y1="0" x2="100" y2="600" stroke="#c8a951" strokeWidth="1"/>
          <circle cx="100" cy="300" r="8" stroke="#c8a951" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Crown icon */}
        <div className="text-6xl mb-8 animate-flicker">👑</div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-[0.15em] uppercase mb-6">
          <span className="bg-gradient-to-r from-[var(--gold)] via-yellow-200 to-[var(--gold)] bg-clip-text text-transparent text-shadow-gold">
            Game of Thrones
          </span>
        </h1>

        <div className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mb-8" />

        <p className="text-lg md:text-2xl text-gray-400 tracking-[0.3em] uppercase mb-12">
          The Seven Kingdoms of Westeros
        </p>

        {/* Rotating phrases */}
        <div className="h-16 flex items-center justify-center">
          <p className={`text-xl md:text-3xl italic text-[var(--gold)]/80 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            &ldquo;{phrases[currentPhrase]}&rdquo;
          </p>
        </div>

        <a
          href="#houses"
          className="inline-block mt-12 px-10 py-4 border border-[var(--gold)]/50 text-[var(--gold)] tracking-[0.2em] uppercase text-sm hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all duration-500 animate-pulse-glow"
        >
          Explore the Realm
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
