"use client";

import { motion } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";
import { finalCtaContent, finalCtaContentEN, siteConfig } from "@/data/content";
import { staggerContainer, fadeUpSlow, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/language";

export default function FinalCTA() {
  const { lang } = useLanguage();
  const content = lang === "en" ? finalCtaContentEN : finalCtaContent;

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 glow-gold pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUpSlow}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#F5F5F5] leading-none mb-6"
          >
            {content.headline.split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "gradient-text-gold" : ""}`}>
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeUpSlow}
            className="text-lg text-[#A0A0A0] max-w-xl mx-auto mb-10"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUpSlow}
            className="flex flex-col items-center gap-4"
          >
            <GoldButton size="lg" href={siteConfig.paymentLink} external>
              {content.cta}
            </GoldButton>
            <p className="text-xs text-[#555555]">{content.ctaSub}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
