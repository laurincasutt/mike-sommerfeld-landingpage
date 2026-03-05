export const siteConfig = {
  name: "Mike Sommerfeld Coaching",
  tagline: "Dein persönlicher WhatsApp-Coach – direkt auf WhatsApp",
  description:
    "Professionelles Coaching per WhatsApp. Individueller Trainings- und Ernährungsplan, tägliche Check-ins und direkte Betreuung. Für nur 149 €/Monat.",
  price: "149",
  currency: "€",
  paymentLink: "https://buy.stripe.com/9B68wQ3uIc1j4oc7k07kc0q",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mike-coaching.ch",
  instagram: "https://www.instagram.com/mikethebadass",
  email: "badasscontract@gmx.com",
};

export const heroContent = {
  eyebrow: "WhatsApp-Coaching",
  headline: "Endlich der Körper,\nden du verdient hast.",
  subheadline:
    "Kein generischer Online-Plan. Kein leerer Support. Direkte Betreuung – täglich, persönlich, auf WhatsApp.",
  cta: "Jetzt starten – 149 €/Monat",
  ctaSub: "Monatlich kündbar · Keine Bindung · Sofortiger Zugang",
};

export const proofBarStats = [
  { value: 150, suffix: "+", label: "Zufriedene Athleten" },
  { value: 20, suffix: "+", label: "Jahre Erfahrung" },
  { value: 98, suffix: "%", label: "Weiterempfehlung" },
  { value: 1, suffix: "×", label: "Arnold Classic Sieger" },
];

export const benefitsContent = {
  eyebrow: "Was du bekommst",
  headline: "Alles, was du für deine\nTransformation brauchst.",
  items: [
    {
      icon: "Dumbbell",
      title: "Individueller Trainingsplan",
      description:
        "Kein Copy-Paste. Dein Plan basiert auf deinem Körper, deinem Level und deinen Zielen und wird laufend angepasst.",
    },
    {
      icon: "Utensils",
      title: "Persönlicher Ernährungsplan",
      description:
        "Dir wird ein Ernährungsplan erstellt, der zu deinem Alltag passt. Realistisch, umsetzbar, effektiv.",
    },
    {
      icon: "MessageCircle",
      title: "24/7 WhatsApp-Support",
      description:
        "Dein Coach ist rund um die Uhr erreichbar – alle Fragen zu Ernährung, Training, Regeneration und Supplements werden beantwortet.",
    },
    {
      icon: "Camera",
      title: "Wöchentliche Check-ins",
      description:
        "Jede Woche teilst du deine Daten und Fortschritte. Alles wird analysiert, adjustiert und du erhältst konkretes Feedback.",
    },
    {
      icon: "Target",
      title: "Klare Zieldefinition",
      description:
        "Muskelaufbau, Fettverlust, Kraft oder allgemeine Fitness. Alle diese Ziele sind erreichbar und werden direkt betreut.",
    },
    {
      icon: "TrendingUp",
      title: "Kontinuierliche Anpassung",
      description:
        "Dein Körper gewöhnt sich an alles. Dein Plan wird proaktiv angepasst, damit du immer Fortschritte machst.",
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
        "Klicke auf den Link und schliesse das Abo sicher über Stripe ab. Dauert weniger als 2 Minuten.",
    },
    {
      number: "02",
      title: "Onboarding per WhatsApp",
      description:
        "Nach dem Abschluss erhältst du direkt eine Erstnachricht via WhatsApp. Fülle einen kurzen Fragebogen aus – Ziele, Level, Alltag. Alles über WhatsApp.",
    },
    {
      number: "03",
      title: "Transformation starten",
      description:
        "Du bekommst deine persönlichen Pläne. Ab jetzt hast du einen Personal Trainer 24/7 an deiner Seite.",
    },
  ],
};

