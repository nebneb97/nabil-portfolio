"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-5 xl:px-10 xl:mt-30"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl xl:text-[42px] font-bold text-center text-zinc-900 mb-3">
            What I Offer
          </h2>
          <p className="text-zinc-400 text-center text-sm mb-14 tracking-wide">
            Click a service to learn more
          </p>

          <div className="divide-y divide-zinc-200">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index}>
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-6 xl:gap-8 text-left py-6 xl:py-8 group"
                  >
                    <span
                      className={`text-5xl xl:text-6xl font-extrabold tabular-nums transition-colors duration-300 ${
                        isOpen ? "text-indigo-500" : "text-zinc-200 group-hover:text-zinc-300"
                      }`}
                    >
                      {service.num}
                    </span>
                    <span
                      className={`flex-1 text-xl xl:text-3xl font-semibold transition-colors duration-300 ${
                        isOpen ? "text-indigo-500" : "text-zinc-800 group-hover:text-indigo-400"
                      }`}
                    >
                      {service.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`text-4xl font-light leading-none transition-colors duration-300 ${
                        isOpen ? "text-indigo-500" : "text-zinc-300 group-hover:text-zinc-500"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 xl:pl-28 flex flex-col gap-5">
                          <p className="text-zinc-500 max-w-2xl leading-relaxed text-sm xl:text-base">
                            {service.description}
                          </p>
                          <ul className="flex flex-wrap gap-2">
                            {service.stack.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-1.5 text-indigo-500 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full text-xs xl:text-sm"
                              >
                                <item.Icon className="text-sm" />
                                {item.name}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/contacts"
                            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-700 text-sm font-medium transition-colors duration-200 w-fit group/link"
                          >
                            <span className="border-b border-indigo-300 group-hover/link:border-indigo-600 pb-px transition-colors duration-200">
                              Let&apos;s work together
                            </span>
                            <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solutions;
