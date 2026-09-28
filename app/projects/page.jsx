"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "Enterprise media intelligence platform for monitoring, analysing, and reporting news coverage across multiple sources. Led planning and development, designed Prisma schemas, implemented authentication and RBAC, and integrated frontend and backend modules via REST APIs. Deployed on AWS across seven services with Cloudflare.",
    note: "The project where I learned what 'production at scale' actually means. My name was on the architecture decisions — that changes how carefully you think.",
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
      "Digital school management platform supporting parent engagement, school administration, attendance, payments, and activity management. Led the Digital Consent and Treasurer modules end-to-end — from planning through deployment on AWS Amplify.",
    note: "The Treasurer module taught me how many edge cases exist in anything that touches money. Worth every hour of careful testing.",
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
      "Platform built during my internship at Al-Ain IT Consultants to request and manage software testing tasks. Real-time status tracking, role-based access control, and a structured request/approval workflow. Resolved 30+ frontend issues, improving testing reliability by 25%.",
    note: "My first time inheriting a codebase I didn't write. Resolving 30+ issues taught me to read other people's code before I touch anything.",
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
      "Cross-platform Flutter mobile app for renting outdoor activity equipment. Users can discover, book, and manage rentals based on location and availability. Google Maps integration, Firebase real-time data, push notifications, and multi-role access for users, vendors, and admins.",
    note: "Built this one because the idea was fun. One codebase, two platforms, real users — still one of my favourites to talk about.",
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/nebneb97",
  },
];

const isPlaceholder = (img) => !img || img.includes("thumb");

const filters = ["All", "Web", "Mobile"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const openParam = params.get("open");
    if (openParam) {
      const idx = projects.findIndex((p) => p.num === openParam);
      if (idx !== -1) setOpenIndex(idx);
    }
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : activeFilter === "Mobile"
      ? projects.filter((p) => p.category === "Mobile App")
      : projects.filter((p) => p.category.includes("Web"));

  const handleFilter = (f) => {
    setActiveFilter(f);
    setOpenIndex(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      {/* Editorial hero */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-12 xl:pb-16">
          <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.16em] mb-6">
            My Work
          </p>
          <h1 className="text-[clamp(52px,8vw,96px)] font-bold leading-[0.88] tracking-[-0.04em] text-zinc-900 dark:text-white mb-10">
            Projects
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg text-[15px] leading-[1.7]">
            Some led from scratch, others as part of a team, one just because
            the idea was worth it. All shipped to real users.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-12 xl:py-16">

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-950 dark:border-white"
                  : "border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="border-t border-zinc-200 dark:border-zinc-800">
          <AnimatePresence initial={false}>
            {filtered.map((project, index) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Row header */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full border-b border-zinc-200 dark:border-zinc-800 py-6 px-2 flex items-center gap-6 xl:gap-10 group hover:bg-zinc-100/60 dark:hover:bg-zinc-900/40 transition-colors text-left"
                >
                  <span className="font-mono text-zinc-400 dark:text-zinc-600 text-sm w-8 flex-shrink-0">
                    {project.num}
                  </span>
                  <h2
                    className={`text-xl xl:text-2xl font-bold flex-1 transition-colors duration-200 ${
                      openIndex === index
                        ? "text-sky-600 dark:text-sky-400"
                        : "text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                    }`}
                  >
                    {project.title}
                  </h2>
                  <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest hidden xl:block flex-shrink-0">
                    {project.category}
                  </span>
                  <span
                    className={`text-2xl font-light flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? "text-sky-600 dark:text-sky-400 rotate-45"
                        : "text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-b border-zinc-200 dark:border-zinc-800 grid grid-cols-1 xl:grid-cols-2">
                        {/* Screenshot or placeholder */}
                        <div className="relative h-48 xl:h-[420px] bg-white dark:bg-zinc-950 overflow-hidden border-r border-zinc-200 dark:border-zinc-800">
                          {!isPlaceholder(project.image) ? (
                            <Image
                              src={project.image}
                              fill
                              alt={project.title}
                              style={{
                                objectFit: "contain",
                                objectPosition: "center top",
                                padding: "16px",
                              }}
                              className="opacity-95 hover:opacity-100 transition-opacity duration-300"
                              sizes="(max-width: 1280px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center border-r border-zinc-200 dark:border-zinc-800">
                              <span className="font-mono text-zinc-200 dark:text-zinc-800 text-8xl font-black select-none">
                                {project.num}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="bg-white dark:bg-zinc-900 p-6 xl:p-10 flex flex-col justify-between">
                          <div className="flex flex-col gap-5">
                            <span className="font-mono text-sky-600 dark:text-sky-400 text-[10px] uppercase tracking-widest">
                              {project.category}
                            </span>
                            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                              {project.description}
                            </p>
                            {project.note && (
                              <p className="font-mono text-zinc-500 text-[11px] leading-relaxed border-l-2 border-zinc-300 dark:border-zinc-700 pl-3">
                                {project.note}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 pt-1">
                              {project.stack.map((item, i) => (
                                <span
                                  key={i}
                                  className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white px-3 py-1.5 transition-colors cursor-default"
                                >
                                  <item.Icon className="text-sm" />
                                  {item.name}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 px-4 py-2.5 transition-colors"
                              >
                                <BsGithub className="text-sm" />
                                GitHub
                              </a>
                            )}
                            {project.live ? (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-zinc-900 text-white hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-500 dark:hover:text-white px-4 py-2.5 transition-colors"
                              >
                                <BsLink className="text-sm" />
                                Live Demo
                              </a>
                            ) : (
                              <span className="font-mono text-zinc-400 dark:text-zinc-600 text-[10px] uppercase tracking-widest">
                                Demo on request
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
