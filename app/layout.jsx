import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
// import { PrismaClient } from '@prisma/client';
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient().$extends(withAccelerate())

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});



export const metadata = {
  title: "Portfolio | Nabil Adib",
  keywords: ["Portfolio", "Nabil Adib", "Web Developer", "Software Engineer"],
  description:
    "Portfolio of Nabil Adib, a software developer specializing in web development and digital experiences.",
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrains_Mono.variable}p-4 xl:px-9 mx-auto`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
