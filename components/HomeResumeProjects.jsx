"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeResumeProjects = () => {
  return (
    <section className="mt-10 flex flex-col gap-6">
      {/* About Me */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 p-8 xl:p-12 rounded-2xl shadow-sm grid xl:grid-cols-[1fr_5fr] gap-8 xl:divide-x xl:divide-zinc-100"
      >
        <div className="flex items-start">
          <h2 className="text-2xl font-bold text-indigo-500">
            About<br />Me
          </h2>
        </div>
        <div className="xl:pl-8">
          <p className="text-zinc-600 mb-5 leading-relaxed">
            Computer Science graduate with a strong foundation in Networking and
            Cybersecurity, and hands-on experience in mobile and web application
            development. Passionate about building real-world solutions and
            contributing to collaborative, tech-driven environments.
          </p>
          <ul className="text-zinc-500 space-y-1.5 text-sm">
            <li><strong className="text-zinc-700">Name:</strong> Nabil Adib</li>
            <li><strong className="text-zinc-700">Experience:</strong> 2 Internships</li>
            <li><strong className="text-zinc-700">Email:</strong> nabiladib70@gmail.com</li>
            <li>
              <strong className="text-zinc-700">GitHub:</strong>{" "}
              <a
                href="https://github.com/nebneb97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                github.com/nebneb97
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 p-8 xl:p-12 rounded-2xl shadow-sm grid xl:grid-cols-[5fr_1fr] gap-8 xl:divide-x xl:divide-zinc-100"
      >
        <div className="order-2 xl:order-1 xl:pr-8">
          <p className="text-zinc-500 mb-5 text-sm leading-relaxed">
            Experienced with modern web and mobile development tools. Skilled in
            frontend architecture, UI frameworks, and collaborative workflows.
          </p>
          <div className="flex flex-wrap gap-4 text-3xl text-indigo-400">
            <SiHtml5 title="HTML5" className="hover:text-indigo-600 transition-colors" />
            <SiCss3 title="CSS3" className="hover:text-indigo-600 transition-colors" />
            <SiJavascript title="JavaScript" className="hover:text-indigo-600 transition-colors" />
            <SiReact title="React" className="hover:text-indigo-600 transition-colors" />
            <SiNextdotjs title="Next.js" className="hover:text-indigo-600 transition-colors" />
            <SiTailwindcss title="Tailwind CSS" className="hover:text-indigo-600 transition-colors" />
            <SiNodedotjs title="Node.js" className="hover:text-indigo-600 transition-colors" />
            <SiFirebase title="Firebase" className="hover:text-indigo-600 transition-colors" />
            <SiPrisma title="Prisma" className="hover:text-indigo-600 transition-colors" />
            <SiFlutter title="Flutter" className="hover:text-indigo-600 transition-colors" />
            <SiTypescript title="TypeScript" className="hover:text-indigo-600 transition-colors" />
          </div>
        </div>
        <div className="order-1 xl:order-2 xl:pl-8 flex items-start">
          <h2 className="text-2xl font-bold text-indigo-500">Skills</h2>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 p-8 xl:p-12 rounded-2xl shadow-sm grid xl:grid-cols-[1fr_5fr] gap-8 xl:divide-x xl:divide-zinc-100"
      >
        <div className="flex items-start">
          <h2 className="text-2xl font-bold text-indigo-500">Projects</h2>
        </div>
        <div className="xl:pl-8 flex flex-col gap-6">
          <div>
            <h4 className="text-base font-semibold text-zinc-800 mb-1">
              Cloud-based Software Testing Platform
            </h4>
            <p className="text-zinc-500 text-sm mb-2">
              A platform to request and manage software testing tasks with
              real-time status and role-based control.
            </p>
            <div className="flex flex-wrap gap-2 text-lg text-indigo-400">
              <SiNextdotjs title="Next.js" />
              <SiPrisma title="Prisma" />
              <SiTailwindcss title="Tailwind" />
              <SiTypescript title="TypeScript" />
            </div>
          </div>
          <div className="border-t border-zinc-100 pt-4">
            <h4 className="text-base font-semibold text-zinc-800 mb-1">
              Equip&amp;Go Rental App
            </h4>
            <p className="text-zinc-500 text-sm mb-2">
              A mobile app for renting outdoor activity equipment based on user
              location and availability.
            </p>
            <div className="flex flex-wrap gap-2 text-lg text-indigo-400">
              <SiFlutter title="Flutter" />
              <SiFirebase title="Firebase" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="text-center pt-2">
        <Link href="/resume" passHref>
          <Button variant="outline" className="mt-2 uppercase">See More</Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeResumeProjects;
