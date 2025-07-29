"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  // {
  //   name: "Contact",
  //   path: "/contacts",
  // },
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
                ? "text-teal-400 border-b-2 border-teal-400"
                : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
