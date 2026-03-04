"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";
import { heroContent, siteConfig } from "@/data/content";
import { staggerContainer, fadeUpSlow } from "@/lib/animations";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/mike-hero.png"
          alt="Mike Sommerfeld – Arnold Classic Sieger"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28"
        style={{ opacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUpSlow} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#E8BA3A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
              {heroContent.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpSlow}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-6"
          >
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "gradient-text-gold" : "text-[#F5F5F5]"}`}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpSlow}
            className="text-lg sm:text-xl text-[#A0A0A0] leading-relaxed mb-10 max-w-xl"
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUpSlow} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <GoldButton size="lg" href={siteConfig.paymentLink} external>
              {heroContent.cta}
            </GoldButton>
            <p className="text-xs text-[#555555]">{heroContent.ctaSub}</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#555555]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#D4A017]/60" />
      </motion.div>
    </section>
  );
}
