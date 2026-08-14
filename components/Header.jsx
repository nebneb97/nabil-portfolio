"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Solutions", path: "/solutions" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#060608]/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          NA<span className="text-sky-500">.</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                link.path === pathname
                  ? "text-sky-500"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contacts"
            className="hidden xl:inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Hire Me
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
