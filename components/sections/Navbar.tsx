"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import { siteConfig, navLinksDE, navLinksEN } from "@/data/content";
import { useLanguage } from "@/lib/language";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { lang, setLang } = useLanguage();

  const navLinks = lang === "en" ? navLinksEN : navLinksDE;
  const ctaLabel = lang === "en" ? "Start now" : "Jetzt starten";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
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
          <a href="/" className="flex items-center">
            <Image
              src="/beres-coaching-logo.jpg"
              alt="Beres Coaching"
              width={150}
              height={50}
              className="object-contain h-12 w-auto"
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

          {/* Desktop right: language toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language toggle */}
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <button
                onClick={() => setLang("de")}
                className={`transition-colors duration-200 cursor-pointer ${
                  lang === "de" ? "text-[#D4A017]" : "text-[#A0A0A0] hover:text-[#F5F5F5]"
                }`}
              >
                DE
              </button>
              <span className="text-[#3A3A3A]">|</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors duration-200 cursor-pointer ${
                  lang === "en" ? "text-[#D4A017]" : "text-[#A0A0A0] hover:text-[#F5F5F5]"
                }`}
              >
                EN
              </button>
            </div>
            <GoldButton size="sm" href={siteConfig.paymentLink} external>
              {ctaLabel}
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
              {ctaLabel}
            </GoldButton>
            {/* Mobile language toggle */}
            <div className="flex items-center gap-2 text-sm font-medium mt-2">
              <button
                onClick={() => setLang("de")}
                className={`transition-colors duration-200 cursor-pointer ${
                  lang === "de" ? "text-[#D4A017]" : "text-[#A0A0A0]"
                }`}
              >
                DE
              </button>
              <span className="text-[#3A3A3A]">|</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors duration-200 cursor-pointer ${
                  lang === "en" ? "text-[#D4A017]" : "text-[#A0A0A0]"
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
