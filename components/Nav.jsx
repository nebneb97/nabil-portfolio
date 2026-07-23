"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Solutions", path: "/solutions" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname
              ? "text-indigo-600 border-b-2 border-indigo-500"
              : "text-zinc-600 hover:text-indigo-500"
          } capitalize font-medium transition-colors duration-200`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
