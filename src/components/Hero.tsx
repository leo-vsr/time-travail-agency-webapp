"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Voyagez{" "}
          <span className="text-gold">au-delà</span>{" "}
          du Temps
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
        >
          Découvrez des voyages exclusifs à travers l&apos;histoire. De la Belle Époque
          à l&apos;ère des dinosaures, votre prochaine aventure vous attend.
        </motion.p>

        <motion.a
          href="#destinations"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="inline-block px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20"
        >
          Explorer les Destinations
        </motion.a>
      </div>
    </section>
  );
}
