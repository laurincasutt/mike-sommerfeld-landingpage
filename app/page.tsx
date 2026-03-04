import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { siteConfig, faqContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Mike Sommerfeld Coaching – WhatsApp Bodybuilding Coach Schweiz",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.siteUrl },
};

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mike Sommerfeld",
    jobTitle: "Bodybuilding Coach",
    description:
      "Dreifacher Schweizer Meister im Bodybuilding und professioneller Personal Coach mit über 20 Jahren Erfahrung.",
    url: siteConfig.siteUrl,
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mike Sommerfeld WhatsApp Bodybuilding Coaching",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split("T")[0],
    },
    brand: {
      "@type": "Brand",
      name: "Mike Sommerfeld Coaching",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
