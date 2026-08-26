"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiLaravel,
  SiPhp,
  SiDart,
  SiPostman,
  SiFigma,
  SiAmazonwebservices,
} from "react-icons/si";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const info = [
  { label: "Name", value: "Nabil Adib" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Email", value: "nabiladib70@gmail.com" },
  { label: "Phone", value: "019-2075390" },
  { label: "Location", value: "Selangor, Malaysia" },
  { label: "Languages", value: "English, Malay" },
  { label: "GitHub", value: "github.com/nebneb97", href: "https://github.com/nebneb97" },
  { label: "LinkedIn", value: "linkedin.com/in/nabiladib", href: "https://linkedin.com/in/nabiladib" },
];

const experience = [
  {
    company: "EBH IT Solutions",
    location: "Seri Kembangan, Selangor",
    role: "Full Stack Developer",
    duration: "December 2025 – Present",
    bullets: [
      "Developed and maintained enterprise web applications using Next.js, React, TypeScript, Node.js, Prisma ORM, and PostgreSQL.",
      "Collaborated with the CTO, backend developers, and stakeholders to design, develop, and deliver new features across multiple enterprise projects.",
      "Managed feature development, code reviews, bug fixes, deployment verification, and technical documentation throughout the SDLC.",
      "Supervised and mentored three software development interns by assigning tasks, reviewing progress, and providing technical guidance.",
    ],
  },
  {
    company: "Al-Ain IT Consultants Sdn Bhd",
    location: "Bukit Jalil, Selangor",
    role: "Frontend Developer Intern",
    duration: "March 2024 – July 2024",
    bullets: [
      "Developed a cloud-based software testing platform using Next.js, TypeScript, and React, enabling smooth test execution and real-time monitoring.",
      "Developed responsive user profile and account management pages as part of the core frontend team.",
      "Integrated GitHub workflows and managed tasks using Taiga, collaborating to debug and resolve 30+ page-specific issues, improving testing reliability by 25%.",
      "Monitored the production website and created 10–15 detailed issue tickets in Taiga, ensuring timely resolution.",
    ],
  },
  {
    company: "Hezmedia Interactive Sdn Bhd",
    location: "Petaling Jaya, Selangor",
    role: "Frontend Developer Intern",
    duration: "February 2022 – July 2022",
    bullets: [
      "Developed a responsive WordPress landing page for a mobile application.",
      "Built a FlutterFlow facility management app integrated with Firebase, supporting 100+ daily field records.",
      "Conducted functional testing, identifying and reporting 30+ UI and functional defects, improving application stability.",
    ],
  },
];

const education = [
  {
    institution: "Universiti Teknologi MARA (UiTM), Shah Alam",
    degree: "Bachelor of Computer Science (Hons.) – Netcentric Computing",
    grade: "CGPA 3.53",
    duration: "2022 – 2024",
  },
  {
    institution: "Universiti Teknologi MARA (UiTM), Kuala Terengganu",
    degree: "Diploma in Computer Science",
    grade: "CGPA 3.71",
    duration: "2019 – 2022",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
      { icon: <SiLaravel />, name: "Laravel" },
      { icon: <SiPhp />, name: "PHP" },
      { icon: <FaJava />, name: "Java" },
    ],
  },
  {
    label: "Database",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <SiDart />, name: "Dart" },
    ],
  },
  {
    label: "Cloud & Tools",
    skills: [
      { icon: <SiAmazonwebservices />, name: "AWS" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiFigma />, name: "Figma" },
    ],
  },
];

const SectionLabel = ({ children }) => (
  <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3">
    {children}
  </p>
);

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
      className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20 max-w-5xl"
    >
      {/* Header */}
      <div className="mb-16">
        <SectionLabel>About Me</SectionLabel>
        <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6">
          Nabil <span className="text-sky-400">Adib</span>
        </h1>
        <p className="text-zinc-400 leading-relaxed max-w-2xl text-base mb-8">
          Full Stack Developer with professional experience building enterprise
          web applications using Next.js, React, Node.js, TypeScript, and
          PostgreSQL. Experienced in delivering scalable frontend and backend
          solutions, collaborating with cross-functional teams, and translating
          business requirements into production-ready features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
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
                  className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
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
          className="inline-flex items-center bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors uppercase"
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
        <div className="relative border-l border-zinc-800 pl-8 flex flex-col gap-10">
          {experience.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[37px] w-3 h-3 rounded-full bg-sky-400 border-2 border-[#060608] top-1.5" />
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-sky-400 text-xs font-semibold uppercase tracking-wide">
                  {item.duration}
                </span>
                {item.duration.includes("Present") && (
                  <span className="inline-flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-sky-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg mt-1">
                {item.role}
              </h3>
              <p className="text-zinc-500 text-sm mt-0.5">
                {item.company} · {item.location}
              </p>
              {item.bullets && (
                <ul className="mt-3 flex flex-col gap-2">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2.5 text-zinc-400 text-sm leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-sky-400/60 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
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
              <span className="absolute -left-[37px] w-3 h-3 rounded-full bg-sky-400 border-2 border-[#060608] top-1" />
              <span className="text-sky-400 text-xs font-semibold uppercase tracking-wide">
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
        <div className="flex flex-col gap-8">
          {skillGroups.map((group, gi) => (
            <div key={gi}>
              <p className="font-mono text-zinc-600 text-xs uppercase tracking-widest mb-3">{group.label}</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-7 gap-3">
                {group.skills.map((skill, i) => (
                  <TooltipProvider key={i} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="bg-zinc-900/60 border border-zinc-800 hover:border-sky-400/40 rounded-xl h-16 sm:h-20 flex flex-col items-center justify-center gap-1.5 cursor-default transition-all duration-200 group">
                          <span className="text-2xl text-zinc-500 group-hover:text-sky-400 transition-colors duration-200">
                            {skill.icon}
                          </span>
                          <span className="text-zinc-600 group-hover:text-zinc-400 text-[10px] font-medium transition-colors text-center px-1">
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
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
