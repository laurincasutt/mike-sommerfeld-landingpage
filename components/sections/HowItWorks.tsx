"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import { howItWorksContent, howItWorksContentEN } from "@/data/content";
import { fadeUpVariants, staggerContainer, staggerFast, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/language";

export default function HowItWorks() {
  const { lang } = useLanguage();
  const content = lang === "en" ? howItWorksContentEN : howItWorksContent;

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
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

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-10"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* Connecting dashed line (desktop only) – background */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px border-t-2 border-dashed border-[#2A2A2A] z-0" />

          {/* Animated gold progress line */}
          <motion.div
            className="hidden lg:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-[#D4A017] origin-left z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />

          {content.steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="relative flex flex-col items-center text-center z-10"
            >
              {/* Number watermark */}
              <div className="relative mb-8">
                <span className="font-display font-black text-8xl text-[#1A1A1A] select-none leading-none">
                  {step.number}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center shadow-[0_0_30px_rgba(212,160,23,0.4)]">
                    <span className="font-display font-black text-xl text-[#0A0A0A]">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-[#F5F5F5] mb-3">{step.title}</h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
