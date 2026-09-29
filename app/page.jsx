import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import {
  SiNextdotjs,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiPostgresql,
  SiAmazonwebservices,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypewriterText from "@/components/TypewriterText";
import VisitorTracker from "@/components/VisitorTracker";
import ProcessSection from "@/components/ProcessSection";
import Reveal from "@/components/Reveal";

const techs = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Prisma", Icon: SiPrisma },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Firebase", Icon: SiFirebase },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Git", Icon: FaGitAlt },
  { name: "Figma", Icon: SiFigma },
  { name: "Postman", Icon: SiPostman },
];

const Home = () => {
  const marqueeItems = [...techs, ...techs];

  return (
    <section>
      <VisitorTracker />

      {/* Editorial Hero */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-16">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">

            {/* Content */}
            <div className="text-center xl:text-left order-2 xl:order-none flex-1">
              <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.16em] mb-3">
                Full Stack Developer — Selangor, Malaysia
              </p>
              <div className="flex items-center gap-2 justify-center xl:justify-start mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse flex-shrink-0" />
                <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">
                  Currently at EBH IT Solutions
                </span>
              </div>
              <h1 className="text-[clamp(40px,6vw,88px)] font-bold leading-[0.92] tracking-[-0.04em] text-zinc-900 dark:text-white mb-10">
                Fast Apps.
                <br />
                Clean Code.
                <br />
                <span className="text-sky-500">For Real People.</span>
              </h1>

              <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 mb-8 max-w-md mx-auto xl:mx-0 rounded-none">
                <div className="mb-3">
                  <TypewriterText />
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed text-left">
                  That moment when someone uses something you built and it
                  actually helps them — that&apos;s what keeps me going. I build
                  web and mobile apps, from Next.js enterprise platforms to
                  Flutter, with that goal in mind.
                </p>
              </div>

              <Social
                containerStyles="mb-8 w-full justify-center xl:justify-start gap-4"
                iconStyles="text-2xl text-zinc-500 hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300"
              />

              <div className="flex flex-col sm:flex-row items-center xl:items-start gap-3 justify-center xl:justify-start">
                <a
                  href="/assets/RESUME_NABIL%20ADIB_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-500 dark:hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
                >
                  Download CV
                  <FiDownload />
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
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
      </div>

      {/* Marquee ticker */}
      <div className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800/60 py-4 mb-16 bg-zinc-100 dark:bg-zinc-900/20">
        <div className="flex animate-marquee gap-10 w-max">
          {marqueeItems.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-zinc-500 text-sm font-medium whitespace-nowrap hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <t.Icon className="text-base" />
              {t.name}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-16">
        <Stats />
      </div>

      {/* How I Work */}
      <ProcessSection />

      {/* Featured Projects */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-24">
        <Reveal className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-sky-600 dark:text-sky-500 text-xs font-semibold uppercase tracking-widest mb-2">
              Selected Work
            </p>
            <h2 className="text-2xl xl:text-3xl font-bold text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-xs text-zinc-500 hover:text-sky-600 dark:hover:text-sky-500 uppercase tracking-widest transition-colors"
          >
            View all →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          {/* 01 — MCC */}
          <Reveal delay={0} className="xl:col-span-2">
            <div className="group cursor-default border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 h-full min-h-[380px] overflow-hidden grid grid-cols-1 xl:grid-cols-2">
              <div className="bg-white dark:bg-zinc-900 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sky-600 dark:text-sky-400 text-xs uppercase tracking-widest">Enterprise Web App</span>
                  <span className="font-mono text-zinc-400 dark:text-zinc-600 text-xs">01</span>
                </div>
                <div>
                  <h3 className="text-2xl xl:text-3xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                    Media Command Centre
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    Media intelligence platform for monitoring, analysing, and reporting news coverage — with AI analysis, social listening via Apify, and RBAC. Deployed across 7 AWS services.
                  </p>
                  <div className="flex gap-2 text-base text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    <SiNextdotjs /><FaReact /><FaNodeJs /><SiPrisma /><SiPostgresql /><SiAmazonwebservices />
                  </div>
                </div>
              </div>
              <div className="relative hidden xl:block bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <Image
                  src="/assets/Image MCC LOGIN.png"
                  fill
                  alt="Media Command Centre screenshot"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  className="opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 dark:from-zinc-900/30 to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* 02 — ePIBG */}
          <Reveal delay={0.1} className="xl:col-span-1">
            <div className="group cursor-default border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 h-full min-h-[380px] overflow-hidden flex flex-col">
              <div className="relative h-44 bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/Gambar EPIBG.png"
                  fill
                  alt="ePIBG screenshot"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  className="opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-zinc-900/50" />
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between flex-1">
                <span className="font-mono text-sky-600 dark:text-sky-400 text-xs uppercase tracking-widest">Enterprise Web</span>
                <div>
                  <p className="font-mono text-zinc-400 dark:text-zinc-600 text-xs mb-2">02</p>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                    ePIBG — Digital School Platform
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mb-4">
                    Led the Digital Consent and Treasurer modules end-to-end — from planning to deployment on AWS Amplify.
                  </p>
                  <div className="flex gap-2 text-sm text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    <SiNextdotjs /><FaReact /><SiTypescript /><SiPostgresql /><SiAmazonwebservices />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 03 — Cloud Testing */}
          <Reveal delay={0.05} className="xl:col-span-1">
            <div className="group cursor-default min-h-[240px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 h-full p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sky-600 dark:text-sky-400 text-xs uppercase tracking-widest">Fullstack Web</span>
                <span className="font-mono text-zinc-400 dark:text-zinc-600 text-xs">03</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  Cloud Testing Platform
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4">
                  Resolved 30+ frontend issues during internship, improving testing reliability by 25%.
                </p>
                <div className="flex gap-2 text-base text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                  <SiNextdotjs /><FaReact /><SiTypescript /><SiTailwindcss /><SiPrisma />
                </div>
              </div>
            </div>
          </Reveal>

          {/* 04 — Equip&Go */}
          <Reveal delay={0.15} className="xl:col-span-2">
            <div className="group cursor-default min-h-[240px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 h-full p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sky-600 dark:text-sky-400 text-xs uppercase tracking-widest">Mobile App</span>
                <span className="font-mono text-zinc-400 dark:text-zinc-600 text-xs">04</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Equip&amp;Go Rental App
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm">
                    Cross-platform Flutter app — Google Maps, Firebase real-time data, push notifications, and multi-role access for users, vendors, and admins.
                  </p>
                </div>
                <div className="flex gap-3 text-2xl text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors flex-shrink-0">
                  <SiFlutter /><SiFirebase />
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Home;
