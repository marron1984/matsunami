"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const services = [
  "建築の企画、設計及び監理",
  "耐震改修に関する診断、設計及び監理",
  "適法化改修に関する設計及び監理",
  "ZEH、ZEBに関する設計及び監理",
  "既存建築物の再活用コンサルティング",
  "歴史的建築物の保存及び再生コンサルティング",
  "ドローンによる赤外線調査",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen bg-off-white py-24 md:py-32 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-5xl">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-wider mb-4">
            ABOUT
          </h2>
          <div className="w-24 h-px bg-[#1A1A1A]/20 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* 左側: 資格情報 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] mb-6 tracking-wider">
                資格
              </h3>
              <div className="space-y-4">
                <p className="font-sans text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed">
                  一級建築士事務所
                </p>
                <p className="font-sans text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed">
                  大阪府知事登録 第26225号
                </p>
                <p className="font-sans text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed">
                  設立 2005年
                </p>
              </div>
            </div>
          </motion.div>

          {/* 右側: 業務内容 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] mb-6 tracking-wider">
                業務内容
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex items-start"
                  >
                    <span className="font-sans text-sm md:text-base text-[#1A1A1A]/70 mr-3 mt-1">
                      ·
                    </span>
                    <span className="font-sans text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed flex-1">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 会社名 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 md:mt-32 pt-12 border-t border-[#1A1A1A]/10"
        >
          <p className="font-serif text-lg md:text-xl text-[#1A1A1A] tracking-wider">
            株式会社 松浪光倫建築計画室
          </p>
          <p className="font-sans text-sm md:text-base text-[#1A1A1A]/60 mt-2 tracking-wider">
            MMA DESIGN
          </p>
        </motion.div>
      </div>
    </section>
  );
}
