import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import HomeResumeProjects from "@/components/HomeResumeProjects";

const Home = () => {
  return (
    <section className="m:max-h-screen flex items-center justify-center">
      <div className="container mx-auto h-full px-4 xl:px-30 xl:mt-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-15 py-8 xl:py-15">
          {/*Text*/}
          <div className="text-center xl:text-left order-2 xl:order-none space-y-4">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold">
              Hello I'm <br />{" "}
              <span className="text-teal-500"> Nabil Adib </span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            {/*Socials*/}
            <Social
              containerStyles="mt-6 w-full justify-center xl:justify-start gap-4"
              iconStyles="text-3xl text-gray-600 hover:text-teal-500 transition duration-400"
            />
            {/*Button*/}
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats className="mt-12 xl:mt-10" />
        <div className="">
          <HomeResumeProjects />
        </div>
      </div>
    </section>
  );
};

export default Home;
