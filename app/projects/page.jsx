"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
} from "react-icons/si";
import { BsGithub, BsLink } from "react-icons/bs";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Fullstack Web App",
    title: "Cloud-based Testing Platform",
    description:
      "A platform built during my internship at Al-Ain IT Consultants to request and manage software testing tasks. Features real-time status tracking, role-based access control (admin, tester, client), and a structured request/approval workflow.",
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
    num: "02",
    category: "Mobile App",
    title: "Equip&Go Rental App",
    description:
      "A cross-platform Flutter mobile application for renting outdoor activity equipment. Users can browse equipment by location and availability, manage bookings, and track rental status. Built with Firebase for real-time data and authentication.",
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/nebneb97",
  },
  {
    num: "03",
    category: "Frontend Web",
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js 15, Tailwind CSS, and Framer Motion. Features smooth page transitions, a custom cursor, typewriter animation, and a fully responsive layout across all screen sizes.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: FaReact },
      { name: "TypeScript", Icon: SiTypescript },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/nebneb97/nabil-portfolio",
  },
];

const ProjectsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
      className="container mx-auto px-6 xl:px-12 py-16 xl:py-20"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">
          My Work
        </p>
        <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">
          Projects
        </h1>
        <p className="text-zinc-400 max-w-xl text-base">
          Real-world applications built during internships and personal
          exploration — from fullstack platforms to mobile apps.
        </p>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="group grid grid-cols-1 xl:grid-cols-2 gap-0 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Image */}
            <div
              className={`relative h-56 xl:h-auto bg-zinc-900 ${
                index % 2 === 1 ? "xl:order-last" : ""
              }`}
            >
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-5xl font-black text-white/10 select-none">
                {project.num}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8">
              <div className="flex flex-col gap-4">
                <span className="text-sky-500 text-xs font-semibold uppercase tracking-widest">
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-sky-500 border border-zinc-700 hover:border-sky-500/50 px-4 py-2 rounded-full transition-all"
                >
                  <BsGithub className="text-base" />
                  GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="flex items-center gap-2 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-full transition-colors"
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
