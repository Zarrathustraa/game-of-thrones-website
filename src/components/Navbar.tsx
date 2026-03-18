"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Houses", href: "#houses" },
  { label: "Characters", href: "#characters" },
  { label: "Timeline", href: "#timeline" },
  { label: "Map", href: "#map" },
  { label: "Quotes", href: "#quotes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-3xl">⚔️</span>
          <span className="text-[var(--gold)] font-bold text-xl tracking-[0.2em] uppercase group-hover:text-shadow-gold transition-all">
            Westeros
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 text-sm tracking-[0.15em] uppercase relative after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold)] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--gold)] text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[var(--gold)]/20 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-[var(--gold)] hover:bg-white/5 transition-all text-sm tracking-[0.15em] uppercase border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
