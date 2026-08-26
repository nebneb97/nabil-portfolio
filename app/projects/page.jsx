"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
  SiPostgresql,
  SiAmazonwebservices,
} from "react-icons/si";
import { BsGithub, BsLink } from "react-icons/bs";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Enterprise Web App",
    title: "Media Command Centre (MCC)",
    description:
      "Enterprise media intelligence platform for monitoring, analysing, and reporting news coverage across multiple sources. Led planning and development, designed Prisma schemas, implemented authentication and RBAC, and integrated frontend and backend modules via REST APIs. Deployed on AWS (Amplify, EC2, Elastic Beanstalk, S3, Cognito) with Cloudflare.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: FaReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Prisma", Icon: SiPrisma },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "AWS", Icon: SiAmazonwebservices },
    ],
    image: "/assets/Image MCC LOGIN.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Enterprise Web App",
    title: "ePIBG – Digital School Platform",
    description:
      "Digital school management platform supporting parent engagement, school administration, attendance, payments, and activity management. Led development of the Digital Consent module and Treasurer module, integrated frontend with backend REST APIs, and performed functional testing and deployment verification through AWS Amplify.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: FaReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Prisma", Icon: SiPrisma },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "AWS", Icon: SiAmazonwebservices },
    ],
    image: "/assets/Gambar EPIBG.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack Web App",
    title: "Cloud-based Testing Platform",
    description:
      "Platform built during internship at Al-Ain IT Consultants to request and manage software testing tasks. Features real-time status tracking, role-based access control (admin, tester, client), and a structured request/approval workflow. Resolved 30+ frontend issues, improving testing reliability by 25%.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: FaReact },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "TypeScript", Icon: SiTypescript },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/nebneb97",
  },
  {
    num: "04",
    category: "Mobile App",
    title: "Equip&Go Rental App",
    description:
      "Cross-platform Flutter mobile app for renting outdoor activity equipment. Users can discover, book, and manage rentals based on location and availability. Features multi-role access for users, vendors, and admins, Google Maps integration, Firebase real-time data, and push notifications for booking updates.",
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/nebneb97",
  },
];

const GradientPlaceholder = ({ num }) => (
  <div className="relative h-56 xl:h-auto bg-gradient-to-br from-zinc-900 via-zinc-800/50 to-sky-950/30 flex items-center justify-center">
    <span className="text-7xl font-black text-white/5 select-none">{num}</span>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)]" />
  </div>
);

const filters = ["All", "Web", "Mobile"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : activeFilter === "Mobile"
      ? projects.filter((p) => p.category === "Mobile App")
      : projects.filter((p) => p.category.includes("Web"));

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20"
    >
      {/* Heading */}
      <div className="mb-10">
        <p className="font-mono text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3">
          My Work
        </p>
        <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">
          Projects
        </h1>
        <p className="text-zinc-400 max-w-xl text-base">
          Enterprise platforms, fullstack web apps, and mobile applications —
          built in production and during internships.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`font-mono text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 ${
              activeFilter === f
                ? "bg-sky-500 border-sky-500 text-white"
                : "border-zinc-700 text-zinc-400 hover:border-sky-500/50 hover:text-sky-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-8">
        {filtered.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="group grid grid-cols-1 xl:grid-cols-2 gap-0 bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/20 rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Image or gradient placeholder */}
            <div
              className={`relative h-56 xl:h-[360px] overflow-hidden ${
                index % 2 === 1 ? "xl:order-last" : ""
              }`}
            >
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    fill
                    alt={project.title}
                    className="opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 1280px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-5xl font-black text-white/10 select-none">
                    {project.num}
                  </span>
                </>
              ) : (
                <GradientPlaceholder num={project.num} />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 sm:p-6 xl:p-8">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sky-400 text-xs font-semibold uppercase tracking-widest">
                  {project.category}
                </span>
                <h2 className="text-xl xl:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full"
                    >
                      <item.Icon className="text-sm" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-sky-400 border border-zinc-700 hover:border-sky-400/50 px-4 py-2 rounded-full transition-all"
                  >
                    <BsGithub className="text-base" />
                    GitHub
                  </a>
                )}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="flex items-center gap-2 text-sm font-medium text-white bg-sky-400 hover:bg-sky-500 px-4 py-2 rounded-full transition-colors"
                  >
                    <BsLink className="text-base" />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 border border-zinc-800 px-3 py-1.5 rounded-full">
                    Demo on request
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
