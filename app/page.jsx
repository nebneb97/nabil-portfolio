import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import "./globals.css";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-5 xl:pb-20">
          {/*Text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold">
              Hello I'm <br />{" "}
              <span className="text-teal-500"> Nabil Adib </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            {/*Button*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/RESUME NABIL ADIB.pdf"
                download // This attribute prompts download
                aria-label="Download CV as PDF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
