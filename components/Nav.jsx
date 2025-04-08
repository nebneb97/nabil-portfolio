"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/resumet",
  },

  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((links, index) => {
        return (
          <Link
            href={links.path}
            key={index}
            className={`${
              links.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all`} /*this is a test*/
          >
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
