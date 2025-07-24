import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-10 text-white" role="banner">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Go to homepage">
        <h1 className="text-4xl font-semibold pl-2 xl:pl-0">
          Nabil Adib
          <span className="text-teal-500">.</span>
          </h1>
        </Link>


        {/*desktop nav and hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contacts">
            <Button>
              Hire Me
            </Button>
          </Link>
        </div>
        {/*mobile nav*/}
        <div className="xl:hidden text-white">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
