import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Willkommen – Coaching erfolgreich gestartet",
  robots: { index: false },
};

export default function DankePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* Gold checkmark */}
        <div className="w-24 h-24 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display font-black text-5xl text-[#F5F5F5] mb-4">
          Willkommen an Bord!
        </h1>
        <p className="text-lg text-[#A0A0A0] leading-relaxed mb-8">
          Deine Anmeldung war erfolgreich. Mike meldet sich innerhalb von{" "}
          <strong className="text-[#D4A017]">24 Stunden</strong> per WhatsApp bei dir.
          Deine Transformation beginnt jetzt.
        </p>

        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-left mb-8">
          <h2 className="font-display font-bold text-lg text-[#F5F5F5] mb-4">
            Was passiert als nächstes?
          </h2>
          <ol className="space-y-3">
            {[
              "Du erhältst eine Bestätigungs-E-Mail von Stripe.",
              "Mike nimmt innerhalb von 24 Stunden Kontakt via WhatsApp auf.",
              "Du füllst das kurze Onboarding-Formular aus.",
              "Du erhältst deinen persönlichen Trainings- und Ernährungsplan.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/30 flex items-center justify-center text-xs font-bold text-[#D4A017] shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#A0A0A0]">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/"
          className="text-sm text-[#555555] hover:text-[#D4A017] transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
