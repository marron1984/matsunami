"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="works"
      ref={ref}
      className="min-h-screen bg-[#1A1A1A] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-off-white tracking-wider mb-4">
            SELECTED WORKS
          </h2>
          <div className="w-24 h-px bg-off-white/20 mt-6" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-4 md:mb-6 group cursor-pointer"
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-off-white/5">
                <motion.div
                  animate={{
                    scale: hoveredId === work.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={getAspectRatioClass(work.aspectRatio)}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === work.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-end justify-start p-6"
                  >
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                        {work.title}
                      </h3>
                      <p className="font-sans text-sm text-white/80 uppercase tracking-wider">
                        {work.category}
                      </p>
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
