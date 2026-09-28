"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/solutions" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const overlay = (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 w-4/5 max-w-xs bg-white dark:bg-[#080810] border-l border-zinc-200 dark:border-zinc-800 flex flex-col px-8 pt-8 pb-8"
            style={{ zIndex: 9999 }}
          >
            {/* Logo + close */}
            <div className="flex items-center justify-between mb-10">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-xl font-bold text-zinc-900 dark:text-white"
              >
                NA<span className="text-sky-500">.</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`block py-5 border-b border-zinc-200 dark:border-zinc-800 text-3xl font-bold tracking-tight transition-colors duration-200 ${
                    link.path === pathname
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-400 dark:text-zinc-700 hover:text-zinc-800 dark:hover:text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Bottom */}
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">
                  Available for freelance
                </span>
              </div>
              <Link
                href="/contacts"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-zinc-900 text-white hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-500 dark:hover:text-white py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition-colors"
              >
                Let&apos;s Talk →
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex xl:hidden justify-center items-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[28px] text-zinc-500 dark:text-zinc-300" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
};

export default MobileNav;
