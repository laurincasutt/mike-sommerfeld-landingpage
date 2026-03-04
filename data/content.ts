export const siteConfig = {
  name: "Mike Sommerfeld Coaching",
  tagline: "Dein persönlicher Bodybuilding-Coach – direkt auf WhatsApp",
  description:
    "Professionelles Bodybuilding-Coaching per WhatsApp. Individueller Trainings- und Ernährungsplan, tägliche Check-ins und direkte Antworten von Mike Sommerfeld. Für nur 149 CHF/Monat.",
  price: "149",
  currency: "CHF",
  paymentLink: "https://buy.stripe.com/9B68wQ3uIc1j4oc7k07kc0q",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mike-coaching.ch",
  instagram: "https://www.instagram.com/mikethebadass",
  email: "badasscontract@gmx.com",
};

export const heroContent = {
  eyebrow: "WhatsApp Bodybuilding Coaching",
  headline: "Endlich der Körper,\nden du verdient hast.",
  subheadline:
    "Kein generischer Online-Plan. Kein leerer Support. Direkte Betreuung von Mike – täglich, persönlich, auf WhatsApp.",
  cta: "Jetzt starten – 149 CHF/Monat",
  ctaSub: "Monatlich kündbar · Keine Bindung · Sofortiger Zugang",
};

export const proofBarStats = [
  { value: 150, suffix: "+", label: "Zufriedene Athleten" },
  { value: 20, suffix: "+", label: "Jahre Erfahrung" },
  { value: 98, suffix: "%", label: "Weiterempfehlung" },
  { value: 3, suffix: "×", label: "Arnold Classic Sieger" },
];

export const benefitsContent = {
  eyebrow: "Was du bekommst",
  headline: "Alles, was du für deine\nTransformation brauchst.",
  items: [
    {
      icon: "Dumbbell",
      title: "Individueller Trainingsplan",
      description:
        "Kein Copy-Paste. Dein Plan basiert auf deinem Körper, deinem Level und deinen Zielen – und wird laufend angepasst.",
    },
    {
      icon: "Utensils",
      title: "Persönlicher Ernährungsplan",
      description:
        "Mike erstellt dir einen Ernährungsplan, der zu deinem Alltag passt. Realistisch, umsetzbar, effektiv.",
    },
    {
      icon: "MessageCircle",
      title: "Täglicher WhatsApp-Support",
      description:
        "Direkte Antworten von Mike – kein Ticket-System, keine KI. Echte Betreuung in wenigen Stunden.",
    },
    {
      icon: "Camera",
      title: "Wöchentliche Check-ins",
      description:
        "Schick deine Fortschrittsfotos. Mike analysiert, adjustiert und gibt dir konkretes Feedback jede Woche.",
    },
    {
      icon: "Target",
      title: "Klare Zieldefinition",
      description:
        "Aufbau, Definition oder Wettkampfvorbereitung – Mike kennt den direkten Weg und geht ihn mit dir.",
    },
    {
      icon: "TrendingUp",
      title: "Kontinuierliche Anpassung",
      description:
        "Dein Körper gewöhnt sich an alles. Mike passt deinen Plan proaktiv an – damit du immer Fortschritt machst.",
    },
  ],
};

export const howItWorksContent = {
  eyebrow: "So einfach geht's",
  headline: "In 3 Schritten zur\nprofessionellen Betreuung.",
  steps: [
    {
      number: "01",
      title: "Jetzt anmelden",
      description:
        "Wähle dein Abo und schliesse die Zahlung sicher über Stripe ab. Dauert weniger als 2 Minuten.",
    },
    {
      number: "02",
      title: "Onboarding per WhatsApp",
      description:
        "Mike meldet sich direkt bei dir. Du füllst ein kurzes Fragebogen aus – Ziele, Level, Alltag. Alles über WhatsApp.",
    },
    {
      number: "03",
      title: "Transformation starten",
      description:
        "Du bekommst deinen persönlichen Plan. Ab jetzt hast du Mike immer dabei – bereit, dich voranzubringen.",
    },
  ],
};

export const aboutContent = {
  eyebrow: "Dein Coach",
  headline: "Mike Sommerfeld",
  subheadline: "Pro Bodybuilder · Arnold Classic Sieger · Team Badass",
  bio: [
    "Ich trainiere seit über 20 Jahren und habe in dieser Zeit nicht nur meinen eigenen Körper transformiert – ich habe über 150 Athleten dabei geholfen, ihre Ziele zu erreichen.",
    "Als mehrfacher Arnold Classic Sieger und Olympia-Teilnehmer weiss ich genau, was es braucht: konsequente Arbeit, smarte Ernährung und ein Coach, der wirklich für dich da ist.",
    "Mit meinem #TEAMBADASS WhatsApp-Coaching erhältst du echte, persönliche Betreuung – keine Algorithmen, keine generierten Pläne. Nur du, dein Ziel und ich.",
  ],
  achievements: [
    "Arnold Classic Sieger (mehrfach)",
    "Olympia 2025 Teilnehmer (Las Vegas)",
    "IFBB Pro Card Inhaber",
    "20+ Jahre Trainingserfahrung",
    "150+ betreute Athleten (#TEAMBADASS)",
    "Zertifizierter Ernährungsberater",
  ],
  // Stage photos for the gallery grid
  stagePhotos: [
    { src: "/mike-stage-1.png", alt: "Mike Sommerfeld – Arnold Classic" },
    { src: "/mike-stage-2.png", alt: "Mike Sommerfeld auf der Bühne" },
    { src: "/mike-stage-3.png", alt: "Mike Sommerfeld – Wettkampf" },
    { src: "/mike-stage-4.png", alt: "Mike Sommerfeld posing" },
    { src: "/mike-stage-5.png", alt: "Mike Sommerfeld – Olympia 2025" },
    { src: "/mike-stage-6.png", alt: "Mike Sommerfeld – Back pose" },
  ],
};

