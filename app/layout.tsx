import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { siteConfig } from "@/data/content";

const barlow = Barlow({
  weight: ["400", "600", "700", "900"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Mike Sommerfeld Coaching – WhatsApp Bodybuilding Coach Schweiz",
    template: "%s | Mike Sommerfeld Coaching",
  },
  description: siteConfig.description,
  keywords: [
    "bodybuilding coaching schweiz",
    "personal trainer whatsapp",
    "online coach bodybuilding",
    "ernährungsplan muskelaufbau",
    "mike sommerfeld coaching",
    "bodybuilding abo",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Mike Sommerfeld Coaching – WhatsApp Bodybuilding Coach Schweiz",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mike Sommerfeld – Bodybuilding Coach Schweiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Sommerfeld Coaching",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','936698728892723');
fbq('track','PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=936698728892723&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="bg-surface text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
