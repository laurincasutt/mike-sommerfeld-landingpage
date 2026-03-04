"use client";

import { motion } from "framer-motion";
import { Check, Shield, Lock, CreditCard, Globe } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import GoldButton from "@/components/ui/GoldButton";
import { pricingContent, siteConfig } from "@/data/content";
import { fadeUpVariants, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";

const trustIconMap: Record<string, React.ElementType> = {
  "Monatlich kündbar": Globe,
  "SSL-verschlüsselt": Lock,
  "Stripe-gesichert": CreditCard,
  "DSGVO-konform": Shield,
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center mb-5">
            <SectionBadge>{pricingContent.eyebrow}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-none"
          >
            {pricingContent.headline}
          </motion.h2>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          className="max-w-xl mx-auto"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="gold-pulse rounded-3xl border border-[#D4A017]/30 bg-[#1A1A1A] p-8 sm:p-10">
            {/* Price */}
            <div className="text-center mb-10">
              <div className="flex items-end justify-center gap-2">
                <span className="font-display font-black text-7xl sm:text-8xl gradient-text-gold leading-none">
                  {pricingContent.price}
                </span>
                <div className="mb-3">
                  <span className="text-2xl font-display font-black text-[#D4A017]">{pricingContent.currency}</span>
                  <p className="text-sm text-[#A0A0A0]">{pricingContent.period}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {pricingContent.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#D4A017]" />
                  </div>
                  <span className="text-sm text-[#F5F5F5]">{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3">
              <GoldButton size="lg" href={siteConfig.paymentLink} external className="w-full justify-center">
                {pricingContent.cta}
              </GoldButton>
              <p className="text-xs text-[#555555]">{pricingContent.ctaSub}</p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mt-8 pt-8 border-t border-[#2A2A2A]">
              {pricingContent.trustBadges.map((badge) => {
                const Icon = trustIconMap[badge] ?? Shield;
                return (
                  <div key={badge} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#D4A017] shrink-0" />
                    <span className="text-xs text-[#A0A0A0]">{badge}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-[#555555] text-center">{pricingContent.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
