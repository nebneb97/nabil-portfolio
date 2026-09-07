import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Nabil Adib — Full Stack & Flutter Developer",
  keywords: ["Portfolio", "Nabil Adib", "Web Developer", "Software Engineer", "Flutter Developer", "Next.js", "React"],
  description:
    "Full Stack and Flutter developer building fast, modern web and mobile applications. Based in Selangor, Malaysia. Available for freelance and full-time roles.",
  metadataBase: new URL("https://nabiladib.vercel.app"),
  openGraph: {
    title: "Nabil Adib — Full Stack & Flutter Developer",
    description:
      "Full Stack and Flutter developer building fast, modern web and mobile applications. Based in Selangor, Malaysia.",
    url: "https://nabiladib.vercel.app",
    siteName: "Nabil Adib Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nabil Adib — Full Stack & Flutter Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil Adib — Full Stack & Flutter Developer",
    description:
      "Full Stack and Flutter developer building fast, modern web and mobile applications.",
    images: ["/assets/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nabil Adib",
  jobTitle: "Full Stack & Flutter Developer",
  url: "https://nabiladib.vercel.app",
  email: "nabiladib70@gmail.com",
  image: "https://nabiladib.vercel.app/assets/og-image.png",
  sameAs: [
    "https://github.com/nebneb97",
    "https://linkedin.com/in/nabiladib",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Selangor",
    addressCountry: "MY",
  },
  knowsAbout: [
    "Next.js", "React", "TypeScript", "Node.js",
    "Flutter", "Firebase", "PostgreSQL", "AWS", "Prisma",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen flex flex-col">
          <PageTransition>
            <div className="flex-1">{children}</div>
          </PageTransition>
          <CTABanner />
          <Footer />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
