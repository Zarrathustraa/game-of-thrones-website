export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-[var(--gold)]/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-[#0a0a0a]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚔️</span>
              <span className="text-[var(--gold)] font-bold text-xl tracking-[0.2em] uppercase">Westeros</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A tribute to George R.R. Martin\'s epic saga of power, betrayal, and the struggle for the Iron Throne. This is a fan-made website.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--gold)] font-bold tracking-[0.15em] uppercase text-sm mb-4">Explore</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Houses", "Characters", "Timeline", "Map", "Quotes"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Lore */}
          <div>
            <h3 className="text-[var(--gold)] font-bold tracking-[0.15em] uppercase text-sm mb-4">The Realm</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📖 Based on &ldquo;A Song of Ice and Fire&rdquo; by George R.R. Martin</p>
              <p>📺 HBO Television Series (2011-2019)</p>
              <p>🐉 &ldquo;House of the Dragon&rdquo; Prequel Series</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            Fan project. All rights belong to George R.R. Martin and HBO.
          </p>
          <p className="text-gray-700 text-xs italic">
            &ldquo;What is dead may never die, but rises again harder and stronger.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
