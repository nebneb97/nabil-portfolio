"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
} from "react-icons/si";

//resume data
const about = {
  title: "About Me",
  description:
    "Computer Science graduate with a strong foundation in Networking and Cybersecurity, and hands-on experience in mobile and web application development. Passionate about building real-world solutions and contributing to collaborative, tech-driven environments.",
  info: [
    { fieldName: "Name", fieldValue: "Nabil Adib" },
    { fieldName: "Phone", fieldValue: "(+60) 19-207 5390" },
    { fieldName: "Experience", fieldValue: "2 Internships" },
    { fieldName: "GitHub", fieldValue: "github.com/nebneb97" },
    { fieldName: "Nationality", fieldValue: "Malaysian" },
    { fieldName: "Email", fieldValue: "nabiladib70@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

//experience data
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

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
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

//skills data
const skills = {
  title: "My skills",
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
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPrisma />, name: "Prisma" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div>
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*projects */}
            <TabsContent value="projects" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Projects</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  Real-world apps and platforms built with modern stacks during
                  internships and academic work.
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  <li className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-green-400">
                      Cloud-based Software Testing Platform
                    </h4>
                    <p className="text-white/70 text-sm">
                      A platform to request and manage software testing tasks
                      with real-time status and role-based control.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xl text-green-500">
                      <SiNextdotjs title="Next.js" />
                      <FaReact title="React" />
                      <SiPrisma title="Prisma" />
                      <SiTailwindcss title="Tailwind" />
                    </div>
                  </li>
                  <li className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-green-400">
                      Equip&Go
                    </h4>
                    <p className="text-white/70 text-sm">
                      A mobile app for renting outdoor activity equipment based
                      on user location and availability.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xl text-green-500">
                      <FaReact title="Flutter" />
                      <SiFirebase title="Firebase" />
                      <FaFigma title="Figma" />
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>

            {/*education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-500">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div>
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
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
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <div className="mt-10 text-center xl:text-left">
          <Link href="/assets/RESUME NABIL ADIB.pdf" download>
            <Button className="uppercase text-sm">
              Download Full CV (PDF)
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
