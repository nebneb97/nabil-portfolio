import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import HomeResumeProjects from "@/components/HomeResumeProjects";
import TypewriterText from "@/components/TypewriterText";

const Home = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto h-full px-4 xl:px-30 xl:mt-15">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-15 py-8 xl:py-15">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none space-y-4">
            <TypewriterText />
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-zinc-900">
              Hello I&apos;m <br />
              <span className="text-indigo-500">Nabil Adib</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-zinc-500 leading-relaxed">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <Social
              containerStyles="mt-6 w-full justify-center xl:justify-start gap-4"
              iconStyles="text-3xl text-zinc-400 hover:text-indigo-500 transition-colors duration-300"
            />
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-6">
              <a
                href="/assets/RESUME NABIL ADIB.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV as PDF"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        <Stats />
        <HomeResumeProjects />
      </div>
    </section>
  );
};

export default Home;
