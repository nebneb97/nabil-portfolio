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
  title: "My Education",
  description:
    "Completed a Computer Science degree specialising in Netcentric Computing. Coursework covered web/mobile development, cybersecurity, and network systems.",
  items: [
    {
      institution: "Universiti Teknologi MARA (UiTM)",
      degree: "Bachelor of Computer Science (Hons.) Netcentric Computing, CGPA 3.53",
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

const tabTriggerClass =
  "w-full text-left px-5 py-3 rounded-lg text-sm font-medium text-zinc-600 bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-200 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen py-8"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-3">
            Nabil{" "}
            <span className="text-indigo-500">Adib</span>
          </h1>
          <p className="text-lg text-zinc-500">
            Frontend Developer &amp; Computer Science Graduate
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-10">
          <TabsList className="flex flex-col w-full max-w-[280px] mx-auto xl:mx-0 gap-2 bg-transparent p-0 h-auto">
            {["about", "education", "skills", "experience", "projects"].map((tab) => (
              <TabsTrigger key={tab} value={tab} className={tabTriggerClass}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold text-zinc-900">{experience.title}</h3>
                <p className="max-w-[600px] text-zinc-500 mx-auto xl:mx-0 text-sm leading-relaxed">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-center items-center lg:items-start gap-2 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-indigo-500 text-sm font-medium">
                          {item.duration}
                        </span>
                        <h3 className="text-base font-semibold text-zinc-800 max-w-[260px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <p className="text-zinc-500 text-sm">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Projects */}
            <TabsContent value="projects">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold text-zinc-900">Projects</h3>
                <p className="max-w-[600px] text-zinc-500 mx-auto xl:mx-0 text-sm leading-relaxed">
                  Real-world apps and platforms built with modern stacks during
                  internships and academic work.
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {projects.map((project, idx) => (
                    <li
                      key={idx}
                      className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-base font-semibold text-zinc-800">
                        {project.title}
                      </h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xl text-indigo-400 pt-1">
                        {project.technologies}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold text-zinc-900">{education.title}</h3>
                <p className="max-w-[600px] text-zinc-500 mx-auto xl:mx-0 text-sm leading-relaxed">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-center items-center lg:items-start gap-2 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-indigo-500 text-sm font-semibold leading-snug text-center lg:text-left">
                          {item.degree}
                        </span>
                        <span className="text-zinc-400 text-sm">{item.duration}</span>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <p className="text-zinc-500 text-sm">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold text-zinc-900">{skills.title}</h3>
                <p className="max-w-[600px] text-zinc-500 mx-auto xl:mx-0 text-sm leading-relaxed">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[130px] bg-white border border-zinc-200 rounded-xl flex justify-center items-center group shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                            <div className="text-5xl text-zinc-400 group-hover:text-indigo-500 transition-colors duration-300">
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

            {/* About */}
            <TabsContent value="about">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold text-zinc-900">{about.title}</h3>
                <p className="max-w-[680px] text-zinc-500 mx-auto xl:mx-0 text-sm leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    const isLink = item.fieldName.toLowerCase() === "github";
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-3"
                      >
                        <span className="text-zinc-400 text-sm">{item.fieldName}</span>
                        {isLink ? (
                          <a
                            href={item.fieldValue}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 hover:underline text-sm"
                          >
                            {item.fieldValue.replace("https://", "")}
                          </a>
                        ) : (
                          <span className="text-zinc-700 font-medium text-sm">{item.fieldValue}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 text-center xl:text-left">
                  <Link href="/assets/RESUME NABIL ADIB.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="uppercase text-sm">My Resume</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
