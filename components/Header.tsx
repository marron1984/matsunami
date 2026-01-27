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
        <div className="flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-6 md:space-x-12 text-[10px] md:text-xs tracking-[0.2em] uppercase font-light"
          >
            <a
              href="#about"
              className="hover:opacity-60 transition-opacity duration-300"
            >
              ABOUT
            </a>
            <a
              href="#works"
              className="hover:opacity-60 transition-opacity duration-300"
            >
              WORKS
            </a>
            <a
              href="#concept"
              className="hover:opacity-60 transition-opacity duration-300"
            >
              CONCEPT
            </a>
            <a
              href="#contact"
              className="hover:opacity-60 transition-opacity duration-300"
            >
              CONTACT
            </a>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
