import Link from "next/link";
import MobileNav from "./MobileNav";

// Mobile-only header — desktop uses Sidebar instead
const Header = () => {
  return (
    <header
      className="p-5 bg-[#f6f5f1] border-b border-zinc-200 flex items-center justify-between"
      role="banner"
    >
      <Link href="/" aria-label="Go to homepage">
        <h1 className="text-xl font-semibold text-zinc-900">
          Nabil Adib<span className="text-indigo-500">.</span>
        </h1>
      </Link>
      <MobileNav />
    </header>
  );
};

export default Header;
