"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 25,
  mass: 0.8,
};

const contactInfo = [
  {
    icon: Mail,
    label: "info@mma-design.com",
    href: "mailto:info@mma-design.com",
  },
  {
    icon: Phone,
    label: "06-4307-4682",
    href: "tel:06-4307-4682",
  },
  {
    icon: MapPin,
    label: "〒530-0047　大阪市北区西天満4丁目9-2-413",
    href: undefined,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-off-white py-16 md:py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        {/* セクションディバイダ */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-divider mb-16 origin-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* 連絡先 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ ...springTransition, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl mb-6 text-dark-warm tracking-wider">
              CONTACT
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ ...springTransition, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent-warm/10 group-hover:bg-accent-warm/20 transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 text-accent-warm" />
                    </div>
                    <span className="font-sans text-sm text-dark-warm/70 hover:text-dark-warm transition-colors duration-300 pt-1.5">
                      {item.label}
                    </span>
                  </motion.div>
                );
                return item.href ? (
                  <a key={index} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* 会社情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ ...springTransition, delay: 0.3 }}
          >
            <h3 className="font-serif text-xl mb-6 text-dark-warm tracking-wider">
              COMPANY
            </h3>
            <div className="space-y-2">
              <p className="font-sans text-sm text-dark-warm/70">
                株式会社 松浪光倫建築計画室
              </p>
              <p className="font-sans text-sm text-dark-warm/50">
                MMA DESIGN
              </p>
            </div>
          </motion.div>

          {/* SNS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ ...springTransition, delay: 0.4 }}
          >
            <h3 className="font-serif text-xl mb-6 text-dark-warm tracking-wider">
              FOLLOW
            </h3>
            <div className="space-y-3">
              {["Instagram", "Twitter"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ ...springTransition, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="block font-sans text-sm text-dark-warm/70 hover:text-accent-warm transition-colors duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* コピーライト */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="section-divider mb-8" />
          <p className="font-sans text-xs text-dark-warm/40 tracking-wider text-center">
            &copy; {currentYear} MMA DESIGN. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
