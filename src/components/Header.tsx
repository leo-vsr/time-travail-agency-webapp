"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Destinations", href: "#destinations" },
  { label: "Quiz", href: "#quiz" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setHidden(true);
      setMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className="mx-3 sm:mx-4 mt-3 rounded-2xl transition-all duration-500 border bg-white/[0.04] backdrop-blur-xl border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)] py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/assets/logo.png"
                alt="TimeTravel Agency"
                width={56}
                height={56}
                className="w-14 h-14 transition-all duration-500 drop-shadow-[0_0_8px_rgba(201,168,76,0.4)] group-hover:drop-shadow-[0_0_16px_rgba(201,168,76,0.6)]"
              />
            </motion.div>
            <span
              className="text-lg font-bold tracking-wider text-gold transition-all duration-500 group-hover:text-gold-light"
            >
              TimeTravel
              <span className="text-white/50 font-normal ml-1.5">Agency</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-sm text-white/60 hover:text-white px-4 py-2 rounded-xl hover:bg-white/[0.08] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold rounded-full transition-all duration-300 group-hover:w-6" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-white/[0.08] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gold transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gold transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gold transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mx-3 sm:mx-4 mt-2 rounded-2xl bg-white/[0.07] backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-5 py-4 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/60 hover:text-white px-4 py-3 rounded-xl hover:bg-white/[0.08] transition-all duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
