"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
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
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wider">
            MMA DESIGN
          </h1>
          <p className="font-sans text-sm md:text-base text-white/90 tracking-widest uppercase">
            建築が語る静寂
          </p>
        </motion.div>
      </div>

      {/* インジケーター */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 transition-all duration-300 ${
              currentImage === index ? "w-8 bg-white" : "w-1 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
