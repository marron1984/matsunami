"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const conceptLines = [
  "建築とは、空間に安らぎを刻む行為である。",
  "私たちは、過剰な装飾を排し、",
  "本質的な美しさを追求する。",
  "光と影が織りなす調和、",
  "素材が持つ本来の質感、",
  "そして人々がそこに息づく時間。",
  "それらすべてが、建築という名の詩となる。",
  "暮らしの中に宿る穏やかさ、",
  "最小限の中に込められた最大限の表現。",
  "それが、私たちの建築哲学である。",
];

const springTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 25,
  mass: 1,
};

export default function Concept() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const linesRef = useRef(null);
  const sideRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const linesInView = useInView(linesRef, { once: true, amount: 0.2 });
  const sideInView = useInView(sideRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="relative min-h-screen bg-dark-warm py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* パララックス背景パターン */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-warm blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-accent-warm blur-[100px]" />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* タイトル */}
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={springTransition}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-off-white tracking-wider mb-4">
              CONCEPT
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={titleInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-24 h-px bg-accent-warm/40 mt-6 origin-left"
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">
          {/* 行ごとのテキストリビール */}
          <div ref={linesRef} className="flex-1 max-w-2xl">
            <div className="space-y-0">
              {conceptLines.map((line, index) => (
                <div key={index} className="overflow-hidden py-1">
                  <motion.p
                    initial={{ y: "100%", opacity: 0 }}
                    animate={
                      linesInView
                        ? { y: "0%", opacity: 1 }
                        : { y: "100%", opacity: 0 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                      delay: index * 0.1,
                    }}
                    className="font-serif text-lg md:text-2xl lg:text-[1.7rem] leading-[2.2] md:leading-[2.4] text-off-white/85 tracking-wider"
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          {/* サイド補足 */}
          <div ref={sideRef} className="hidden md:block flex-shrink-0 max-w-sm">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={sideInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ ...springTransition, delay: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                animate={sideInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-px h-16 bg-gradient-to-b from-accent-warm/40 to-transparent origin-top"
              />
              <p className="font-sans text-base leading-[2] text-off-white/50">
                私たちは、建築を通じて空間に安らぎを刻みます。
                過剰な装飾を排し、本質的な美しさを追求することで、
                光と影が織りなす調和、素材が持つ本来の質感、
                そして人々がそこに息づく時間を大切にしています。
              </p>
              <div className="w-12 h-px bg-accent-warm/20" />
              <p className="font-sans text-base leading-[2] text-off-white/50">
                暮らしの中に宿る穏やかさ、最小限の中に込められた最大限の表現。
                それが、私たちの建築哲学です。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
