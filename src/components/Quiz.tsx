"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Destination = "paris" | "cretaceous" | "florence";

interface Question {
  question: string;
  options: { label: string; scores: Record<Destination, number> }[];
}

const questions: Question[] = [
  {
    question: "What type of experience are you looking for?",
    options: [
      { label: "Cultural & artistic", scores: { paris: 1, cretaceous: 0, florence: 2 } },
      { label: "Adventure & nature", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Elegance & refinement", scores: { paris: 2, cretaceous: 0, florence: 1 } },
    ],
  },
  {
    question: "Which era fascinates you the most?",
    options: [
      { label: "Modern history", scores: { paris: 2, cretaceous: 0, florence: 0 } },
      { label: "Ancient times", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Renaissance", scores: { paris: 0, cretaceous: 0, florence: 2 } },
    ],
  },
  {
    question: "What do you prefer?",
    options: [
      { label: "Urban energy", scores: { paris: 2, cretaceous: 0, florence: 1 } },
      { label: "Wild nature", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Art & architecture", scores: { paris: 1, cretaceous: 0, florence: 2 } },
    ],
  },
  {
    question: "What is your ideal activity?",
    options: [
      { label: "Visiting monuments", scores: { paris: 2, cretaceous: 0, florence: 1 } },
      { label: "Observing wildlife", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Exploring museums", scores: { paris: 1, cretaceous: 0, florence: 2 } },
    ],
  },
];

const results: Record<Destination, { title: string; description: string; image: string }> = {
  paris: {
    title: "Paris 1889",
    description:
      "You belong in the City of Light! Your refined taste and love for culture make the Belle Époque your perfect era. Enjoy the Universal Exposition, marvel at the brand-new Eiffel Tower, and dine in the finest Parisian salons.",
    image: "/assets/1-1_paris_image.png",
  },
  cretaceous: {
    title: "Cretaceous −65M",
    description:
      "You are a true adventurer! The prehistoric world calls to you. Walk among dinosaurs, explore untouched landscapes, and experience nature at its most primal and awe-inspiring.",
    image: "/assets/1-1_cretace_image.png",
  },
  florence: {
    title: "Florence 1504",
    description:
      "You have the soul of an artist! Renaissance Florence is your destiny. Witness Michelangelo's genius firsthand, explore magnificent palaces, and immerse yourself in the birth of modern art.",
    image: "/assets/1-1_florence_image.png",
  },
};

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<Destination, number>>({
    paris: 0,
    cretaceous: 0,
    florence: 0,
  });
  const [result, setResult] = useState<Destination | null>(null);
  const [started, setStarted] = useState(false);

  const handleAnswer = (optionScores: Record<Destination, number>) => {
    const newScores = { ...scores };
    (Object.keys(optionScores) as Destination[]).forEach((key) => {
      newScores[key] += optionScores[key];
    });
    setScores(newScores);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const best = (Object.keys(newScores) as Destination[]).reduce((a, b) =>
        newScores[a] >= newScores[b] ? a : b
      );
      setResult(best);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScores({ paris: 0, cretaceous: 0, florence: 0 });
    setResult(null);
    setStarted(false);
  };

  return (
    <section id="quiz" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find Your <span className="text-gold">Destination</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Answer 4 quick questions and we&apos;ll recommend the perfect time
            travel experience for you.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!started && !result && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20 cursor-pointer"
              >
                Start the Quiz
              </button>
            </motion.div>
          )}

          {started && !result && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-light rounded-2xl p-8 border border-white/5"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted">
                  Question {currentQ + 1} of {questions.length}
                </span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-1 rounded-full transition-colors duration-300 ${
                        i <= currentQ ? "bg-gold" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-6">
                {questions[currentQ].question}
              </h3>

              <div className="flex flex-col gap-3">
                {questions[currentQ].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.scores)}
                    className="w-full text-left px-6 py-4 rounded-xl border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 text-sm cursor-pointer"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-surface-light rounded-2xl overflow-hidden border border-gold/20"
            >
              <div className="relative h-48">
                <Image
                  src={results[result].image}
                  alt={results[result].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-light to-transparent" />
              </div>
              <div className="p-8 text-center">
                <p className="text-sm text-gold mb-2 font-medium uppercase tracking-wider">
                  Your perfect destination
                </p>
                <h3 className="text-2xl font-bold mb-4">
                  {results[result].title}
                </h3>
                <p className="text-muted leading-relaxed mb-8">
                  {results[result].description}
                </p>
                <button
                  onClick={reset}
                  className="px-6 py-3 border border-gold/40 text-gold rounded-full text-sm font-medium hover:bg-gold hover:text-background transition-all duration-300 cursor-pointer"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
