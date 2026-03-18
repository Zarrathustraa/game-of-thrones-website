"use client";

const events = [
  {
    year: "~12,000 years ago",
    title: "The Age of Heroes",
    description: "Bran the Builder raises Winterfell and the Wall. The Night\'s Watch is founded to guard the realms of men against the terrors of the far north.",
    icon: "🏰",
    era: "ancient",
  },
  {
    year: "~8,000 years ago",
    title: "The Long Night",
    description: "A winter that lasted a generation. The White Walkers descend from the Land of Always Winter. The last hero and the Children of the Forest drive them back.",
    icon: "❄️",
    era: "ancient",
  },
  {
    year: "~300 years ago",
    title: "Aegon\'s Conquest",
    description: "Aegon Targaryen and his sister-wives land at the mouth of the Blackwater with three dragons. In two years, six kingdoms fall. Only Dorne resists.",
    icon: "🐉",
    era: "conquest",
  },
  {
    year: "~170 years ago",
    title: "Dance of the Dragons",
    description: "A brutal civil war between Targaryen factions over succession. Dragon fights dragon in the skies over Westeros. The conflict nearly destroys House Targaryen and ends the age of dragons.",
    icon: "🔥",
    era: "conquest",
  },
  {
    year: "~17 years ago",
    title: "Robert\'s Rebellion",
    description: "The Mad King burns Lord Rickard Stark alive and Prince Rhaegar allegedly abducts Lyanna Stark. Robert Baratheon, Eddard Stark, and Jon Arryn raise their banners in revolt. The Targaryen dynasty falls at the Trident.",
    icon: "⚔️",
    era: "rebellion",
  },
  {
    year: "~9 years ago",
    title: "Greyjoy Rebellion",
    description: "Balon Greyjoy declares independence and crowns himself King of the Iron Islands. The rebellion is crushed. Theon Greyjoy is taken as ward to Winterfell.",
    icon: "🐙",
    era: "rebellion",
  },
  {
    year: "Year 1 (298 AC)",
    title: "Death of Jon Arryn",
    description: "The Hand of the King dies under mysterious circumstances. King Robert rides north to ask Ned Stark to take his place. The game of thrones begins.",
    icon: "💀",
    era: "present",
  },
  {
    year: "Year 1 (298 AC)",
    title: "War of the Five Kings",
    description: "After Ned Stark\'s execution, the realm shatters. Five kings claim power: Joffrey, Renly, Stannis, Robb Stark, and Balon Greyjoy. Westeros bleeds.",
    icon: "👑",
    era: "present",
  },
  {
    year: "Year 2 (299 AC)",
    title: "The Red Wedding",
    description: "Under guest right at the Twins, Walder Frey and Roose Bolton betray and murder Robb Stark, his mother Catelyn, and his bannermen. The North\'s rebellion dies in a single night of blood.",
    icon: "🩸",
    era: "present",
  },
  {
    year: "Year 3 (300 AC)",
    title: "The Battle of the Bastards",
    description: "Jon Snow and Sansa Stark retake Winterfell from Ramsay Bolton in one of the bloodiest battles in northern history. The Knights of the Vale turn the tide at the last moment.",
    icon: "🛡️",
    era: "present",
  },
  {
    year: "Year 3 (300 AC)",
    title: "The Great War",
    description: "The Night King breaches the Wall. The living unite at Winterfell for a final stand against the army of the dead. Arya Stark slays the Night King, ending the Long Night.",
    icon: "🌑",
    era: "present",
  },
  {
    year: "Year 3 (300 AC)",
    title: "The Fall of King\'s Landing",
    description: "Daenerys Targaryen burns King\'s Landing with dragonfire. Jon Snow kills her in the throne room. Bran Stark is chosen as king of the Six Kingdoms. The North gains independence under Queen Sansa.",
    icon: "🏛️",
    era: "present",
  },
];

const eraColors: Record<string, string> = {
  ancient: "border-blue-500/50 bg-blue-500/10",
  conquest: "border-red-500/50 bg-red-500/10",
  rebellion: "border-yellow-500/50 bg-yellow-500/10",
  present: "border-[var(--gold)]/50 bg-[var(--gold)]/10",
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase text-[var(--gold)] mb-4 text-shadow-gold">
            Timeline
          </h2>
          <p className="divider-ornament text-gray-500 tracking-[0.2em] uppercase text-sm max-w-lg mx-auto">
            History of the Seven Kingdoms
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--gold)]/50 via-[var(--gold)]/20 to-transparent" />

          {events.map((event, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--gold)] border-2 border-black z-10 shadow-lg shadow-[var(--gold)]/30" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${
                i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
              }`}>
                <div className={`p-5 rounded-lg border ${eraColors[event.era]} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{event.icon}</span>
                    <span className="text-xs text-gray-500 tracking-wider uppercase">{event.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
