"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiTypescript,
} from "react-icons/si";

const services = [
  {
    num: "01",
    title: "Web App Development",
    description:
      "Designs and builds responsive, scalable web applications using modern frameworks like Next.js, React, and Tailwind CSS — suitable for dashboards, portfolios, and business tools.",
    stack: [
      { name: "React", Icon: FaReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Delivers cross-platform mobile applications using Flutter and Firebase, optimised for real-time features, location-based services, and multi-role access systems.",
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    num: "03",
    title: "Frontend Implementation",
    description:
      "Translates UI designs into interactive, accessible interfaces using Tailwind CSS and component-based architecture — ensuring consistency and responsiveness across all devices.",
    stack: [
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3 },
      { name: "JavaScript", Icon: FaJs },
      { name: "React", Icon: FaReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    num: "04",
    title: "Bug Fixing & QA Support",
    description:
      "Provides frontend debugging, issue tracking, and collaborative testing support to enhance system stability, performance, and overall user experience.",
    stack: [
      { name: "JavaScript", Icon: FaJs },
      { name: "React", Icon: FaReact },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
];

const Solutions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="container mx-auto px-6 xl:px-12 py-16 xl:py-20"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">
          What I Do
        </p>
        <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">
          Solutions
        </h1>
        <p className="text-zinc-400 max-w-xl text-base">
          From concept to deployment — services tailored to build real digital
          products that work.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Background number */}
            <span className="absolute top-4 right-6 text-7xl font-black text-zinc-800/50 select-none group-hover:text-sky-500/10 transition-colors">
              {service.num}
            </span>

            <div className="flex flex-col gap-3 relative">
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {service.stack.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-800 border border-zinc-700 group-hover:border-sky-500/20 px-3 py-1.5 rounded-full transition-colors"
                >
                  <item.Icon className="text-sm" />
                  {item.name}
                </span>
              ))}
            </div>

            <Link
              href="/contacts"
              className="inline-flex items-center gap-1.5 text-sky-500 hover:text-sky-400 text-sm font-medium transition-colors w-fit mt-auto"
            >
              Let&apos;s work together
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Solutions;
