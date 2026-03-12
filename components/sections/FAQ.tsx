"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { faqContent, faqContentEN } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/language";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const content = lang === "en" ? faqContentEN : faqContent;

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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

        {/* Accordion */}
        <div className="space-y-3">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#D4A017]/40 bg-[#1A1A1A]"
                    : "border-[#2A2A2A] bg-[#111111]"
                }`}
              >
                {isOpen && (
                  <div className="h-full w-1 absolute left-0 top-0 bg-[#D4A017] rounded-l-2xl" />
                )}
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#F5F5F5] text-base">{item.question}</span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-[#D4A017]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#D4A017]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
