"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionBadge from "@/components/ui/SectionBadge";
import GoldButton from "@/components/ui/GoldButton";
import { trafoContent, siteConfig } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Transformations() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Split images into two rows for the infinite marquee effect
  const row1 = trafoContent.images.slice(0, 9);
  const row2 = trafoContent.images.slice(9, 17);

  return (
    <section id="transformations" className="py-24 lg:py-32 bg-[#111111] overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center mb-5">
            <SectionBadge>{trafoContent.eyebrow}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-none mb-5"
          >
            {trafoContent.headline.split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 0 ? "gradient-text-gold" : ""}`}>
                {line}
              </span>
            ))}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#A0A0A0] max-w-xl mx-auto">
            {trafoContent.subheadline}
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee row 1 – scrolls left */}
      <div className="relative mb-4">
        <div className="flex gap-4 animate-marquee-left w-max">
          {[...row1, ...row1].map((img, i) => (
            <div
              key={i}
              className="relative w-52 sm:w-64 aspect-square rounded-xl overflow-hidden shrink-0 border border-[#2A2A2A]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 – scrolls right */}
      <div className="relative mb-14">
        <div className="flex gap-4 animate-marquee-right w-max">
          {[...row2, ...row2].map((img, i) => (
            <div
              key={i}
              className="relative w-52 sm:w-64 aspect-square rounded-xl overflow-hidden shrink-0 border border-[#2A2A2A]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA under the marquee */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#A0A0A0] mb-6 text-sm">
          Deine Transformation beginnt mit einem Klick.
        </p>
        <GoldButton href={siteConfig.paymentLink} size="lg" external>
          Jetzt Teil von #TEAMBADASS werden
        </GoldButton>
      </motion.div>
    </section>
  );
}
