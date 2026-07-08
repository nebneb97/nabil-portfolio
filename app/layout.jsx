import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
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
      <body className={`${jetbrains_Mono.variable} mx-auto`}>
        <CustomCursor />

        {/* Mobile header — hidden on desktop */}
        <div className="xl:hidden">
          <Header />
        </div>

        {/* Desktop sidebar — hidden on mobile */}
        <Sidebar />

        {/* Main content — offset by sidebar on desktop */}
        <main className="xl:ml-[240px] min-h-screen flex flex-col">
          <StairTransition />
          <PageTransition>
            <div className="flex-1 px-6 xl:px-12 py-8 xl:py-12">
              {children}
            </div>
          </PageTransition>
          <Footer />
        </main>

        <SpeedInsights />
      </body>
    </html>
  );
}
