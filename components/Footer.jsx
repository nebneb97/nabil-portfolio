import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Solutions", path: "/solutions" },
  { name: "Contact", path: "/contacts" },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800">

      {/* ── Top section ── */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-10 xl:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20">

          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white mb-2 inline-block">
              NA<span className="text-sky-500">.</span>
            </Link>
            <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-widest mb-1">
              Full Stack & Flutter Developer
            </p>
            <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-widest">
              Selangor, Malaysia
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-zinc-500 text-[10px] uppercase tracking-[0.16em] mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="font-mono text-xs text-zinc-500 hover:text-sky-400 uppercase tracking-widest transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-zinc-500 text-[10px] uppercase tracking-[0.16em] mb-4">
              Get in Touch
            </p>
            <a
              href="mailto:nabiladib70@gmail.com"
              className="block font-mono text-xs text-zinc-400 hover:text-sky-400 transition-colors mb-5 tracking-wide"
            >
              nabiladib70@gmail.com
            </a>
            <div className="flex gap-4 text-lg text-zinc-500">
              <a
                href="https://github.com/nebneb97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-sky-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/nabiladib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-sky-500 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-zinc-800/60">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-zinc-500 tracking-wide">
            © {new Date().getFullYear()} Nabil Adib — Built to last, shipped with care.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="font-mono text-[11px] text-sky-500 uppercase tracking-widest">
              Available for freelance
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
