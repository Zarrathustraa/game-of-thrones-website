"use client";
import { useState } from "react";

const quotes = [
  {
    text: "When you play the game of thrones, you win or you die. There is no middle ground.",
    author: "Cersei Lannister",
    context: "To Ned Stark, in the godswood of King\'s Landing",
    emoji: "👑",
  },
  {
    text: "Chaos isn\'t a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love. Illusions.",
    author: "Petyr Baelish",
    context: "To Lord Varys, in the throne room",
    emoji: "🕸️",
  },
  {
    text: "The man who passes the sentence should swing the sword. If you would take a man\'s life, you owe it to him to look into his eyes and hear his final words.",
    author: "Eddard Stark",
    context: "Teaching Bran the ways of Northern justice",
    emoji: "⚔️",
  },
  {
    text: "A Lannister always pays his debts.",
    author: "Tyrion Lannister",
    context: "The unofficial motto of House Lannister, invoked countless times",
    emoji: "🦁",
  },
  {
    text: "The night is dark and full of terrors.",
    author: "Melisandre",
    context: "The Red Priestess\'s prayer to the Lord of Light",
    emoji: "🔥",
  },
  {
    text: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
    author: "Tyrion Lannister",
    context: "Explaining to Jon Snow why he reads so much",
    emoji: "📚",
  },
  {
    text: "The things I do for love.",
    author: "Jaime Lannister",
    context: "Before pushing Bran Stark from the tower window",
    emoji: "💔",
  },
  {
    text: "Valar Morghulis — All men must die. But we are not men.",
    author: "Daenerys Targaryen",
    context: "Before the liberation of Slaver\'s Bay",
    emoji: "🐉",
  },
  {
    text: "Any man who must say \'I am the King\' is no true king.",
    author: "Tywin Lannister",
    context: "Putting his grandson Joffrey in his place",
    emoji: "🦁",
  },
  {
    text: "There is only one god, and his name is Death. And there is only one thing we say to Death: Not today.",
    author: "Syrio Forel",
    context: "The First Sword of Braavos, teaching Arya Stark",
    emoji: "🗡️",
  },
  {
    text: "Power resides where men believe it resides. It\'s a trick, a shadow on the wall.",
    author: "Lord Varys",
    context: "His famous riddle about power to Tyrion",
    emoji: "🕯️",
  },
  {
    text: "The lone wolf dies, but the pack survives.",
    author: "Sansa Stark",
    context: "Echoing her father\'s words as the Starks reunite",
    emoji: "🐺",
  },
];

export default function Quotes() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % quotes.length);
  const prev = () => setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <section id="quotes" className="py-24 px-6 bg-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase text-[var(--gold)] mb-4 text-shadow-gold">
            Words of Power
          </h2>
          <p className="divider-ornament text-gray-500 tracking-[0.2em] uppercase text-sm max-w-lg mx-auto">
            Memorable Quotes
          </p>
        </div>

        {/* Quote Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[var(--gold)]/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            {/* Big quote mark */}
            <div className="text-[var(--gold)]/20 text-8xl font-serif leading-none mb-4">&ldquo;</div>

            <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed italic mb-8 min-h-[120px]">
              {quotes[current].text}
            </blockquote>

            <div className="flex items-center gap-4">
              <span className="text-3xl">{quotes[current].emoji}</span>
              <div>
                <p className="text-[var(--gold)] font-bold">{quotes[current].author}</p>
                <p className="text-gray-500 text-sm">{quotes[current].context}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all flex items-center justify-center"
            >
              ←
            </button>
            <span className="text-gray-500 text-sm">
              {current + 1} / {quotes.length}
            </span>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Quote grid preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {quotes.map((q, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-3 rounded-lg text-left transition-all duration-300 ${
                current === i
                  ? "bg-[var(--gold)]/10 border border-[var(--gold)]/30"
                  : "bg-white/5 border border-white/5 hover:border-[var(--gold)]/20"
              }`}
            >
              <span className="text-lg">{q.emoji}</span>
              <p className="text-xs text-gray-400 mt-1 truncate">{q.author}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
