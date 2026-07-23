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
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const info = [
  { label: "Name", value: "Nabil Adib" },
  { label: "Experience", value: "2 Internships" },
  { label: "Email", value: "nabiladib70@gmail.com" },
  { label: "Nationality", value: "Malaysian" },
  { label: "Languages", value: "English, Malay" },
  { label: "GitHub", value: "github.com/nebneb97", href: "https://github.com/nebneb97" },
];

const experience = [
  {
    company: "Al-Ain IT Consultants Sdn Bhd",
    role: "Frontend Developer Intern",
    duration: "July 2024 – Present",
  },
  {
    company: "Hezmedia Interactive Sdn Bhd",
    role: "Frontend Developer Intern",
    duration: "February 2022 – July 2022",
  },
];

const education = [
  {
    institution: "Universiti Teknologi MARA (UiTM)",
    degree: "Bachelor of Computer Science (Hons.) Netcentric Computing",
    grade: "CGPA 3.53",
    duration: "2022 – 2024",
  },
  {
    institution: "Universiti Teknologi MARA (UiTM)",
    degree: "Diploma in Computer Science",
    grade: "CGPA 3.71",
    duration: "2019 – 2022",
  },
];

const skills = [
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
];

const SectionLabel = ({ children }) => (
  <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-3">
    {children}
  </p>
);

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
      className="container mx-auto px-6 xl:px-12 py-16 xl:py-20 max-w-5xl"
    >
      {/* Header */}
      <div className="mb-16">
        <SectionLabel>About Me</SectionLabel>
        <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6">
          Nabil <span className="text-orange-500">Adib</span>
        </h1>
        <p className="text-zinc-400 leading-relaxed max-w-2xl text-base mb-8">
          Computer Science graduate with a strong foundation in Networking and
          Cybersecurity, and hands-on experience in mobile and web application
          development. Passionate about building real-world solutions and
          contributing to collaborative, tech-driven environments.
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {info.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3"
            >
              <p className="text-zinc-500 text-xs mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white text-sm font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <a
          href="/assets/RESUME NABIL ADIB.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors uppercase"
        >
          Download Resume
        </a>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-8">
          Work History
        </h2>
        <div className="relative border-l border-zinc-800 pl-8 flex flex-col gap-8">
          {experience.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[37px] w-3 h-3 rounded-full bg-orange-500 border-2 border-[#0a0a0a] top-1" />
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wide">
                {item.duration}
              </span>
              <h3 className="text-white font-semibold text-lg mt-1">
                {item.role}
              </h3>
              <p className="text-zinc-500 text-sm mt-0.5">{item.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <SectionLabel>Education</SectionLabel>
        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-8">
          Academic Background
        </h2>
        <div className="relative border-l border-zinc-800 pl-8 flex flex-col gap-8">
          {education.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[37px] w-3 h-3 rounded-full bg-orange-500 border-2 border-[#0a0a0a] top-1" />
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wide">
                {item.duration}
              </span>
              <h3 className="text-white font-semibold text-lg mt-1">
                {item.degree}
              </h3>
              <p className="text-zinc-400 text-sm mt-0.5">
                {item.institution} · {item.grade}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-8">
          Technologies
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          {skills.map((skill, i) => (
            <TooltipProvider key={i} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 rounded-xl h-20 flex flex-col items-center justify-center gap-2 cursor-default transition-all duration-200 group">
                    <span className="text-3xl text-zinc-500 group-hover:text-orange-500 transition-colors duration-200">
                      {skill.icon}
                    </span>
                    <span className="text-zinc-600 group-hover:text-zinc-400 text-[10px] font-medium transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
