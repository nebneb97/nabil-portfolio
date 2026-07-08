import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiPrisma, SiFlutter, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypewriterText from "@/components/TypewriterText";

const featuredProjects = [
  {
    title: "Cloud-based Testing Platform",
    description:
      "A fullstack platform to request and manage software testing tasks with real-time status tracking and role-based access control.",
    stack: [SiNextdotjs, FaReact, SiPrisma, SiTailwindcss, SiTypescript],
    github: "https://github.com/nebneb97",
    live: "",
  },
  {
    title: "Equip&Go Rental App",
    description:
      "A cross-platform mobile app for renting outdoor activity equipment based on user location, real-time availability, and multi-role access.",
    stack: [SiFlutter, SiFirebase],
    github: "https://github.com/nebneb97",
    live: "",
  },
];

const Home = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto h-full">

        {/* Hero */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-15 py-8 xl:py-15">
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
            <div className="flex flex-col xl:flex-row items-center gap-4 mt-6">
              <a
                href="/assets/RESUME NABIL ADIB.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Link href="/projects">
                <Button size="lg" className="uppercase">View My Work</Button>
              </Link>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        {/* Stats */}
        <Stats />

        {/* Featured Projects */}
        <div className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl xl:text-3xl font-bold text-zinc-900">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-indigo-500 hover:text-indigo-700 font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xl text-indigo-400">
                  {project.stack.map((Icon, i) => <Icon key={i} />)}
                </div>
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-zinc-500 hover:text-indigo-500 transition-colors border border-zinc-200 hover:border-indigo-300 px-3 py-1.5 rounded-full"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white bg-indigo-500 hover:bg-indigo-600 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
