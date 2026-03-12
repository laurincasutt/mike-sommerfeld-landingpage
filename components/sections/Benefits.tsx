"use client";

import { motion } from "framer-motion";
import { Dumbbell, Utensils, MessageCircle, Camera, Target, TrendingUp } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { benefitsContent, benefitsContentEN } from "@/data/content";
import { fadeUpVariants, staggerContainer, staggerFast, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/language";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Utensils,
  MessageCircle,
  Camera,
  Target,
  TrendingUp,
};

export default function Benefits() {
  const { lang } = useLanguage();
  const content = lang === "en" ? benefitsContentEN : benefitsContent;

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-[#0A0A0A] bg-dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center mb-5">
            <SectionBadge>{content.eyebrow}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-none"
          >
            {content.headline.split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "gradient-text-gold" : ""}`}>
                {line}
              </span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {content.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Dumbbell;
            return (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="group relative p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#D4A017]/40 transition-colors duration-300 overflow-hidden"
              >
                {/* Bottom gold border animation */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#D4A017] to-[#E8BA3A] group-hover:w-full transition-all duration-500" />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,160,23,0.06) 0%, transparent 70%)" }} />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#F5F5F5] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
