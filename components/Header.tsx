"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "WORKS", href: "#works" },
  { label: "CONCEPT", href: "#concept" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 248, 245, 0)", "rgba(250, 248, 245, 0.95)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(196, 168, 130, 0)", "0 4px 30px rgba(196, 168, 130, 0.08)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      }}
      style={{
        backgroundColor: headerBg,
        boxShadow: headerShadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
            className={`font-serif text-sm md:text-base tracking-[0.15em] transition-colors duration-500 ${
              isScrolled ? "text-dark-warm" : "text-white"
            }`}
          >
            MMA DESIGN
          </motion.a>

          {/* ナビゲーション */}
          <div className="flex items-center space-x-6 md:space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.3 + index * 0.08,
                }}
                className={`relative text-[10px] md:text-xs tracking-[0.2em] uppercase font-light group transition-colors duration-500 ${
                  isScrolled ? "text-dark-warm/80" : "text-white/80"
                }`}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent-warm origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
