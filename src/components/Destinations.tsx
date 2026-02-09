"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    id: "paris",
    title: "Paris 1889",
    description:
      "Experience the Belle Époque at its finest. Witness the unveiling of the Eiffel Tower during the Universal Exposition, stroll along gaslit boulevards, and immerse yourself in the artistic revolution.",
    image: "/assets/1-1_paris_image.png",
  },
  {
    id: "cretaceous",
    title: "Cretaceous −65M",
    description:
      "Journey to the age of giants. Walk among towering dinosaurs, explore lush prehistoric jungles, and witness nature in its most raw and magnificent form — millions of years before humanity.",
    image: "/assets/1-1_cretace_image.png",
  },
  {
    id: "florence",
    title: "Florence 1504",
    description:
      "Step into the heart of the Renaissance. Meet Michelangelo as he unveils David, explore Medici palaces, and witness the birth of modern art and architecture in the cradle of civilization.",
    image: "/assets/1-1_florence_image.png",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold">Destinations</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Choose your era. Each journey is a once-in-a-lifetime experience
            crafted for the most discerning travelers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-lg hover:shadow-gold/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">
                  {dest.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {dest.description}
                </p>
                <button className="w-full py-3 rounded-xl border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-background transition-all duration-300 cursor-pointer">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
