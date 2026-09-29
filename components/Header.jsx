"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import MobileNav from "./MobileNav";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/solutions" },
  { name: "Contact", path: "/contacts" },
];

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F5F3EF] dark:bg-[#060608] border-b border-zinc-200 dark:border-zinc-800 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
          NA<span className="text-sky-500">.</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                link.path === pathname
                  ? "text-sky-600 dark:text-sky-500"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
            >
              {theme === "dark" ? (
                <HiSun className="text-lg" />
              ) : (
                <HiMoon className="text-lg" />
              )}
            </button>
          )}
          <Link
            href="/contacts"
            className="hidden xl:inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-5 py-2 uppercase tracking-wide transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
