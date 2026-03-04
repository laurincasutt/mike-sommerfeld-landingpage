"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { proofBarStats } from "@/data/content";
import { fadeUpVariants, staggerFast, viewportOnce } from "@/lib/animations";

export default function ProofBar() {
  return (
    <section className="bg-[#111111] border-y border-[#2A2A2A] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {proofBarStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUpVariants} className="flex flex-col items-center gap-2">
              <div className="font-display font-black text-4xl sm:text-5xl text-[#D4A017]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-[#A0A0A0] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
