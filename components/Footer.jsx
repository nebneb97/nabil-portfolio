"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-zinc-500 border-t border-zinc-200 py-10 px-4 xl:px-10 mt-10">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:px-10 xl:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <Link href="/" className="flex flex-col xl:flex-row items-center gap-2">
          <span className="text-sm font-semibold text-zinc-700">
            Nabil Adib<span className="text-indigo-500">.</span>
          </span>
          <span className="text-sm text-zinc-400">
            Built with Next.js, React, Tailwind CSS &amp; Framer Motion
          </span>
        </Link>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/nebneb97"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nabiladib"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://tinyurl.com/yeypm3he"
            target="_blank"
            aria-label="YouTube"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
