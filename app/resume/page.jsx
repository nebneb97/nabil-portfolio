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
import { FiDownload, FiTerminal } from "react-icons/fi";
import { motion } from "framer-motion";

const info = [
  { label: "Name", value: "Nabil Adib" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Email", value: "nabiladib70@gmail.com" },
  { label: "Phone", value: "019-2075390" },
  { label: "Location", value: "Selangor, MY" },
  { label: "Languages", value: "English, Malay" },
  { label: "GitHub", value: "nebneb97", href: "https://github.com/nebneb97" },
  { label: "LinkedIn", value: "nabiladib", href: "https://linkedin.com/in/nabiladib" },
];

const experience = [
  {
    company: "EBH IT Solutions",
    location: "Seri Kembangan, Selangor",
    role: "Full Stack Developer",
    duration: "Dec 2025 - Present",
    bullets: [
      "Developed and maintained enterprise web applications using Next.js, React, TypeScript, Node.js, Prisma ORM, and PostgreSQL.",
      "Led planning and development of an enterprise media intelligence platform, including AI-powered analysis, social listening scraping via Apify, and reporting across dashboard, analytics, and administration modules.",
      "Developed REST APIs, database schemas, authentication, and RBAC; managed AWS deployments across Amplify, EC2, Elastic Beanstalk, S3, Cognito, and Cloudflare.",
      "Supervised and mentored three software development interns by assigning tasks, reviewing progress, and providing technical guidance.",
    ],
  },
  {
    company: "Al-Ain IT Consultants Sdn Bhd",
    location: "Bukit Jalil, Selangor",
    role: "Frontend Developer Intern",
    duration: "Mar 2024 - Jul 2024",
    bullets: [
      "Developed a cloud-based software testing platform using Next.js, TypeScript, and React, enabling smooth test execution and real-time monitoring.",
      "Developed responsive user profile and account management pages as part of the core frontend team.",
      "Integrated GitHub workflows and managed tasks using Taiga, collaborating to debug and resolve 30+ page-specific issues, improving testing reliability by 25%.",
      "Monitored the production website and created 10-15 detailed issue tickets in Taiga, ensuring timely resolution.",
    ],
  },
  {
    company: "Hezmedia Interactive Sdn Bhd",
    location: "Petaling Jaya, Selangor",
    role: "Frontend Developer Intern",
    duration: "Sep 2021 - Feb 2022",
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
    degree: "Bachelor of Computer Science (Hons.) - Netcentric Computing",
    grade: "CGPA 3.53",
    duration: "2022 - 2024",
  },
  {
    institution: "Universiti Teknologi MARA (UiTM), Kuala Terengganu",
    degree: "Diploma in Computer Science",
    grade: "CGPA 3.71",
    duration: "2019 - 2022",
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
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
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
      { icon: <FiTerminal />, name: "Puppeteer" },
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      {/* Editorial Hero */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-12 xl:pb-16">
          <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.16em] mb-6">
            Full Stack Developer — Selangor, Malaysia
          </p>
          <h1 className="text-[clamp(52px,8vw,96px)] font-bold leading-[0.88] tracking-[-0.04em] text-white mb-10">
            Nabil
            <br />
            <span className="text-sky-500">Adib</span>
          </h1>

          {/* Personal statement */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-16">
            <p className="text-zinc-300 text-[17px] leading-[1.7]">
              There&apos;s a specific moment when something you built just clicks
              for someone using it — that&apos;s the feeling I&apos;ve been chasing
              since I wrote my first line of code.
            </p>
            <p className="text-zinc-500 text-[15px] leading-[1.7]">
              I build web and mobile applications with care: clean architecture,
              systems that scale, and software that solves real problems without
              getting in the way. Open to freelance work worth caring about.
            </p>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-14 xl:gap-24 items-start">

          {/* Left: sticky facts table */}
          <div className="xl:sticky xl:top-24">
            <div className="font-mono text-[11px]">
              {info.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-4 border-b border-zinc-800 py-2"
                >
                  <span className="text-zinc-500 uppercase tracking-widest flex-shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 text-right transition-colors truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white text-right">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href="/assets/RESUME_NABIL%20ADIB_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 bg-white text-zinc-950 hover:bg-sky-500 hover:text-white py-4 px-6 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
            >
              Download CV
              <FiDownload className="text-sm" />
            </a>

            <div className="mt-6 border border-zinc-800 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse flex-shrink-0" />
                <span className="font-mono text-sky-500 text-[10px] uppercase tracking-widest">
                  Available
                </span>
              </div>
              <p className="font-mono text-zinc-500 text-[11px] leading-relaxed">
                Open to freelance projects and select full-time roles.
              </p>
            </div>
          </div>

          {/* Right: main content sections */}
          <div className="flex flex-col gap-16">

            {/* In Brief */}
            <div className="border-b border-zinc-800 pb-10">
              <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] border-b border-white pb-3 mb-8">
                In Brief
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Started with a Diploma in Computer Science, finished a Degree in Netcentric Computing at UiTM.",
                  "Found my footing in full stack development - where design decisions have real consequences.",
                  "Currently leading feature development and mentoring interns at an enterprise software company.",
                  "I build things because seeing someone use what I made, and watching it actually help them, never gets old.",
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-3 text-zinc-400 text-[14px] leading-relaxed"
                  >
                    <span className="font-mono text-zinc-700 flex-shrink-0 mt-px">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] border-b border-white pb-3">
                Experience
              </p>
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="grid grid-cols-1 md:grid-cols-[1.4fr_3fr] gap-5 md:gap-8 border-b border-zinc-800 py-8"
                >
                  <div className="font-mono text-[11px] leading-[2] text-zinc-500">
                    <div>{item.duration}</div>
                    <div>{item.location}</div>
                    {item.duration.includes("Present") && (
                      <div className="text-sky-500 mt-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse inline-block flex-shrink-0" />
                        Current
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight tracking-[-0.025em] mb-1">
                      {item.role}
                    </h3>
                    <p className="text-zinc-500 text-sm mb-5">{item.company}</p>
                    {item.bullets && (
                      <ul className="flex flex-col gap-2.5">
                        {item.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-zinc-400 text-[14px] leading-relaxed"
                          >
                            <span className="text-sky-500 font-mono flex-shrink-0 mt-px">
                              -
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div>
              <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] border-b border-white pb-3">
                Education
              </p>
              {education.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1.4fr_3fr] gap-5 md:gap-8 border-b border-zinc-800 py-8"
                >
                  <div className="font-mono text-[11px] leading-[2] text-zinc-500">
                    <div>{item.duration}</div>
                    <div className="text-sky-400">{item.grade}</div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug tracking-tight mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-zinc-500 text-sm">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] border-b border-white pb-3 mb-8">
                Skills & Technologies
              </p>
              <div className="flex flex-col gap-8">
                {skillGroups.map((group, gi) => (
                  <div key={gi}>
                    <p className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-3">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 border border-zinc-800 hover:border-sky-500/40 hover:bg-sky-500/5 hover:text-white px-4 py-2 text-sm text-zinc-400 transition-all duration-200 cursor-default"
                        >
                          <span className="text-[15px] text-zinc-500">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
