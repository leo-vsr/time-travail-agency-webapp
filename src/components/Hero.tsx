"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        >
          <source src="/video-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background z-10" />


      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Voyagez{" "}
          <motion.span
            className="text-gold inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            au-delà
          </motion.span>{" "}
          du Temps
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
        >
          Découvrez des voyages exclusifs à travers l&apos;histoire. De la Belle Époque
          à l&apos;ère des dinosaures, votre prochaine aventure vous attend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="#destinations"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gold text-background font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-gold/20"
          >
            Explorer les Destinations
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
