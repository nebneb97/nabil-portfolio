"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-10 px-4 mt-12">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left">
        {/* Left Section */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Nabil Adib</h4>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right: Socials + Built with */}
        <div className="flex flex-col items-center xl:items-end gap-2">
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/nebneb97"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-emerald-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nabiladib"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-emerald-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="text-xs text-white/50">
            Built with Next.js, React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
