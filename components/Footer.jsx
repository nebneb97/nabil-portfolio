import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6 xl:px-12">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Nabil Adib. All rights reserved.</p>
        <span className="text-zinc-600">
          Built with Next.js · Tailwind · Framer Motion
        </span>
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/nebneb97"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-sky-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nabiladib"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-sky-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
