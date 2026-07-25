import { Outfit } from "next/font/google";
import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Nabil Adib — Full Stack & Flutter Developer",
  keywords: ["Portfolio", "Nabil Adib", "Web Developer", "Software Engineer", "Flutter Developer", "Next.js", "React"],
  description:
    "Full Stack and Flutter developer building fast, modern web and mobile applications. Based in Selangor, Malaysia. Available for freelance and full-time roles.",
  openGraph: {
    title: "Nabil Adib — Full Stack & Flutter Developer",
    description:
      "Full Stack and Flutter developer building fast, modern web and mobile applications. Based in Selangor, Malaysia.",
    url: "https://nabiladib.dev",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <CustomCursor />
        <Header />
        <main className="min-h-screen flex flex-col">
          <PageTransition>
            <div className="flex-1">{children}</div>
          </PageTransition>
          <Footer />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
