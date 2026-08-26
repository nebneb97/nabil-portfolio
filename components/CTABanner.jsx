import Link from "next/link";

const CTABanner = () => (
  <section className="border-t border-zinc-800 bg-zinc-900/20">
    <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-20 flex flex-col xl:flex-row items-center justify-between gap-8 text-center xl:text-left">
      <div>
        <p className="font-mono text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">
          Open to Freelance
        </p>
        <h2 className="text-3xl xl:text-4xl font-bold text-white mb-3">
          Ready to build something?
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto xl:mx-0">
          Whether it&apos;s a web app, mobile app, or backend system — let&apos;s talk about your project.
        </p>
      </div>
      <Link
        href="/contacts"
        className="flex-shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-sm font-semibold uppercase transition-colors"
      >
        Let&apos;s Talk
        <span>→</span>
      </Link>
    </div>
  </section>
);

export default CTABanner;