export const aboutContent = {
  eyebrow: "Dein Coach",
  headline: "Mike Sommerfeld",
  subheadline: "Pro Bodybuilder · Arnold Classic Sieger · Team Beres",
  bio: [
    "Ich habe über 150 Personen dabei geholfen, ihre körperlichen und mentalen Ziele zu erreichen.",
    "Als Arnold Classic Sieger und zweitplatzierter Olympia-Teilnehmer weiss ich genau, was es braucht: klare Disziplin, auf den Alltag abgestimmte Ernährung und Betreuung, die immer dann da ist, wenn man sie benötigt.",
    "Mit dem #TEAMBERES WhatsApp-Coaching erhältst du rund um die Uhr persönliche Betreuung – perfekt auf dich und deine Ziele abgestimmt. Nur du und dein Ziel.",
  ],
  achievements: [
    "Arnold Classic Sieger",
    "Olympia-Teilnehmer (zweitplatzierter)",
    "IFBB Pro Card Inhaber",
    "20+ Jahre Trainings- und Coaching-Erfahrung",
    "100+ betreute Athleten",
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
    "In diesem kurzen Video erfährst du, wie das WhatsApp-Coaching funktioniert und welche Ergebnisse du erwarten kannst.",
};

export const trafoContent = {
  eyebrow: "#TEAMBERES",
  headline: "Echte Resultate.\nEchte Athleten.",
  subheadline:
    "Über 150 Athleten haben bereits transformiert. Das sind ihre Ergebnisse – unbearbeitet, echt, inspirierend.",
  images: Array.from({ length: 17 }, (_, i) => ({
    src: `/trafos/trafo-${String(i + 1).padStart(2, "0")}.png`,
    alt: `#TEAMBERES Transformation ${i + 1}`,
  })),
};

export const pricingContent = {
  eyebrow: "Investment",
  headline: "Ein Preis. Alles inklusive.",
  price: "149",
  currency: "€",
  period: "pro Monat",
  features: [
    "Individueller Trainingsplan (regelmässig aktualisiert)",
    "Persönlicher Ernährungsplan",
    "Supplement-Plan",
    "24/7 WhatsApp-Support",
    "Wöchentliche Check-ins & Feedback",
    "Dein Coach ist 24/7 für alle Fragen erreichbar – Training, Ernährung, Supplements, Recovery & mehr",
    "Anpassung bei Plateaus & Verletzungen",
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
  note: "Nach dem Kauf erhältst du innerhalb von 5 Minuten eine Erstnachricht via WhatsApp.",
};

export const faqContent = {
  eyebrow: "FAQ",
  headline: "Häufig gestellte\nFragen.",
  items: [
    {
      question: "Für wen ist dieses Coaching geeignet?",
      answer:
        "Das Coaching richtet sich an alle, die ernsthaft Muskeln aufbauen, Körperfett reduzieren oder ihre Fitness verbessern möchten – egal ob Einsteiger oder Fortgeschrittene. Das Coaching passt den Ansatz individuell an dein Level an.",
    },
    {
      question: "Wie läuft das Coaching über WhatsApp ab?",
      answer:
        "Nach dem Kauf erhältst du direkt eine Erstnachricht via WhatsApp. Du füllst ein kurzes Onboarding-Formular aus, deine ersten Pläne werden direkt erstellt. Danach hast du 24/7 Betreuung – Fragen, Fotos, Updates, alles über WhatsApp.",
    },
    {
      question: "Wie schnell kommen Antworten?",
      answer:
        "Antworten erfolgen in der Regel innerhalb von wenigen Minuten. Du wirst nie lange auf eine klare Anweisung oder Antwort warten müssen.",
    },
    {
      question: "Kann ich monatlich kündigen?",
      answer:
        "Ja. Das Abo ist monatlich kündbar. Du kannst es jederzeit mit einer einfachen E-Mail kündigen.",
    },
    {
      question: "Ist das Coaching auch für Frauen geeignet?",
      answer:
        "Absolut. Das Coaching betreut sowohl Männer als auch Frauen. Die Pläne werden individuell auf deine Ziele und deinen Körper abgestimmt.",
    },
    {
      question: "Ich bin Anfänger – ist das trotzdem sinnvoll?",
      answer:
        "Gerade für Anfänger ist professionelles Coaching besonders wertvoll. Das Coaching hilft dir, von Anfang an die richtigen Grundlagen zu legen und teure Fehler zu vermeiden.",
    },
  ],
};

export const finalCtaContent = {
  headline: "Bereit für deine\nTransformation?",
  subheadline:
    "Über 150 Athleten haben ihre Ziele bereits erreicht. Du könntest der Nächste sein.",
  cta: "Jetzt starten",
  ctaSub: "Monatlich kündbar · Kein Risiko · Sofortiger Zugang",
};

export const footerContent = {
  tagline: "Professionelles WhatsApp-Coaching. #TEAMBERES",
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
  location: "",
  copyright: `© 2026 Spectra Media GmbH. Alle Rechte vorbehalten.`,
};
