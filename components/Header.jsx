import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header
      className="p-6 xl:py-4 xl:px-10 xl:mb-10 xl:fixed xl:top-0 xl:left-0 xl:right-0 xl:z-50 bg-[#f6f5f1]/90 backdrop-blur-sm xl:border-b xl:border-zinc-200"
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Go to homepage">
          <h1 className="text-2xl xl:text-3xl font-semibold text-zinc-900 pl-2 xl:pl-0">
            Nabil Adib
            <span className="text-indigo-500">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contacts">
            <Button className="animate-glow">Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
