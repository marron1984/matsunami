"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-off-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-xl md:text-2xl font-medium tracking-wider"
          >
            MMA DESIGN
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-8 text-sm tracking-wider"
          >
            <a
              href="#works"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              WORKS
            </a>
            <a
              href="#concept"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              CONCEPT
            </a>
            <a
              href="#contact"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              CONTACT
            </a>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
