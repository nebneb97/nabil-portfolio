"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Resume data
const about = {
  title: "About Me",
  description:
    "Computer Science graduate with a strong foundation in Networking and Cybersecurity, and hands-on experience in mobile and web application development. Passionate about building real-world solutions and contributing to collaborative, tech-driven environments.",
  info: [
    { fieldName: "Name", fieldValue: "Nabil Adib" },
    { fieldName: "Experience", fieldValue: "2 Internships" },
    { fieldName: "Email", fieldValue: "nabiladib70@gmail.com" },
    { fieldName: "GitHub", fieldValue: "https://github.com/nebneb97" },
    { fieldName: "Nationality", fieldValue: "Malaysian" },
    { fieldName: "Languages", fieldValue: "English, Malay" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Hands-on frontend development experience from real-world internships. Contributed to production-ready systems, UI building, bug tracking, and team collaboration using modern tools.",
  items: [
    {
      company: "Al-Ain IT Consultants Sdn Bhd",
      position: "Frontend Developer Intern",
      duration: "July 2024 – Present",
    },
    {
      company: "Hezmedia Interactive Sdn Bhd",
      position: "Frontend Developer Intern",
      duration: "February 2022 – July 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Completed a Computer Science degree specializing in Netcentric Computing. Coursework covered web/mobile development, cybersecurity, and network systems.",
  items: [
    {
      institution: "Universiti Teknologi MARA (UiTM)",
      degree:
        "Bachelor of Computer Science (Hons.) Netcentric Computing, CGPA 3.53",
      duration: "2022 – 2024",
    },
    {
      institution: "Universiti Teknologi MARA (UiTM)",
      degree: "Diploma in Computer Science, CGPA 3.71",
      duration: "2019 – 2022",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Experienced with modern web and mobile development tools. Skilled in frontend architecture, UI frameworks, and collaborative development workflows.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiTypescript />, name: "TypeScript" },
  ],
};

const projects = [
  {
    title: "Cloud-based Software Testing Platform",
    description:
      "A platform to request and manage software testing tasks with real-time status and role-based control.",
    technologies: [
      <SiNextdotjs title="Next.js" key="nextjs" />,
      <FaReact title="React" key="react" />,
      <SiPrisma title="Prisma" key="prisma" />,
      <SiTailwindcss title="Tailwind CSS" key="tailwind" />,
      <SiTypescript title="TypeScript" key="ts" />,
    ],
  },
  {
    title: "Equip&Go Rental App",
    description:
      "A mobile app for renting outdoor activity equipment based on user location and availability.",
    technologies: [
      <SiFlutter title="Flutter" key="flutter" />,
      <SiFirebase title="Firebase" key="firebase" />,
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-screen  from-gray-900 via-gray-800 to-emerald-900/20 py-8"
    >
      <div className="lg:mt-20 container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nabil <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Adib</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">Frontend Developer & Computer Science Graduate</p>
        </div>

        {/* Navigation Tabs */}
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about"
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              About Me
            </TabsTrigger>
            <TabsTrigger value="education"
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills"
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience"
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects"
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Projects
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/50 flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-green-500">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-400" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Projects */}
            <TabsContent value="projects" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Projects</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  Real-world apps and platforms built with modern stacks during
                  internships and academic work.
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {projects.map((project, idx) => (
                    <li key={idx} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/50 flex flex-col gap-4">
                      <h4 className="text-xl font-semibold text-green-400">
                        {project.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xl text-green-500">
                        {project.technologies}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/50 flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-green-500">{item.degree}</span>
                        <span className="text-white/60">{item.duration}</span>
                        <div className="flex items-center gap-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-400" />
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex justify-center items-center group border border-gray-600/50">
                            <div className="text-6xl group-hover:text-green-500 transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[500px] xl:max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    const isLink = item.fieldName.toLowerCase() === "github";

                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        {isLink ? (
                          <a
                            href={item.fieldValue}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-teal-500 hover:underline"
                          >
                            {item.fieldValue.replace("https://", "")}
                          </a>
                        ) : (
                          <span className="text-xl">{item.fieldValue}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-10 text-center xl:text-left">
                <Link href="/assets/RESUME NABIL ADIB.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="uppercase text-sm">
                    <span>My Resume</span>
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;