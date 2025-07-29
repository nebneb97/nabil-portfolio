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

const HomeResumeProjects = () => {
  return (
    <section className="mt-10 flex flex-col gap-12">
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#232329] p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-teal-500 mb-4">About Me</h2>
        <p className="text-white/80 mb-6">
          Computer Science graduate with a strong foundation in Networking and
          Cybersecurity, and hands-on experience in mobile and web application
          development. Passionate about building real-world solutions and
          contributing to collaborative, tech-driven environments.
        </p>
        <ul className="text-white/70 space-y-2">
          <li>
            <strong>Name:</strong> Nabil Adib
          </li>
          <li>
            <strong>Experience:</strong> 2 Internships
          </li>
          <li>
            <strong>Email:</strong> nabiladib70@gmail.com
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/nebneb97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              github.com/nebneb97
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#232329] p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-teal-500 mb-4">Skills</h2>
        <p className="text-white/70 mb-4">
          Experienced with modern web and mobile development tools. Skilled in
          frontend architecture, UI frameworks, and collaborative workflows.
        </p>
        <div className="flex flex-wrap gap-4 text-3xl text-green-400">
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
          <SiReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiNodedotjs title="Node.js" />
          <SiFirebase title="Firebase" />
          <SiPrisma title="Prisma" />
          <SiFlutter title="Flutter" />
          <SiTypescript title="TypeScript" />
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#232329] p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-teal-500 mb-4">Projects</h2>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-green-400">
            Cloud-based Software Testing Platform
          </h4>
          <p className="text-white/70 text-sm mb-2">
            A platform to request and manage software testing tasks with
            real-time status and role-based control.
          </p>
          <div className="flex flex-wrap gap-2 text-xl text-green-500">
            <SiNextdotjs title="Next.js" />
            <SiPrisma title="Prisma" />
            <SiTailwindcss title="Tailwind" />
            <SiTypescript title="TypeScript" />
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-green-400">
            Equip&Go Rental App
          </h4>
          <p className="text-white/70 text-sm mb-2">
            A mobile app for renting outdoor activity equipment based on user
            location and availability.
          </p>
          <div className="flex flex-wrap gap-2 text-xl text-green-500">
            <SiFlutter title="Flutter" />
            <SiFirebase title="Firebase" />
          </div>
        </div>
      </motion.div>

      {/* See More Button */}
      <div className="text-center">
        <Link href="/resume" passHref>
          <Button className="mt-4 uppercase">See More</Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeResumeProjects;
