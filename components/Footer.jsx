"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white outline-2 py-10 px-4 mt-10">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left">
        {/* Left Section */}
        <div>
          <p className="text-white/60 text-md">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        {/* Center: Logo + Description */}
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-md text-white/60  font-semibold">
            Nabil Adib
            <span className="text-teal-500">.</span>
          </h1>
        <p className="text-md text-white/50">
          Built with Next.js, React, Tailwind CSS & Framer Motion
        </p>
        </Link>

        {/* Right: Socials + */}
        <div className="flex flex-col items-center xl:items-end gap-2">
          <div className="flex gap-4 text-md">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
