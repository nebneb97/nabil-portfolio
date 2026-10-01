"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 sm:px-6 xl:px-12 min-h-[80vh] flex flex-col justify-center">
      <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.16em] mb-6">
        Something went wrong
      </p>
      <h1 className="text-[clamp(80px,14vw,180px)] font-bold leading-[0.88] tracking-[-0.04em] text-zinc-900 dark:text-white mb-8">
        Error.
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 text-[17px] leading-[1.7] max-w-md mb-10">
        An unexpected error occurred. You can try again or head back to the home page.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center bg-zinc-900 text-white hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-500 dark:hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
