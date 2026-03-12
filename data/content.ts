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

// ─── German content ────────────────────────────────────────────────────────────

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
    {
      question: "Wird das Coaching von Mike persönlich durchgeführt?",
      answer:
        "Das Coaching wird über ein KI-basiertes System bereitgestellt, das vollständig auf Mike Sommerfelds Know-how, langjähriger Erfahrung, Trainingsphilosophie und Coaching-Methodik aufgebaut ist. Alle Inhalte, Pläne und Antworten basieren auf seinem Wissen und seiner Methodik.",
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
    { label: "Impressum", href: "/impressum" },
  ],
  location: "",
  copyright: `© 2026 Spectra Media GmbH. Alle Rechte vorbehalten.`,
  aiDisclosure:
    "Dieses Coaching wird durch ein KI-basiertes System bereitgestellt, das auf Mike Sommerfelds Know-how, langjähriger Erfahrung, Trainingsphilosophie und Coaching-Methodik basiert.",
};

// ─── English content ───────────────────────────────────────────────────────────

export const heroContentEN = {
  eyebrow: "WhatsApp Coaching",
  headline: "Finally the body\nyou deserve.",
  subheadline:
    "No generic online plan. No empty support. Direct coaching – daily, personal, on WhatsApp.",
  cta: "Start now – €149/month",
  ctaSub: "Cancel anytime · No commitment · Instant access",
};

export const proofBarStatsEN = [
  { value: 150, suffix: "+", label: "Satisfied Athletes" },
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Recommendation Rate" },
  { value: 1, suffix: "×", label: "Arnold Classic Winner" },
];

export const benefitsContentEN = {
  eyebrow: "What you get",
  headline: "Everything you need for\nyour transformation.",
  items: [
    {
      icon: "Dumbbell",
      title: "Individual Training Plan",
      description:
        "No copy-paste. Your plan is based on your body, your level, and your goals – continuously adjusted.",
    },
    {
      icon: "Utensils",
      title: "Personal Nutrition Plan",
      description:
        "A nutrition plan created to fit your lifestyle. Realistic, actionable, effective.",
    },
    {
      icon: "MessageCircle",
      title: "24/7 WhatsApp Support",
      description:
        "Your coach is available around the clock – all questions about nutrition, training, recovery, and supplements answered.",
    },
    {
      icon: "Camera",
      title: "Weekly Check-ins",
      description:
        "Every week you share your data and progress. Everything is analyzed, adjusted, and you receive concrete feedback.",
    },
    {
      icon: "Target",
      title: "Clear Goal Definition",
      description:
        "Muscle gain, fat loss, strength or general fitness. All these goals are achievable and directly coached.",
    },
    {
      icon: "TrendingUp",
      title: "Continuous Adjustment",
      description:
        "Your body adapts to everything. Your plan is proactively adjusted so you always make progress.",
    },
  ],
};

export const howItWorksContentEN = {
  eyebrow: "Simple process",
  headline: "Professional coaching\nin 3 steps.",
  steps: [
    {
      number: "01",
      title: "Sign up now",
      description:
        "Click the link and complete the subscription securely via Stripe. Takes less than 2 minutes.",
    },
    {
      number: "02",
      title: "Onboarding via WhatsApp",
      description:
        "After signing up you'll receive a first message via WhatsApp. Fill in a short questionnaire – goals, level, lifestyle. All via WhatsApp.",
    },
    {
      number: "03",
      title: "Start your transformation",
      description:
        "You'll receive your personal plans. From now on you have a personal trainer by your side 24/7.",
    },
  ],
};

export const aboutContentEN = {
  eyebrow: "Your Coach",
  headline: "Mike Sommerfeld",
  subheadline: "Pro Bodybuilder · Arnold Classic Winner · Team Beres",
  bio: [
    "I have helped over 150 people achieve their physical and mental goals.",
    "As an Arnold Classic winner and Olympia runner-up, I know exactly what it takes: clear discipline, nutrition tailored to your lifestyle, and coaching that's there whenever you need it.",
    "With #TEAMBERES WhatsApp coaching, you get personal support around the clock – perfectly tailored to you and your goals. Just you and your goal.",
  ],
  achievements: [
    "Arnold Classic Winner",
    "Olympia Participant (runner-up)",
    "IFBB Pro Card Holder",
    "20+ years of training and coaching experience",
    "100+ coached athletes",
  ],
  stagePhotos: [
    { src: "/mike-stage-1.png", alt: "Mike Sommerfeld – Arnold Classic" },
    { src: "/mike-stage-2.png", alt: "Mike Sommerfeld on stage" },
    { src: "/mike-stage-3.png", alt: "Mike Sommerfeld – Competition" },
    { src: "/mike-stage-4.png", alt: "Mike Sommerfeld posing" },
    { src: "/mike-stage-5.png", alt: "Mike Sommerfeld – Olympia 2025" },
    { src: "/mike-stage-6.png", alt: "Mike Sommerfeld – Back pose" },
  ],
};

