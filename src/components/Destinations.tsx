"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const destinations = [
  {
    id: "paris",
    title: "Paris 1889",
    description:
      "Vivez la Belle Époque dans toute sa splendeur. Assistez à l\u2019inauguration de la Tour Eiffel lors de l\u2019Exposition Universelle et plongez dans la révolution artistique.",
    image: "/assets/1-1_paris_image.png",
    details: {
      duration: "7 jours / 6 nuits",
      price: "À partir de 45 000 €",
      highlights: [
        "Inauguration de la Tour Eiffel",
        "Dîner dans les salons parisiens",
        "Visite de l\u2019Exposition Universelle",
        "Promenade sur les boulevards éclairés au gaz",
      ],
      included:
        "Transport temporel, hébergement de luxe, guide historien privé, garde-robe d\u2019époque, repas gastronomiques.",
    },
  },
  {
    id: "cretaceous",
    title: "Crétacé −65M",
    description:
      "Partez à la rencontre des géants. Marchez parmi les dinosaures, explorez des jungles préhistoriques luxuriantes et contemplez la nature dans sa forme la plus brute et majestueuse.",
    image: "/assets/1-1_cretace_image.png",
    details: {
      duration: "5 jours / 4 nuits",
      price: "À partir de 62 000 €",
      highlights: [
        "Observation de T-Rex et Tricératops",
        "Safari en jungle préhistorique",
        "Campement sécurisé haute technologie",
        "Vol panoramique au-dessus des plaines",
      ],
      included:
        "Transport temporel, équipement de protection, guide paléontologue, campement tout confort, repas inclus.",
    },
  },
  {
    id: "florence",
    title: "Florence 1504",
    description:
      "Plongez au cœur de la Renaissance. Rencontrez Michel-Ange lors du dévoilement du David, explorez les palais des Médicis et assistez à la naissance de l\u2019art moderne.",
    image: "/assets/1-1_florence_image.png",
    details: {
      duration: "6 jours / 5 nuits",
      price: "À partir de 38 000 €",
      highlights: [
        "Dévoilement du David de Michel-Ange",
        "Visite des ateliers de Léonard de Vinci",
        "Banquet au Palazzo Medici",
        "Cours de peinture Renaissance",
      ],
      included:
        "Transport temporel, hébergement dans un palazzo, guide historien de l\u2019art, garde-robe Renaissance, repas toscans.",
    },
  },
];

export default function Destinations() {
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const selected = destinations.find((d) => d.id === selectedDest);

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
            Nos <span className="text-gold">Destinations</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Choisissez votre époque. Chaque voyage est une expérience unique
            conçue pour les voyageurs les plus exigeants.
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
                <button
                  onClick={() => setSelectedDest(dest.id)}
                  className="w-full py-3 rounded-xl border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-background transition-all duration-300 cursor-pointer"
                >
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedDest(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-surface border border-white/10 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 512px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <button
                  onClick={() => setSelectedDest(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gold mb-2">
                  {selected.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1.5 bg-gold/10 text-gold text-xs font-medium rounded-lg">
                    {selected.details.duration}
                  </span>
                  <span className="px-3 py-1.5 bg-gold/10 text-gold text-xs font-medium rounded-lg">
                    {selected.details.price}
                  </span>
                </div>

                <h4 className="text-sm font-semibold mb-3">
                  Points forts
                </h4>
                <ul className="space-y-2 mb-6">
                  {selected.details.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="text-gold mt-0.5">•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold mb-2">
                  Inclus dans le voyage
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {selected.details.included}
                </p>

                <button
                  onClick={() => setSelectedDest(null)}
                  className="w-full py-3 bg-gold text-background rounded-xl text-sm font-semibold hover:bg-gold-light transition-colors duration-300 cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
