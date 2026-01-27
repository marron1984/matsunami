"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-off-white py-16 md:py-24 px-6 md:px-12 border-t border-[#1A1A1A]/10"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12"
        >
          <div>
            <h3 className="font-serif text-xl mb-4 text-[#1A1A1A] tracking-wider">
              CONTACT
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-[#1A1A1A]/60" />
                <a
                  href="mailto:info@mma-design.jp"
                  className="font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
                >
                  info@mma-design.jp
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-[#1A1A1A]/60" />
                <a
                  href="tel:+81-3-1234-5678"
                  className="font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
                >
                  +81-3-1234-5678
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-[#1A1A1A]/60" />
                <p className="font-sans text-sm text-[#1A1A1A]/70">
                  東京都渋谷区...
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-[#1A1A1A] tracking-wider">
              COMPANY
            </h3>
            <div className="space-y-2">
              <p className="font-sans text-sm text-[#1A1A1A]/70">
                株式会社 松浪光倫建築計画室
              </p>
              <p className="font-sans text-sm text-[#1A1A1A]/70">
                MMA DESIGN
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-[#1A1A1A] tracking-wider">
              FOLLOW
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-[#1A1A1A]/10 pt-8 text-center"
        >
          <p className="font-sans text-xs text-[#1A1A1A]/50 tracking-wider">
            © {currentYear} MMA DESIGN. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
