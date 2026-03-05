"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import GoldButton from "@/components/ui/GoldButton";
import { aboutContent, siteConfig } from "@/data/content";
import { staggerContainer, fadeUpVariants, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";

export default function AboutMike() {
  const [selectedPhoto, setSelectedPhoto] = useState("/mike-about.png");

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Photo column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {/* Main photo */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl opacity-25" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(212,160,23,0.5) 0%, transparent 70%)" }} />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#D4A017]/20">
                <Image
                  src={selectedPhoto}
                  alt="Mike Sommerfeld"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
                {/* Badge overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-[#D4A017]/30 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
                    <span className="text-xs font-semibold text-[#E8BA3A] uppercase tracking-widest">Olympia 2025 · Las Vegas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage photo grid */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {aboutContent.stagePhotos.slice(0, 6).map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className={`relative aspect-square rounded-xl overflow-hidden border transition-colors duration-300 cursor-pointer ${
                    selectedPhoto === photo.src
                      ? "border-[#D4A017] ring-2 ring-[#D4A017]/40"
                      : "border-[#2A2A2A] hover:border-[#D4A017]/40"
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => setSelectedPhoto(photo.src)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="120px"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUpVariants} className="mb-5">
              <SectionBadge>{aboutContent.eyebrow}</SectionBadge>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="font-display font-black text-4xl sm:text-5xl text-[#F5F5F5] leading-none mb-2"
            >
              {aboutContent.headline}
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#D4A017] font-semibold text-base mb-8"
            >
              {aboutContent.subheadline}
            </motion.p>

            {aboutContent.bio.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUpVariants}
                className="text-[#A0A0A0] leading-relaxed mb-5"
              >
                {para}
              </motion.p>
            ))}

            {/* Achievements */}
            <motion.ul variants={fadeUpVariants} className="space-y-3 mt-8 mb-10">
              {aboutContent.achievements.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Trophy className="w-4 h-4 text-[#D4A017] shrink-0" />
                  <span className="text-sm text-[#F5F5F5]">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUpVariants}>
              <GoldButton href={siteConfig.paymentLink} external>
                Jetzt starten
              </GoldButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