export const videoContent = {
  eyebrow: "Sieh selbst",
  headline: "Hör direkt von Mike.",
  description:
    "In diesen kurzen Videos erklärt Mike, wie sein Coaching funktioniert und welche Ergebnisse du erwarten kannst.",
};

export const trafoContent = {
  eyebrow: "#TEAMBADASS",
  headline: "Echte Resultate.\nEchte Athleten.",
  subheadline:
    "Über 150 Athleten haben mit Mike transformiert. Das sind ihre Ergebnisse – unbearbeitet, echt, inspirierend.",
  images: Array.from({ length: 17 }, (_, i) => ({
    src: `/trafos/trafo-${String(i + 1).padStart(2, "0")}.png`,
    alt: `#TEAMBADASS Transformation ${i + 1}`,
  })),
};

export const pricingContent = {
  eyebrow: "Investment",
  headline: "Ein Preis. Alles inklusive.",
  price: "149",
  currency: "CHF",
  period: "pro Monat",
  features: [
    "Individueller Trainingsplan (regelmässig aktualisiert)",
    "Persönlicher Ernährungsplan",
    "Täglicher WhatsApp-Support mit Mike",
    "Wöchentliche Check-ins & Feedback",
    "Profi-Wettkampfberatung auf Anfrage",
    "Anpassung bei Plateaus & Verletzungen",
    "Direkter Zugang zu Mike – kein Mittelsmann",
    "Monatlich kündbar – keine Mindestlaufzeit",
  ],
  cta: "Jetzt starten",
  ctaSub: "Sichere Zahlung über Stripe · Sofortiger Zugang",
  trustBadges: [
    "Monatlich kündbar",
    "SSL-verschlüsselt",
    "Stripe-gesichert",
    "DSGVO-konform",
  ],
  note: "Nach dem Kauf nimmt Mike innerhalb von 24 Stunden Kontakt via WhatsApp auf.",
};

export const faqContent = {
  eyebrow: "FAQ",
  headline: "Häufig gestellte\nFragen.",
  items: [
    {
      question: "Für wen ist dieses Coaching geeignet?",
      answer:
        "Das Coaching richtet sich an alle, die ernsthaft Muskeln aufbauen, Körperfett reduzieren oder sich auf einen Wettkampf vorbereiten möchten – egal ob Einsteiger oder Fortgeschrittene. Mike passt den Ansatz individuell an dein Level an.",
    },
    {
      question: "Wie läuft das Coaching über WhatsApp ab?",
      answer:
        "Nach dem Kauf erhältst du Mikes WhatsApp-Nummer. Du füllst ein kurzes Onboarding-Formular aus, und Mike erstellt deinen ersten Plan. Danach hast du direkten Draht zu ihm: Fragen, Fotos, Updates – alles über WhatsApp.",
    },
    {
      question: "Wie schnell antwortet Mike?",
      answer:
        "Mike antwortet in der Regel innerhalb von wenigen Stunden. Du wirst nie tagelang auf eine Antwort warten müssen.",
    },
    {
      question: "Kann ich monatlich kündigen?",
      answer:
        "Ja. Das Abo ist monatlich kündbar – ohne Mindestlaufzeit oder versteckte Kosten. Du kannst jederzeit über dein Stripe-Kundenportal kündigen.",
    },
    {
      question: "Was passiert nach dem Kauf?",
      answer:
        "Du wirst direkt zu einer Bestätigungsseite weitergeleitet. Innerhalb von 24 Stunden meldet sich Mike bei dir über WhatsApp und das Onboarding beginnt.",
    },
    {
      question: "Ist das Coaching auch für Frauen geeignet?",
      answer:
        "Absolut. Mike betreut sowohl Männer als auch Frauen. Die Pläne werden individuell auf deine Ziele und deinen Körper abgestimmt.",
    },
    {
      question: "Ich bin Anfänger – ist das trotzdem sinnvoll?",
      answer:
        "Gerade für Anfänger ist professionelles Coaching besonders wertvoll. Mike hilft dir, von Anfang an die richtigen Grundlagen zu legen und teure Fehler zu vermeiden.",
    },
    {
      question: "Welche Zahlungsmethoden werden akzeptiert?",
      answer:
        "Die Zahlung erfolgt sicher über Stripe. Akzeptiert werden Kredit- und Debitkarten (Visa, Mastercard, Amex) sowie weitere gängige Zahlungsmethoden.",
    },
  ],
};

export const finalCtaContent = {
  headline: "Bereit für deine\nTransformation?",
  subheadline:
    "Über 150 Athleten aus dem #TEAMBADASS haben mit Mike ihre Ziele erreicht. Du könntest der Nächste sein.",
  cta: "Jetzt starten – 149 CHF/Monat",
  ctaSub: "Monatlich kündbar · Kein Risiko · Sofortiger Zugang",
};

export const footerContent = {
  tagline: "Professionelles Bodybuilding-Coaching direkt auf WhatsApp. #TEAMBADASS",
  quickLinks: [
    { label: "Vorteile", href: "#benefits" },
    { label: "So funktionierts", href: "#how-it-works" },
    { label: "Über Mike", href: "#about" },
    { label: "Preise", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  legalLinks: [
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "Impressum", href: "/impressum" },
  ],
  location: "🇨🇭 Schweiz",
  copyright: `© ${new Date().getFullYear()} Mike Sommerfeld Coaching. Alle Rechte vorbehalten.`,
};
