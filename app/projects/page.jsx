"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsLink, BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

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
      "This portfolio — built with Next.js 15, Tailwind CSS, and Framer Motion. Features smooth page transitions, a custom cursor, typewriter animation, an interactive accordion, and a fully responsive layout across all screen sizes.",
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
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          {/* Info panel */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none mt-8 xl:mt-0">
            <div className="flex flex-col gap-6">
              {/* Number */}
              <div className="text-7xl xl:text-8xl leading-none font-extrabold text-zinc-100">
                {project.num}
              </div>

              {/* Category + title */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-1">
                  {project.category}
                </p>
                <h2 className="text-2xl xl:text-[32px] font-bold leading-tight text-zinc-900">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[480px]">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1.5 text-indigo-500 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <item.Icon className="text-sm" />
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="border-t border-zinc-100" />

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank" aria-label="View live project">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[52px] h-[52px] rounded-full bg-zinc-100 hover:bg-indigo-50 border border-zinc-200 hover:border-indigo-200 flex justify-center items-center group transition-all">
                          <BsLink className="text-zinc-500 text-xl group-hover:text-indigo-500" />
                        </TooltipTrigger>
                        <TooltipContent><p>Live Project</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" aria-label="View GitHub repository">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[52px] h-[52px] rounded-full bg-zinc-100 hover:bg-indigo-50 border border-zinc-200 hover:border-indigo-200 flex justify-center items-center group transition-all">
                          <BsGithub className="text-zinc-500 text-xl group-hover:text-indigo-500" />
                        </TooltipTrigger>
                        <TooltipContent><p>GitHub Repo</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {!project.live && (
                  <span className="text-xs text-zinc-400 italic">Live demo not available</span>
                )}
              </div>
            </div>
          </div>

          {/* Image slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="xl:h-[480px] mb-4 rounded-2xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] xl:h-[480px] relative bg-zinc-100 rounded-2xl overflow-hidden">
                    <Image
                      src={p.image}
                      fill
                      className="object-cover"
                      alt={p.title}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-3 bottom-3 z-20"
                btnStyles="bg-indigo-500 hover:bg-indigo-600 w-[40px] h-[40px] flex justify-center items-center transition-all rounded-lg"
                iconsStyles="text-white text-[18px]"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
