import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import {
  SiNextdotjs,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiPostgresql,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypewriterText from "@/components/TypewriterText";

const featuredProjects = [
  {
    title: "Media Command Centre (MCC)",
    description:
      "Enterprise media intelligence platform for monitoring, analysing, and reporting news coverage. Led planning and development — built with Next.js, Node.js, Prisma, PostgreSQL, and deployed on AWS.",
    stack: [SiNextdotjs, FaReact, FaNodeJs, SiPrisma, SiPostgresql, SiAmazonwebservices],
    github: "",
    live: "",
    category: "Enterprise Web App",
  },
  {
    title: "Equip&Go Rental App",
    description:
      "Cross-platform mobile app for renting outdoor equipment with Google Maps, real-time Firebase data, push notifications, and multi-role access for users, vendors, and admins.",
    stack: [SiFlutter, SiFirebase],
    github: "https://github.com/nebneb97",
    live: "",
    category: "Mobile App",
  },
];

const Home = () => {
  return (
    <section>
      {/* Hero */}
      <div
        className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 75% 10%, rgba(56,189,248,0.07) 0%, transparent 70%)",
        }}
      >
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none flex-1">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Available for work
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-4">
              Fast Apps.
              <br />
              Clean Code.
              <br />
              <span className="text-sky-500">Real Results.</span>
            </h1>

            <div className="mt-4 mb-6">
              <TypewriterText />
            </div>

            <p className="max-w-[480px] mb-8 text-zinc-400 leading-relaxed text-base mx-auto xl:mx-0">
              I build modern web and mobile applications — from Next.js
              dashboards to Flutter apps — focused on clean code and real user
              impact.
            </p>

            <Social
              containerStyles="mb-8 w-full justify-center xl:justify-start gap-4"
              iconStyles="text-2xl text-zinc-300 hover:text-sky-500 transition-colors duration-300"
            />

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start">
              <a
                href="/assets/RESUME NABIL ADIB.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-6 py-3 rounded-full text-sm font-semibold uppercase transition-colors"
              >
                Download CV
                <FiDownload className="text-lg" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none flex-shrink-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-16">
        <Stats />
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-2">
              Selected Work
            </p>
            <h2 className="text-2xl xl:text-3xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-zinc-400 hover:text-sky-500 font-medium transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-500 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-zinc-700 text-xs font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xl text-zinc-600 group-hover:text-sky-400/60 transition-colors">
                {project.stack.map((Icon, i) => (
                  <Icon key={i} />
                ))}
              </div>
              <div className="flex gap-3 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-zinc-400 hover:text-sky-500 transition-colors border border-zinc-700 hover:border-sky-500/50 px-3 py-1.5 rounded-full"
                  >
                    GitHub
                  </a>
                )}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-white bg-sky-500 hover:bg-sky-600 px-3 py-1.5 rounded-full transition-colors"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-xs font-medium text-zinc-600 border border-zinc-800 px-3 py-1.5 rounded-full">
                    Demo on request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
