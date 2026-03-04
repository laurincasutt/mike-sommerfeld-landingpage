import { footerContent, siteConfig } from "@/data/content";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-black text-2xl text-[#D4A017] uppercase">Mike</span>
              <span className="font-display font-black text-2xl text-[#F5F5F5] uppercase">Coaching</span>
            </div>
            <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-xs">
              {footerContent.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A0] hover:text-[#D4A017] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#A0A0A0] hover:text-[#D4A017] transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A0A0A0] hover:text-[#D4A017] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-widest mb-5">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {footerContent.legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A0A0A0] hover:text-[#D4A017] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[#555555]">{footerContent.location}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1A1A1A]">
          <p className="text-xs text-[#555555] text-center">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
