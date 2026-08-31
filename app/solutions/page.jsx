"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
} from "react-icons/si";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "I build end-to-end web applications — responsive Next.js frontends, Node.js backends, REST APIs, database design, and authentication. This is where most of my professional time goes, and where I've learned what it actually takes to ship something people depend on.",
    aside: "MCC, ePIBG, and this portfolio — all built this way.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    num: "02",
    title: "Backend & Database",
    description:
      "I design and develop scalable backend services, RESTful APIs, and database schemas using Node.js, Prisma ORM, and PostgreSQL. The architectural decisions here have real consequences — I take them seriously.",
    aside: "RBAC, auth flows, schema design — the part most people don't see but everyone feels.",
    stack: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Prisma ORM", Icon: SiPrisma },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "I build cross-platform mobile apps using Flutter and Firebase. I built Equip&Go from scratch — Google Maps, real-time data, push notifications, multi-role access. Cross-platform Flutter is genuinely one of my favourite things to work on.",
    aside: "One codebase, two platforms, real users.",
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    num: "04",
    title: "Cloud & Deployment",
    description:
      "I deploy and manage production applications on AWS and Vercel — CI/CD setup, environment configuration, and deployment verification. Shipping MCC across seven AWS services taught me more about production infrastructure than anything else.",
    aside: "Amplify, EC2, Elastic Beanstalk, S3, Cognito — done it in production.",
    stack: [
      { name: "AWS", Icon: SiAmazonwebservices },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
];

const Solutions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">
          What I Do
        </p>
        <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">
          Solutions
        </h1>
        <p className="text-zinc-400 max-w-xl text-base">
          I don&apos;t take on everything. These are the areas I&apos;ve worked
          in professionally, care about doing well, and can speak to honestly.
        </p>
      </div>

      {/* Service cards — bento layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {services.map((service, index) => {
          const spanClass =
            index === 0 || index === 3 ? "xl:col-span-2" : "xl:col-span-1";
          const isLarge = index === 0 || index === 3;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`${spanClass} group relative bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 rounded-2xl p-6 xl:p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[220px]`}
            >
              {/* Glow blob */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-sky-500/8 transition-colors duration-500" />

              {/* Background number */}
              <span className="font-mono absolute bottom-4 right-6 text-8xl font-black text-zinc-800/40 select-none group-hover:text-sky-500/8 transition-colors">
                {service.num}
              </span>

              <div className="flex flex-col gap-3 relative">
                <h3 className={`font-bold text-white group-hover:text-sky-400 transition-colors ${isLarge ? "text-2xl" : "text-xl"}`}>
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                  {service.description}
                </p>
                {service.aside && (
                  <p className="font-mono text-zinc-600 text-[11px] leading-relaxed">
                    — {service.aside}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.stack.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-800/80 border border-zinc-700 group-hover:border-sky-500/20 px-3 py-1.5 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <item.Icon className="text-sm" />
                    {item.name}
                  </span>
                ))}
              </div>

              <Link
                href="/contacts"
                className="inline-flex items-center gap-1.5 text-sky-500 hover:text-sky-400 text-sm font-medium transition-colors w-fit"
              >
                Let&apos;s work together
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Solutions;
