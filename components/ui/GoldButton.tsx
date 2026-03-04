"use client";

import { motion } from "framer-motion";

interface GoldButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

export default function GoldButton({
  children,
  href,
  className = "",
  size = "md",
  external = false,
}: GoldButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        inline-flex items-center justify-center gap-2
        font-display font-black uppercase tracking-wide rounded-full
        bg-gradient-to-r from-[#D4A017] to-[#E8BA3A]
        text-[#0A0A0A] cursor-pointer select-none
        shadow-[0_0_20px_rgba(212,160,23,0.3)]
        ${sizeClasses[size]}
        ${className}
      `}
      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212,160,23,0.55)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}
