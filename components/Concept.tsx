"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const conceptText = `建築とは、空間に静寂を刻む行為である。
私たちは、過剰な装飾を排し、
本質的な美しさを追求する。
光と影が織りなす調和、
素材が持つ本来の質感、
そして人々がそこに息づく時間。
それらすべてが、建築という名の詩となる。
静寂の中に宿る力強さ、
最小限の中に込められた最大限の表現。
それが、私たちの建築哲学である。`;

  return (
    <section
      id="concept"
      ref={ref}
      className="min-h-screen bg-[#1A1A1A] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-off-white tracking-wider mb-4">
            CONCEPT
          </h2>
          <div className="w-24 h-px bg-off-white/20 mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24"
        >
          {/* 縦書きテキスト */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-shrink-0 hidden md:block"
          >
            <div
              className="font-serif text-xl md:text-2xl leading-relaxed text-off-white/90 h-[600px]"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
                letterSpacing: "0.15em",
              }}
            >
              {conceptText.split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line}
                  {index < conceptText.split("\n").length - 1 && (
                    <span className="inline-block my-6 text-off-white/40">｜</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 横書きの補足テキスト（モバイル用） */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:hidden w-full"
          >
            <p className="font-sans text-sm leading-relaxed text-off-white/80">
              {conceptText}
            </p>
          </motion.div>

          {/* デスクトップ用の補足情報 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block flex-1 max-w-lg"
          >
            <div className="space-y-8">
              <p className="font-sans text-base leading-relaxed text-off-white/70">
                私たちは、建築を通じて空間に静寂を刻みます。
                過剰な装飾を排し、本質的な美しさを追求することで、
                光と影が織りなす調和、素材が持つ本来の質感、
                そして人々がそこに息づく時間を大切にしています。
              </p>
              <div className="w-16 h-px bg-off-white/20" />
              <p className="font-sans text-base leading-relaxed text-off-white/70">
                静寂の中に宿る力強さ、最小限の中に込められた最大限の表現。
                それが、私たちの建築哲学です。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
