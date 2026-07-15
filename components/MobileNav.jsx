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
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/resume",
  },
  {
    name: "Solutions",
    path: "/solutions",
  },
  // {
  //   name: "Projects",
  //   path: "/projects",
  // },
  {
    name: "Hire Me",
    path: "/contacts",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open mobile navigation menu"
      >
        <CiMenuFries className="text-[32px] text-teal-500" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        {/* Accessibility Title (visually hidden) */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        {/*logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <h1 className="text-4xl font-semibold">
            Nabil<span className="text-teal-500">.</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-4">
          {links.map((link, index) => {
            // Render a Button for "Hire Me", normal link for others
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
                    ? "text-teal-500 border-b-2 border-teal-500"
                    : ""
                } text-xl capitalize hover:text-teal-500 transition-all`}
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
