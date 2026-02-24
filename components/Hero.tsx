"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80",
];

const subtitles = [
  "暮らしに寄り添う建築",
  "光と素材の調和",
  "心が安らぐ空間",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* パララックス画像レイヤー */}
      <motion.div className="absolute inset-0" style={{ y: parallaxY, scale }}>
        <AnimatePresence mode="sync">
          {images.map((src, index) => (
            <motion.div
              key={`${src}-${index}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImage === index ? 1 : 0,
              }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`Architecture ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                onLoad={() => index === 0 && setIsLoaded(true)}
                quality={90}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 暖かみのあるグラデーションオーバーレイ */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-dark-warm/60 via-dark-warm/15 to-transparent"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-warm/20 to-transparent" />

      {/* テキストコンテンツ */}
      <motion.div
        className="absolute inset-0 flex items-end justify-start p-8 md:p-16 lg:p-24 z-10"
        style={{ y: textY }}
      >
        <div className="max-w-3xl">
          {/* アクセントライン */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isLoaded ? 1 : 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-20 h-px bg-accent-warm/80 mb-8 origin-left"
          />

          {/* メインタイトル - 文字ごとのアニメーション */}
          <div className="mb-4 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: isLoaded ? "0%" : "100%" }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-[0.05em] leading-[1.1]"
            >
              MMA DESIGN
            </motion.h1>
          </div>

          {/* サブタイトル - スライド切替 */}
          <div className="h-8 overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentImage}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="font-serif text-sm md:text-base text-white/70 tracking-[0.3em]"
              >
                {subtitles[currentImage]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* スクロール誘導 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center space-x-3 mt-12"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-px h-8 bg-gradient-to-b from-accent-warm/60 to-transparent"
            />
            <span className="font-sans text-[10px] text-white/40 tracking-[0.3em] uppercase">
              Scroll
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* プログレスインジケーター */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-10 flex flex-col space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-1 transition-all duration-700 rounded-full ${
                currentImage === index
                  ? "h-10 bg-accent-warm"
                  : "h-3 bg-white/30 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
