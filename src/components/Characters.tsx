"use client";
import { useState } from "react";

const characters = [
  {
    name: "Jon Snow",
    title: "King in the North",
    house: "Stark / Targaryen",
    emoji: "⚔️",
    status: "Alive",
    description: "Raised as Ned Stark\'s bastard at Winterfell, Jon joined the Night\'s Watch and rose to become Lord Commander. His true parentage as the son of Rhaegar Targaryen and Lyanna Stark makes him the rightful heir to the Iron Throne. Resurrected after betrayal, he united the North against the army of the dead.",
    traits: ["Leadership", "Swordsmanship", "Honor", "Resilience"],
    quote: "The North remembers.",
  },
  {
    name: "Daenerys Targaryen",
    title: "Mother of Dragons",
    house: "Targaryen",
    emoji: "🐉",
    status: "Deceased",
    description: "Born in exile during a great storm, Daenerys grew from a frightened girl into a conqueror. She hatched three dragons from petrified eggs, liberated slave cities, and crossed the Narrow Sea to claim the Iron Throne. Her descent into tyranny shocked the world.",
    traits: ["Charisma", "Dragon Riding", "Liberation", "Fire Immunity"],
    quote: "I am the blood of the dragon. I must be strong.",
  },
  {
    name: "Tyrion Lannister",
    title: "The Imp",
    house: "Lannister",
    emoji: "🍷",
    status: "Alive",
    description: "The dwarf son of Tywin Lannister, despised by his sister and mocked by the realm. Yet Tyrion\'s wit is sharper than any Valyrian steel blade. He served as Hand of the King, survived trial by combat, killed his own father, and ultimately became Hand of the King once more.",
    traits: ["Intelligence", "Wit", "Political Acumen", "Drinking"],
    quote: "I drink and I know things.",
  },
  {
    name: "Cersei Lannister",
    title: "Queen of the Seven Kingdoms",
    house: "Lannister",
    emoji: "👑",
    status: "Deceased",
    description: "Beautiful, cunning, and ruthless, Cersei clawed her way to the Iron Throne through manipulation, murder, and wildfire. Her love for her children was matched only by her hatred of her enemies. She destroyed the Great Sept of Baelor and reigned through fear.",
    traits: ["Cunning", "Ruthlessness", "Ambition", "Political Manipulation"],
    quote: "When you play the game of thrones, you win or you die.",
  },
  {
    name: "Arya Stark",
    title: "No One",
    house: "Stark",
    emoji: "🗡️",
    status: "Alive",
    description: "The wild wolf of Winterfell who refused to be a lady. After witnessing her father\'s execution, Arya embarked on a journey of survival and vengeance across Westeros and Braavos. Trained by the Faceless Men, she became a deadly assassin who struck the killing blow against the Night King.",
    traits: ["Stealth", "Face Changing", "Swordsmanship", "Determination"],
    quote: "A girl has no name.",
  },
  {
    name: "Jaime Lannister",
    title: "The Kingslayer",
    house: "Lannister",
    emoji: "🖐️",
    status: "Deceased",
    description: "The golden knight who broke his sacred vow to save a city. Jaime slew the Mad King and bore the shame for decades. Losing his sword hand forced him to find a new identity. His journey from villain to something approaching redemption is one of the saga\'s most complex arcs.",
    traits: ["Swordsmanship", "Honor (Complex)", "Redemption", "Loyalty"],
    quote: "The things I do for love.",
  },
  {
    name: "Bran Stark",
    title: "The Three-Eyed Raven",
    house: "Stark",
    emoji: "🌳",
    status: "Alive",
    description: "Pushed from a tower as a boy, Bran Stark journeyed beyond the Wall to become the Three-Eyed Raven — an ancient seer who can perceive all of past, present, and future. His mystical powers proved crucial in the war against the Night King, and he was ultimately chosen to rule the Six Kingdoms.",
    traits: ["Greensight", "Warging", "Omniscience", "Patience"],
    quote: "I\'m the Three-Eyed Raven now.",
  },
  {
    name: "Sansa Stark",
    title: "Queen in the North",
    house: "Stark",
    emoji: "🐺",
    status: "Alive",
    description: "Once a naive girl dreaming of knights and princes, Sansa endured abuse from Joffrey, manipulation by Littlefinger, and cruelty from Ramsay Bolton. Each trial forged her into the shrewdest political mind in the North. She secured Northern independence and was crowned its queen.",
    traits: ["Political Intelligence", "Resilience", "Diplomacy", "Leadership"],
    quote: "The lone wolf dies, but the pack survives.",
  },
];

export default function Characters() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="characters" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase text-[var(--gold)] mb-4 text-shadow-gold">
            Iconic Characters
          </h2>
          <p className="divider-ornament text-gray-500 tracking-[0.2em] uppercase text-sm max-w-lg mx-auto">
            Heroes, Villains & Legends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, i) => (
            <div
              key={char.name}
              onClick={() => setSelected(selected === i ? null : i)}
              className="cursor-pointer group relative overflow-hidden rounded-lg border border-[var(--gold)]/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 hover:border-[var(--gold)]/30 hover:shadow-lg hover:shadow-[var(--gold)]/5"
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{char.emoji}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    char.status === "Alive"
                      ? "bg-green-900/50 text-green-400 border border-green-700/50"
                      : "bg-red-900/50 text-red-400 border border-red-700/50"
                  }`}>
                    {char.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{char.name}</h3>
                <p className="text-[var(--gold)]/70 text-sm italic mb-1">{char.title}</p>
                <p className="text-gray-500 text-xs">House {char.house}</p>

                {selected === i && (
                  <div className="mt-4 animate-fade-in-up">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {char.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {char.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-2 py-1 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded text-xs text-[var(--gold)]"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>

                    <blockquote className="border-l-2 border-[var(--gold)]/50 pl-3 italic text-gray-400 text-sm">
                      &ldquo;{char.quote}&rdquo;
                    </blockquote>
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent group-hover:via-[var(--gold)]/60 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
