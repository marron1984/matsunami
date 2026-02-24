"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { title: "建築の企画、設計及び監理", icon: "01" },
  { title: "耐震改修に関する診断、設計及び監理", icon: "02" },
  { title: "適法化改修に関する設計及び監理", icon: "03" },
  { title: "ZEH、ZEBに関する設計及び監理", icon: "04" },
  { title: "既存建築物の再活用コンサルティング", icon: "05" },
  { title: "歴史的建築物の保存及び再生コンサルティング", icon: "06" },
  { title: "ドローンによる赤外線調査", icon: "07" },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 25,
  mass: 0.8,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen bg-off-white py-24 md:py-32 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={springTransition}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-warm tracking-wider mb-4">
            ABOUT
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-24 h-px bg-accent-warm/50 mt-6 origin-left"
          />
        </motion.div>

        {/* 資格情報カード */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="bg-warm-beige/50 rounded-softer p-8 md:p-12 mb-16 md:mb-20 shadow-warm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <p className="font-sans text-xs text-accent-warm tracking-[0.2em] uppercase mb-2">
                License
              </p>
              <p className="font-serif text-lg md:text-xl text-dark-warm">
                一級建築士事務所
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-sans text-xs text-accent-warm tracking-[0.2em] uppercase mb-2">
                Registration
              </p>
              <p className="font-serif text-lg md:text-xl text-dark-warm">
                大阪府知事登録 第26225号
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-sans text-xs text-accent-warm tracking-[0.2em] uppercase mb-2">
                Established
              </p>
              <p className="font-serif text-lg md:text-xl text-dark-warm">
                2005年
              </p>
            </div>
          </div>
        </motion.div>

        {/* 業務内容 */}
        <div ref={servicesRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={springTransition}
            className="font-serif text-xl md:text-2xl text-dark-warm mb-10 tracking-wider"
          >
            業務内容
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  servicesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 25,
                  delay: 0.1 + index * 0.08,
                }}
                whileHover={{
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="group flex items-center space-x-4 p-4 rounded-soft bg-white/60 hover:bg-white hover:shadow-warm transition-all duration-300 cursor-default"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent-warm/10 text-accent-warm font-sans text-xs tracking-wider group-hover:bg-accent-warm/20 transition-colors duration-300">
                  {service.icon}
                </span>
                <span className="font-sans text-sm md:text-base text-dark-warm/80 leading-relaxed">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 会社名 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0.8 }}
          className="mt-20 md:mt-32 pt-12"
        >
          <div className="section-divider mb-12" />
          <motion.p
            className="font-serif text-lg md:text-xl text-dark-warm tracking-wider"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={springTransition}
          >
            株式会社 松浪光倫建築計画室
          </motion.p>
          <motion.p
            className="font-sans text-sm md:text-base text-dark-warm/50 mt-2 tracking-wider"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.1 }}
          >
            MMA DESIGN
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
