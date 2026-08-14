"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="container mx-auto px-6 xl:px-12 min-h-[80vh] flex flex-col items-center justify-center text-center"
    >
      <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4">
        404 — Page Not Found
      </p>
      <h1 className="text-7xl xl:text-9xl font-black text-white leading-none mb-4">
        404
      </h1>
      <p className="text-zinc-400 text-base max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase transition-colors"
      >
        Back to Home
      </Link>
    </motion.section>
  );
};

export default NotFound;
