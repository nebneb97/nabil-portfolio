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
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-sky-400/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-16 relative z-10">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
            {/* Text */}
            <div className="text-center xl:text-left order-2 xl:order-none flex-1">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                <span className="font-mono text-sky-400 text-xs font-medium tracking-widest uppercase">
                  Open to Freelance
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
                  href="/assets/RESUME_NABIL_ADIB.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-6 py-3 rounded-full text-sm font-semibold uppercase transition-colors"
                >
                  Download Resume
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
      </div>

      {/* ── Worked With ── */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-10">
        <div className="flex flex-wrap items-center gap-4 xl:gap-8">
          <span className="font-mono text-zinc-600 text-xs uppercase tracking-widest">
            Worked With
          </span>
          {["EBH IT Solutions", "Al-Ain IT Consultants", "Hezmedia Interactive"].map(
            (company) => (
              <span
                key={company}
                className="text-zinc-400 text-sm font-medium border border-zinc-800 px-4 py-1.5 rounded-full hover:border-sky-500/30 hover:text-sky-400 transition-colors"
              >
                {company}
              </span>
            )
          )}
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="relative overflow-hidden border-y border-zinc-800/60 py-4 mb-16 bg-zinc-900/20">
        <div className="flex animate-marquee gap-10 w-max">
          {marqueeItems.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-zinc-500 text-sm font-medium whitespace-nowrap hover:text-sky-400 transition-colors"
            >
              <t.Icon className="text-base" />
              {t.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-16">
        <Stats />
      </div>

      {/* ── Bento Grid ── */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-sky-500 text-xs font-semibold uppercase tracking-widest mb-2">
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          {/* 01 — MCC: large hero card with image overlay */}
          <div className="xl:col-span-2 relative overflow-hidden rounded-2xl group cursor-default min-h-[380px] border border-zinc-800 hover:border-sky-500/30 transition-all duration-500">
            <Image
              src="/assets/Image MCC LOGIN.png"
              fill
              alt="Media Command Centre"
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/80 to-sky-950/30" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[380px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sky-400 text-xs uppercase tracking-widest">
                  Enterprise Web App
                </span>
                <span className="font-mono text-zinc-600 text-xs">01</span>
              </div>
              <div>
                <h3 className="text-3xl xl:text-4xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">
                  Media Command Centre
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-md">
                  Enterprise media intelligence platform for monitoring,
                  analysing, and reporting news coverage. Led planning and
                  development — deployed on AWS across 7 services.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                    <span className="font-mono text-sky-400 text-xs">
                      7 AWS Services · Enterprise Scale
                    </span>
                  </div>
                  <div className="flex gap-2 text-lg text-zinc-600 group-hover:text-sky-400/50 transition-colors">
                    <SiNextdotjs />
                    <FaReact />
                    <FaNodeJs />
                    <SiPrisma />
                    <SiPostgresql />
                    <SiAmazonwebservices />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 — ePIBG: tall sidebar card with image overlay */}
          <div className="xl:col-span-1 relative overflow-hidden rounded-2xl group cursor-default min-h-[380px] border border-zinc-800 hover:border-sky-500/30 transition-all duration-500">
            <Image
              src="/assets/Gambar EPIBG.png"
              fill
              alt="ePIBG"
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/75 to-zinc-950/95" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/8 blur-2xl rounded-full pointer-events-none" />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[380px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sky-400 text-xs uppercase tracking-widest">
                  Enterprise Web
                </span>
                <span className="font-mono text-zinc-600 text-xs">02</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  ePIBG – Digital School Platform
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  Led the Digital Consent and Treasurer modules. Full SDLC from
                  planning to deployment on AWS Amplify.
                </p>
                <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1 mb-3">
                  <span className="font-mono text-sky-400 text-[10px]">
                    2 Modules Led · Full SDLC
                  </span>
                </div>
                <div className="flex gap-2 text-base text-zinc-600 group-hover:text-sky-400/50 transition-colors">
                  <SiNextdotjs />
                  <FaReact />
                  <SiTypescript />
                  <SiPostgresql />
                  <SiAmazonwebservices />
                </div>
              </div>
            </div>
          </div>

          {/* 03 — Cloud Testing: glass card */}
          <div className="xl:col-span-1 relative overflow-hidden rounded-2xl group cursor-default min-h-[240px] bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-400/5 blur-2xl rounded-full pointer-events-none" />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[240px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sky-400 text-xs uppercase tracking-widest">
                  Fullstack Web
                </span>
                <span className="font-mono text-zinc-600 text-xs">03</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  Cloud Testing Platform
                </h3>
                <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                  <span className="font-mono text-sky-400 text-[10px]">
                    30+ Issues Fixed · 25% Reliability ↑
                  </span>
                </div>
                <div className="flex gap-2 text-lg text-zinc-600 group-hover:text-sky-400/50 transition-colors">
                  <SiNextdotjs />
                  <FaReact />
                  <SiTypescript />
                  <SiTailwindcss />
                  <SiPrisma />
                </div>
              </div>
            </div>
          </div>

          {/* 04 — Equip&Go: wide glass card */}
          <div className="xl:col-span-2 relative overflow-hidden rounded-2xl group cursor-default min-h-[240px] bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-sky-950/20 border border-zinc-800 hover:border-sky-500/30 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-sky-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/5 blur-2xl rounded-full pointer-events-none" />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[240px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sky-400 text-xs uppercase tracking-widest">
                  Mobile App
                </span>
                <span className="font-mono text-zinc-600 text-xs">04</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    Equip&amp;Go Rental App
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Cross-platform Flutter app — Google Maps, Firebase real-time
                    data, push notifications, and multi-role access.
                  </p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-start sm:items-end gap-3">
                  <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                    <span className="font-mono text-sky-400 text-[10px]">
                      Multi-role · Maps · Push Notifs
                    </span>
                  </div>
                  <div className="flex gap-3 text-2xl text-zinc-600 group-hover:text-sky-400/50 transition-colors">
                    <SiFlutter />
                    <SiFirebase />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
