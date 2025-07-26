"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsLink, BsGithub, BsArrowDownRight } from "react-icons/bs";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
} from "react-icons/si";

import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Icon } from "lucide-react";

const about = [
  {
    num: "01",
    title: "Web App Development",
    description:
      "Designs and builds responsive, scalable web applications using modern frameworks like Next.js, React, and Tailwind CSS, suitable for dashboards, portfolios, and business tools.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Delivers cross-platform mobile applications using Flutter and Firebase, optimized for real-time features, location-based services, and multi-role access systems.",
    href: "",
  },
  {
    num: "03",
    title: "Frontend Implementation",
    description:
      "Translates UI designs into interactive, accessible interfaces using Tailwind CSS, DaisyUI, and component-based architecture, ensuring consistency and responsiveness across devices.",
    href: "",
  },
  {
    num: "04",
    title: "Bug Fixing & QA Support",
    description:
      "Provides frontend debugging, issue tracking, and collaborative testing support to enhance system stability, performance, and overall user experience.",
    href: "",
  },
];

const projects = [
  {
    num: "01",
    category: "Frontend Project",
    title: "Project 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "Html 5", Icon: FaHtml5 },
      { name: "Css3", Icon: FaCss3 },
      { name: "Javascript", Icon: FaJs },
      { name: "React.js", Icon: FaReact },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind.css", Icon: SiTailwindcss },
      { name: "Node.js", Icon: FaNodeJs },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend Web",
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind.css", Icon: SiTailwindcss },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Solutions = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center xl:py-0 px-5 xl:px-10 xl:mt-30"
    >
      <div className="container mx-auto">
        {/* Solutions Section Title */}
        <h2 className="text-3xl font-bold text-center text-white py-10">
          What I Offer
        </h2>
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {about.map((about, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {about.num}
                  </div>
                  <Link
                    href={about.href}
                    className="w-[80px] h-[80px] rounded-full bg-white text-outline group-hover:bg-green-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-slate-950 text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500">
                  {about.title}
                </h2>
                <p className="text-white/60">{about.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Projects Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mt-16 sm:mt-24 mb-6 sm:mb-8">
          Recent Projects
        </h2>

        <div className="flex flex-col-reverse xl:flex-row xl:gap-[30px]">
          {/* Text & Info Block */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between mt-10 xl:mt-0">
            <div className="flex flex-col gap-6 sm:gap-[30px]">
              <div className="text-6xl sm:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-xl sm:text-3xl xl:text-[42px] font-bold leading-tight text-white">
                {project.category}
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                {project.description}
              </p>

              {/* Stack list */}
              <ul className="flex flex-wrap gap-2 sm:gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm sm:text-xl text-emerald-400"
                  >
                    {item.Icon && <item.Icon className="text-lg sm:text-2xl" />}
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20 mt-4"></div>

              <div className="flex items-center gap-4 mt-2">
                <Link href={project.live} aria-label="View Live Project">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsLink className="text-white text-xl sm:text-3xl group-hover:text-emerald-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} aria-label="View Github Repository">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl sm:text-3xl group-hover:text-emerald-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Slider Block */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              className="h-[300px] sm:h-[400px] xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    className="h-full relative group flex justify-center items-center bg-pink-50/20"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded"
                        alt="project"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[10px] sm:bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-emerald-400 hover:bg-emerald-600 w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all rounded"
                iconsStyles="text-primary text-[20px] sm:text-[22px]"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solutions;
