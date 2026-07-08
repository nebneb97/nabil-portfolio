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
import { Button } from "./ui/button";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Solutions", path: "/solutions" },
  { name: "Hire Me", path: "/contacts" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open mobile navigation menu"
      >
        <CiMenuFries className="text-[32px] text-zinc-700" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col bg-[#f6f5f1] border-l border-zinc-200"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <div className="mt-32 mb-40 text-center">
          <h1 className="text-4xl font-semibold text-zinc-900">
            Nabil<span className="text-indigo-500">.</span>
          </h1>
        </div>
        <nav className="flex flex-col items-center space-y-4">
          {links.map((link, index) => {
            if (link.name === "Hire Me") {
              return (
                <Link href={link.path} key={index}>
                  <Button className="w-[200px]">{link.name}</Button>
                </Link>
              );
            }
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-indigo-600 border-b-2 border-indigo-500"
                    : "text-zinc-700 hover:text-indigo-500"
                } text-xl capitalize transition-colors duration-200`}
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
