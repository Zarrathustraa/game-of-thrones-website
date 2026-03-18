export default function MapSection() {
  const locations = [
    { name: "Winterfell", x: 42, y: 22, house: "Stark", emoji: "🐺", desc: "Ancestral seat of House Stark, the largest castle in the North. Built over natural hot springs that keep its walls warm even in the harshest winters." },
    { name: "King\'s Landing", x: 52, y: 62, house: "The Crown", emoji: "👑", desc: "Capital of the Seven Kingdoms, home to the Iron Throne and the Red Keep. A city of half a million souls, intrigue, and the stench of Flea Bottom." },
    { name: "Casterly Rock", x: 28, y: 52, house: "Lannister", emoji: "🦁", desc: "A colossal rock beside the Sunset Sea, honeycombed with tunnels and caverns. The gold mines beneath once made the Lannisters the wealthiest house in Westeros." },
    { name: "Dragonstone", x: 58, y: 55, house: "Targaryen", emoji: "🐉", desc: "A volcanic island fortress in Blackwater Bay. The ancestral seat of House Targaryen before the Conquest, shaped by Valyrian sorcery into dragon-adorned towers." },
    { name: "The Wall", x: 42, y: 10, house: "Night\'s Watch", emoji: "🧊", desc: "A 700-foot wall of ice stretching 300 miles across the northern border. Defended by the Night\'s Watch for eight thousand years against wildlings and worse." },
    { name: "Highgarden", x: 32, y: 70, house: "Tyrell", emoji: "🌹", desc: "The most beautiful castle in the Seven Kingdoms, surrounded by golden fields, groves, and the finest gardens. Seat of House Tyrell in the bountiful Reach." },
    { name: "Pyke", x: 22, y: 38, house: "Greyjoy", emoji: "🐙", desc: "A ruined castle perched on sea stacks connected by rope bridges. The ancestral seat of House Greyjoy and the Iron Islands, battered by eternal storms." },
    { name: "Sunspear", x: 55, y: 82, house: "Martell", emoji: "☀️", desc: "Capital of Dorne, a sun-baked palace of sandstone towers and water gardens. The Martells rule the most culturally distinct of the Seven Kingdoms from here." },
    { name: "The Eyrie", x: 55, y: 40, house: "Arryn", emoji: "🦅", desc: "A small but impregnable castle perched atop the Giant\'s Lance mountain. Accessible only by a narrow goat trail, with its infamous Moon Door opening to a 600-foot drop." },
    { name: "Storm\'s End", x: 56, y: 68, house: "Baratheon", emoji: "🦌", desc: "A massive fortress on the coast of Shipbreaker Bay, said to be built by Bran the Builder. Its walls are imbued with magic that can withstand any storm—or shadow." },
  ];

  return (
    <section id="map" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase text-[var(--gold)] mb-4 text-shadow-gold">
            The Known World
          </h2>
          <p className="divider-ornament text-gray-500 tracking-[0.2em] uppercase text-sm max-w-lg mx-auto">
            Locations of Westeros
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[3/4] md:aspect-[4/3] bg-gradient-to-br from-[#0a1628] via-[#0d1117] to-[#0a0a0a] rounded-2xl border border-[var(--gold)]/10 overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(rgba(200,169,81,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />

          {/* Continent shape hint */}
          <div className="absolute inset-[10%] border border-[var(--gold)]/5 rounded-[40%_60%_50%_40%] bg-[var(--gold)]/[0.02]" />

          {/* Compass */}
          <div className="absolute top-6 right-6 text-[var(--gold)]/30 text-sm tracking-widest">
            <div className="text-center">N</div>
            <div className="flex gap-8">
              <span>W</span>
              <span>⊕</span>
              <span>E</span>
            </div>
            <div className="text-center">S</div>
          </div>

          {/* Location pins */}
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="absolute group"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Pin */}
              <div className="relative cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center text-sm group-hover:bg-[var(--gold)]/40 group-hover:scale-125 transition-all duration-300">
                  {loc.emoji}
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-[var(--gold)]/20 animate-ping opacity-30" />
              </div>

              {/* Label */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs text-gray-400 group-hover:text-[var(--gold)] transition-colors">
                {loc.name}
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-black/95 border border-[var(--gold)]/20 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-20 shadow-xl">
                <p className="text-[var(--gold)] font-bold text-sm mb-1">{loc.name}</p>
                <p className="text-gray-500 text-xs mb-2">House {loc.house}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{loc.desc}</p>
              </div>
            </div>
          ))}

          {/* Region labels */}
          <div className="absolute top-[15%] left-[35%] text-[var(--gold)]/10 text-2xl md:text-4xl font-bold tracking-[0.5em] uppercase rotate-[-5deg]">
            THE NORTH
          </div>
          <div className="absolute top-[50%] left-[30%] text-[var(--gold)]/10 text-xl md:text-3xl font-bold tracking-[0.5em] uppercase rotate-[-2deg]">
            WESTEROS
          </div>
          <div className="absolute top-[75%] left-[40%] text-[var(--gold)]/10 text-lg md:text-2xl font-bold tracking-[0.5em] uppercase rotate-[3deg]">
            DORNE
          </div>
        </div>
      </div>
    </section>
  );
}
