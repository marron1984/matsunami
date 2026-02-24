"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

const works: Work[] = [
  {
    id: 1,
    title: "静寂の住居",
    category: "住宅",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "光のアトリエ",
    category: "アトリエ",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "都市の静けさ",
    category: "商業施設",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    aspectRatio: "square",
  },
  {
    id: 4,
    title: "自然との対話",
    category: "住宅",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 5,
    title: "時間の流れ",
    category: "公共施設",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 6,
    title: "素材の本質",
    category: "住宅",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    aspectRatio: "portrait",
  },
];

const getAspectRatioClass = (aspectRatio: string) => {
  switch (aspectRatio) {
    case "portrait":
      return "aspect-[3/4]";
    case "landscape":
      return "aspect-[4/3]";
    case "square":
      return "aspect-square";
    default:
      return "aspect-[3/4]";
  }
};

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="works"
      ref={ref}
      className="min-h-screen bg-dark-warm py-24 md:py-32 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-off-white tracking-wider mb-4">
            SELECTED WORKS
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-24 h-px bg-accent-warm/40 mt-6 origin-left"
          />
        </motion.div>

        {/* マソンリーグリッド */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 md:gap-7">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.95 }
              }
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 25,
                delay: index * 0.12,
              }}
              className="break-inside-avoid mb-5 md:mb-7 group cursor-pointer"
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-soft">
                <motion.div
                  animate={{
                    scale: hoveredId === work.id ? 1.04 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                  }}
                  className={getAspectRatioClass(work.aspectRatio)}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    quality={85}
                  />

                  {/* ホバーオーバーレイ - 下からグラデーション */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === work.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 bg-gradient-to-t from-dark-warm/70 via-dark-warm/20 to-transparent flex items-end justify-start p-6 md:p-8"
                  >
                    <div>
                      {/* カテゴリ */}
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={
                          hoveredId === work.id
                            ? { y: 0, opacity: 1 }
                            : { y: 10, opacity: 0 }
                        }
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="font-sans text-[10px] text-accent-warm uppercase tracking-[0.3em] mb-2"
                      >
                        {work.category}
                      </motion.p>
                      {/* タイトル */}
                      <motion.h3
                        initial={{ y: 15, opacity: 0 }}
                        animate={
                          hoveredId === work.id
                            ? { y: 0, opacity: 1 }
                            : { y: 15, opacity: 0 }
                        }
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="font-serif text-xl md:text-2xl text-white"
                      >
                        {work.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
