"use client";
import { useState } from "react";

const houses = [
  {
    name: "Stark",
    sigil: "🐺",
    words: "Winter Is Coming",
    seat: "Winterfell",
    region: "The North",
    color: "from-gray-700 to-gray-900",
    borderColor: "border-gray-500",
    description: "The Starks are the ancient Kings of Winter and wardens of the North. Descended from Bran the Builder and the First Men, they have ruled from Winterfell for eight thousand years, guardians against the terrors beyond the Wall.",
    members: ["Eddard Stark", "Catelyn Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Bran Stark", "Jon Snow"],
  },
  {
    name: "Lannister",
    sigil: "🦁",
    words: "Hear Me Roar",
    seat: "Casterly Rock",
    region: "The Westerlands",
    color: "from-yellow-800 to-red-900",
    borderColor: "border-yellow-600",
    description: "The wealthiest house in the Seven Kingdoms, the Lannisters of Casterly Rock descend from Lann the Clever. Their gold mines have bought them power, influence, and the Iron Throne itself through strategic marriages and ruthless politics.",
    members: ["Tywin Lannister", "Cersei Lannister", "Jaime Lannister", "Tyrion Lannister", "Joffrey Baratheon"],
  },
  {
    name: "Targaryen",
    sigil: "🐉",
    words: "Fire and Blood",
    seat: "Dragonstone",
    region: "Crownlands",
    color: "from-red-800 to-black",
    borderColor: "border-red-600",
    description: "The blood of Old Valyria flows through House Targaryen. Dragonlords who conquered the Seven Kingdoms with fire and blood, they ruled for nearly three centuries before Robert's Rebellion toppled the Mad King and sent the survivors into exile.",
    members: ["Daenerys Targaryen", "Viserys Targaryen", "Rhaegar Targaryen", "Aerys II (Mad King)", "Aemon Targaryen"],
  },
  {
    name: "Baratheon",
    sigil: "🦌",
    words: "Ours Is the Fury",
    seat: "Storm\'s End",
    region: "The Stormlands",
    color: "from-yellow-700 to-black",
    borderColor: "border-yellow-500",
    description: "Founded by Orys Baratheon, rumored bastard half-brother of Aegon the Conqueror. Robert Baratheon seized the Iron Throne by right of conquest, only for his death to ignite the War of the Five Kings among his brothers and supposed sons.",
    members: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Gendry"],
  },
  {
    name: "Tyrell",
    sigil: "🌹",
    words: "Growing Strong",
    seat: "Highgarden",
    region: "The Reach",
    color: "from-green-700 to-green-900",
    borderColor: "border-green-500",
    description: "Stewards who rose to rule the Reach after the fall of House Gardener. The Tyrells command the most fertile lands in Westeros and the largest army, wielding soft power through marriage, wealth, and feeding the realm.",
    members: ["Mace Tyrell", "Margaery Tyrell", "Loras Tyrell", "Olenna Tyrell"],
  },
  {
    name: "Greyjoy",
    sigil: "🐙",
    words: "We Do Not Sow",
    seat: "Pyke",
    region: "The Iron Islands",
    color: "from-gray-800 to-yellow-900",
    borderColor: "border-gray-400",
    description: "The ironborn of the Iron Islands follow the Drowned God and the Old Way—taking what they need by the iron price. House Greyjoy rules from the sea-battered castle of Pyke, dreaming of a return to the glory days of the Iron Kings.",
    members: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Euron Greyjoy"],
  },
  {
    name: "Martell",
    sigil: "☀️",
    words: "Unbowed, Unbent, Unbroken",
    seat: "Sunspear",
    region: "Dorne",
    color: "from-orange-700 to-red-900",
    borderColor: "border-orange-500",
    description: "The Martells rule Dorne from the desert fortress of Sunspear. The only kingdom never conquered by Aegon\'s dragons, Dorne joined the realm through marriage. Their Rhoynish customs give equal inheritance to women, and they never forget a debt of blood.",
    members: ["Doran Martell", "Oberyn Martell", "Ellaria Sand", "Trystane Martell"],
  },
  {
    name: "Arryn",
    sigil: "🦅",
    words: "As High As Honor",
    seat: "The Eyrie",
    region: "The Vale",
    color: "from-blue-700 to-blue-900",
    borderColor: "border-blue-400",
    description: "Descended from the Kings of Mountain and Vale, House Arryn rules from the impregnable Eyrie, a castle perched atop the Giant\'s Lance. The Vale\'s mountain passes make it nearly unconquerable, a fact the Arryns have leveraged for millennia.",
    members: ["Jon Arryn", "Lysa Arryn", "Robin Arryn"],
  },
];

export default function Houses() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="houses" className="py-24 px-6 bg-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase text-[var(--gold)] mb-4 text-shadow-gold">
            The Great Houses
          </h2>
          <p className="divider-ornament text-gray-500 tracking-[0.2em] uppercase text-sm max-w-lg mx-auto">
            Noble Families of Westeros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, i) => (
            <div
              key={house.name}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`cursor-pointer group relative overflow-hidden rounded-lg border ${house.borderColor}/30 bg-gradient-to-br ${house.color}/30 backdrop-blur-sm p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50 ${
                expanded === i ? "md:col-span-2 lg:col-span-2 row-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{house.sigil}</div>
                <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">
                  House {house.name}
                </h3>
                <p className="text-[var(--gold)] italic text-sm mb-3">
                  &ldquo;{house.words}&rdquo;
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-4">
                  <span>🏰 {house.seat}</span>
                  <span>📍 {house.region}</span>
                </div>

                {expanded === i && (
                  <div className="animate-fade-in-up">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {house.description}
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Notable Members</p>
                      <div className="flex flex-wrap gap-2">
                        {house.members.map((member) => (
                          <span
                            key={member}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {expanded !== i && (
                  <p className="text-xs text-gray-500 mt-2">Click to explore →</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
