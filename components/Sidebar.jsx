"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaYoutube, FaStackOverflow } from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Solutions", path: "/solutions" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-zinc-200 bg-[#f6f5f1] flex-col p-8 z-50 hidden xl:flex">
      {/* Logo */}
      <Link href="/" className="mb-12 block">
        <h1 className="text-xl font-semibold text-zinc-900">
          Nabil Adib<span className="text-indigo-500">.</span>
        </h1>
        <p className="text-xs text-zinc-400 mt-1 font-normal">Software Developer</p>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-2 px-3">
          Navigation
        </p>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              link.path === pathname
                ? "bg-indigo-500 text-white shadow-sm"
                : "text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Connect
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/nebneb97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-200/70 text-zinc-500 hover:bg-indigo-100 hover:text-indigo-500 transition-all"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://linkedin.com/in/nabiladib"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-200/70 text-zinc-500 hover:bg-indigo-100 hover:text-indigo-500 transition-all"
            >
              <FaLinkedin className="text-base" />
            </a>
            <a
              href="https://tinyurl.com/yeypm3he"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-200/70 text-zinc-500 hover:bg-indigo-100 hover:text-indigo-500 transition-all"
            >
              <FaYoutube className="text-base" />
            </a>
            <a
              href="https://stackoverflow.com/users/30909809/nebneb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-200/70 text-zinc-500 hover:bg-indigo-100 hover:text-indigo-500 transition-all"
            >
              <FaStackOverflow className="text-base" />
            </a>
          </div>
        </div>

        <Link href="/contacts" className="block">
          <Button className="w-full animate-glow text-sm">Hire Me</Button>
        </Link>

        <p className="text-[10px] text-zinc-400 leading-relaxed">
          © {new Date().getFullYear()} Nabil Adib
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
