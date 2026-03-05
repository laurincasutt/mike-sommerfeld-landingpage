"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import { siteConfig } from "@/data/content";

const navLinks = [
  { label: "Vorteile", href: "#benefits" },
  { label: "So funktionierts", href: "#how-it-works" },
  { label: "Über Mike", href: "#about" },
  { label: "Preise", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#D4A017]/25 shadow-[0_0_30px_rgba(212,160,23,0.12)]"
            : "bg-[#0A0A0A]/60 backdrop-blur-md border border-white/8"
        } rounded-2xl`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/beres-coaching-logo.jpg"
              alt="Beres Coaching"
              width={120}
              height={40}
              className="object-contain h-9 w-auto"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <GoldButton size="sm" href={siteConfig.paymentLink} external>
              Jetzt starten
            </GoldButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src="/beres-coaching-logo.jpg"
              alt="Beres Coaching"
              width={100}
              height={32}
              className="object-contain h-8 w-auto mb-4"
            />
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-display font-black text-3xl text-[#F5F5F5] hover:text-[#D4A017] transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <GoldButton size="lg" href={siteConfig.paymentLink} external className="mt-4">
              Jetzt starten
            </GoldButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