export const videoContentEN = {
  eyebrow: "See for yourself",
  headline: "Hear directly from Mike.",
  description:
    "In this short video you'll learn how the WhatsApp coaching works and what results you can expect.",
};

export const trafoContentEN = {
  eyebrow: "#TEAMBERES",
  headline: "Real results.\nReal athletes.",
  subheadline:
    "Over 150 athletes have already transformed. These are their results – unedited, real, inspiring.",
  images: Array.from({ length: 17 }, (_, i) => ({
    src: `/trafos/trafo-${String(i + 1).padStart(2, "0")}.png`,
    alt: `#TEAMBERES Transformation ${i + 1}`,
  })),
};

export const pricingContentEN = {
  eyebrow: "Investment",
  headline: "One price. Everything included.",
  price: "149",
  currency: "€",
  period: "per month",
  features: [
    "Individual training plan (regularly updated)",
    "Personal nutrition plan",
    "Supplement plan",
    "24/7 WhatsApp support",
    "Weekly check-ins & feedback",
    "Your coach is available 24/7 for all questions – training, nutrition, supplements, recovery & more",
    "Adjustments for plateaus & injuries",
    "Cancel monthly – no minimum term",
  ],
  cta: "Start now",
  ctaSub: "Secure payment via Stripe · Instant access",
  trustBadges: [
    "Cancel anytime",
    "SSL encrypted",
    "Stripe secured",
    "GDPR compliant",
  ],
  note: "After purchase you'll receive a first message via WhatsApp within 5 minutes.",
};

export const faqContentEN = {
  eyebrow: "FAQ",
  headline: "Frequently asked\nquestions.",
  items: [
    {
      question: "Who is this coaching for?",
      answer:
        "The coaching is for everyone who seriously wants to build muscle, reduce body fat, or improve their fitness – whether beginner or advanced. The coaching adapts its approach individually to your level.",
    },
    {
      question: "How does coaching via WhatsApp work?",
      answer:
        "After purchase you'll receive a first message via WhatsApp directly. You fill in a short onboarding form, your first plans are created immediately. After that you have 24/7 support – questions, photos, updates, all via WhatsApp.",
    },
    {
      question: "How quickly do I get responses?",
      answer:
        "Responses are typically delivered within minutes. You will never have to wait long for clear instructions or an answer.",
    },
    {
      question: "Can I cancel monthly?",
      answer:
        "Yes. The subscription is cancelable monthly. You can cancel at any time with a simple email.",
    },
    {
      question: "Is the coaching also suitable for women?",
      answer:
        "Absolutely. The coaching supports both men and women. Plans are individually tailored to your goals and your body.",
    },
    {
      question: "I'm a beginner – is it still worthwhile?",
      answer:
        "Especially for beginners, professional coaching is particularly valuable. The coaching helps you build the right foundations from the start and avoid costly mistakes.",
    },
    {
      question: "Is the coaching delivered personally by Mike?",
      answer:
        "The coaching is delivered through an AI-based system built entirely on Mike Sommerfeld's know-how, years of experience, training philosophy, and coaching methodology. All content, plans, and responses are based on his knowledge and methods.",
    },
  ],
};

export const finalCtaContentEN = {
  headline: "Ready for your\ntransformation?",
  subheadline:
    "Over 150 athletes have already achieved their goals. You could be next.",
  cta: "Start now",
  ctaSub: "Cancel anytime · No risk · Instant access",
};

export const footerContentEN = {
  tagline: "Professional WhatsApp Coaching. #TEAMBERES",
  quickLinks: [
    { label: "Benefits", href: "#benefits" },
    { label: "How it works", href: "#how-it-works" },
    { label: "About Mike", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/datenschutz" },
    { label: "Imprint", href: "/impressum" },
  ],
  location: "",
  copyright: `© 2026 Spectra Media GmbH. All rights reserved.`,
  aiDisclosure:
    "This coaching is delivered through an AI-based system built on Mike Sommerfeld's know-how, years of experience, training philosophy, and coaching methodology.",
};

// ─── Nav links by language ─────────────────────────────────────────────────────

export const navLinksDE = [
  { label: "Vorteile", href: "#benefits" },
  { label: "So funktionierts", href: "#how-it-works" },
  { label: "Über Mike", href: "#about" },
  { label: "Preise", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const navLinksEN = [
  { label: "Benefits", href: "#benefits" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About Mike", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
