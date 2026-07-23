import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6 xl:px-12">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Nabil Adib. All rights reserved.</p>
        <Link
          href="/"
          className="text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          Built with Next.js · Tailwind · Framer Motion
        </Link>
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/nebneb97"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-orange-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nabiladib"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://tinyurl.com/yeypm3he"
            target="_blank"
            aria-label="YouTube"
            className="hover:text-orange-500 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
