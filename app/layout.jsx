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
  title: "Portfolio | Nabil Adib",
  keywords: ["Portfolio", "Nabil Adib", "Web Developer", "Software Engineer"],
  description:
    "Portfolio of Nabil Adib, a software developer specialising in web development and digital experiences.",
};

export const viewport = "width=device-width, initial-scale=1";

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
