"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Solutions", path: "/solutions" },
  { name: "Let's Talk", path: "/contacts" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex xl:hidden justify-center items-center"
        aria-label="Open mobile navigation menu"
      >
        <CiMenuFries className="text-[28px] text-zinc-300" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col bg-[#080810] border-l border-zinc-800"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <div className="mt-24 mb-12 text-center">
          <span className="text-3xl font-bold text-white">
            NA<span className="text-sky-500">.</span>
          </span>
        </div>
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => {
            if (link.name === "Hire Me") {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl font-medium transition-colors duration-200 ${
                  link.path === pathname
                    ? "text-sky-500"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
