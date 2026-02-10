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
    question: "Quel type d\u2019exp\u00e9rience recherchez-vous ?",
    options: [
      { label: "Culturelle & artistique", scores: { paris: 1, cretaceous: 0, florence: 2 } },
      { label: "Aventure & nature", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "\u00c9l\u00e9gance & raffinement", scores: { paris: 2, cretaceous: 0, florence: 1 } },
    ],
  },
  {
    question: "Quelle \u00e9poque vous fascine le plus ?",
    options: [
      { label: "Histoire moderne", scores: { paris: 2, cretaceous: 0, florence: 0 } },
      { label: "Temps anciens", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Renaissance", scores: { paris: 0, cretaceous: 0, florence: 2 } },
    ],
  },
  {
    question: "Que pr\u00e9f\u00e9rez-vous ?",
    options: [
      { label: "\u00c9nergie urbaine", scores: { paris: 2, cretaceous: 0, florence: 1 } },
      { label: "Nature sauvage", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Art & architecture", scores: { paris: 1, cretaceous: 0, florence: 2 } },
    ],
  },
  {
    question: "Quelle serait votre activit\u00e9 id\u00e9ale ?",
    options: [
      { label: "Visiter des monuments", scores: { paris: 2, cretaceous: 0, florence: 1 } },
      { label: "Observer la faune", scores: { paris: 0, cretaceous: 2, florence: 0 } },
      { label: "Explorer des mus\u00e9es", scores: { paris: 1, cretaceous: 0, florence: 2 } },
    ],
  },
];

const results: Record<Destination, { title: string; description: string; image: string }> = {
  paris: {
    title: "Paris 1889",
    description:
      "Vous appartenez à la Ville Lumière ! Votre goût raffiné et votre amour de la culture font de la Belle Époque votre époque idéale. Profitez de l’Exposition Universelle, émerveillez-vous devant la Tour Eiffel et dînez dans les plus beaux salons parisiens.",
    image: "/assets/1-1_paris_image.png",
  },
  cretaceous: {
    title: "Crétacé −65M",
    description:
      "Vous êtes un véritable aventurier ! Le monde préhistorique vous appelle. Marchez parmi les dinosaures, explorez des paysages vierges et vivez la nature dans sa forme la plus brute et majestueuse.",
    image: "/assets/1-1_cretace_image.png",
  },
  florence: {
    title: "Florence 1504",
    description:
      "Vous avez l’âme d’un artiste ! Florence à la Renaissance est votre destin. Découvrez le génie de Michel-Ange, explorez de magnifiques palais et plongez dans la naissance de l’art moderne.",
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
            Trouvez votre <span className="text-gold">Destination</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Répondez à 4 questions rapides et nous vous recommanderons
            l&apos;expérience de voyage temporel idéale pour vous.
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
              <motion.button
                onClick={() => setStarted(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-background font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-gold/20 cursor-pointer"
              >
                Commencer le Quiz
              </motion.button>
            </motion.div>
          )}

          {started && !result && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface-light rounded-2xl p-8 border border-white/5 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-muted"
                >
                  Question {currentQ + 1} sur {questions.length}
                </motion.span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`w-8 h-1 rounded-full transition-all duration-500 ${
                        i <= currentQ ? "bg-gold shadow-sm shadow-gold/50" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold mb-6"
              >
                {questions[currentQ].question}
              </motion.h3>

              <div className="flex flex-col gap-3">
                {questions[currentQ].options.map((option, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.scores)}
                    className="w-full text-left px-6 py-4 rounded-xl border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 text-sm cursor-pointer relative overflow-hidden group"
                  >
                    <span className="relative z-10">{option.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-gold/5"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface-light rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/10"
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
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gold mb-2 font-medium uppercase tracking-wider"
                >
                  Votre destination idéale
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mb-4"
                >
                  {results[result].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted leading-relaxed mb-8"
                >
                  {results[result].description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={reset}
                  className="px-6 py-3 border border-gold/40 text-gold rounded-full text-sm font-medium hover:bg-gold hover:text-background transition-all duration-300 cursor-pointer"
                >
                  Refaire le Quiz
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
