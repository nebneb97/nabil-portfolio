"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
} from "react-icons/si";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "Builds end-to-end web applications — from responsive Next.js frontends to Node.js backends with REST APIs, database design, and authentication. Delivered across enterprise dashboards, business tools, and SaaS platforms.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    num: "02",
    title: "Backend & Database",
    description:
      "Designs and develops scalable backend services, RESTful APIs, and database schemas using Node.js, Prisma ORM, and PostgreSQL — with role-based access control, authentication, and production deployments.",
    stack: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Prisma ORM", Icon: SiPrisma },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "Delivers cross-platform mobile applications using Flutter and Firebase — with real-time features, Google Maps integration, push notifications, multi-role access, and booking workflows.",
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    num: "04",
    title: "Cloud & Deployment",
    description:
      "Deploys and manages production applications on AWS (Amplify, EC2, Elastic Beanstalk, S3, Cognito) and Vercel — including CI/CD setup, environment configuration, and deployment verification.",
    stack: [
      { name: "AWS", Icon: SiAmazonwebservices },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
];

const Solutions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20"
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
            className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 rounded-2xl p-5 sm:p-6 xl:p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
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
