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
    problem: "You need a product that ships and holds up under real usage.",
    description:
      "I build end-to-end web applications — responsive Next.js frontends, Node.js backends, REST APIs, database design, and authentication. This is where most of my professional time goes, and where I've learned what it actually takes to ship something people depend on.",
    proof: [
      { label: "Media Command Centre", href: "/projects?open=01" },
      { label: "ePIBG", href: "/projects?open=02" },
    ],
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
    problem: "You need architecture that won't become someone else's problem later.",
    description:
      "I design and develop scalable backend services, RESTful APIs, and database schemas using Node.js, Prisma ORM, and PostgreSQL. The architectural decisions here have real consequences — I take them seriously. RBAC, auth flows, schema design — the part most people don't see but everyone feels.",
    proof: [
      { label: "Media Command Centre", href: "/projects?open=01" },
    ],
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
    problem: "You need mobile users without building and maintaining two codebases.",
    description:
      "I build cross-platform mobile apps using Flutter and Firebase. I built Equip&Go from scratch — Google Maps, real-time data, push notifications, multi-role access for users, vendors, and admins. One codebase, two platforms, real users.",
    proof: [
      { label: "Equip&Go Rental App", href: "/projects?open=04" },
    ],
    stack: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    num: "04",
    title: "Cloud & Deployment",
    problem: "You need it live, stable, and not waking you up at 2am.",
    description:
      "I deploy and manage production applications on AWS and Vercel — environment configuration, CI/CD setup, and deployment verification. Shipping MCC across seven AWS services (Amplify, EC2, Elastic Beanstalk, S3, Cognito, Cloudflare) taught me more about production infrastructure than anything else.",
    proof: [
      { label: "Media Command Centre", href: "/projects?open=01" },
      { label: "ePIBG", href: "/projects?open=02" },
    ],
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      {/* Editorial hero */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-12 xl:pb-16">
          <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.16em] mb-6">
            What I Do
          </p>
          <h1 className="text-[clamp(52px,8vw,96px)] font-bold leading-[0.88] tracking-[-0.04em] text-white mb-10">
            Services
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-16">
            <p className="text-zinc-300 text-[17px] leading-[1.7]">
              I don&apos;t take on everything. These are the areas I&apos;ve
              worked in professionally, care about doing well, and can speak to
              honestly.
            </p>
            <p className="text-zinc-500 text-[15px] leading-[1.7]">
              Each service below is backed by real work — not just a skill list.
              The project references link directly to what that looks like in
              practice.
            </p>
          </div>
        </div>
      </div>

      {/* Service rows */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20">
        <div className="border-t border-zinc-800">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-1 xl:grid-cols-[1.4fr_3fr] gap-8 xl:gap-16 border-b border-zinc-800 py-12"
            >
              {/* Left — number, title, stack */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-zinc-600 text-[11px] mb-2">
                    {service.num}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-tight tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((item, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1.5 text-xs text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white px-3 py-1.5 transition-colors cursor-default"
                    >
                      <item.Icon className="text-sm" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — problem, description, proof, CTA */}
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl font-semibold leading-snug tracking-tight">
                  {service.problem}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.proof?.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 border-t border-zinc-800/60">
                    <span className="font-mono text-zinc-600 text-[10px] uppercase tracking-widest mt-3">
                      Seen in
                    </span>
                    {service.proof.map((p, j) => (
                      <Link
                        key={j}
                        href={p.href}
                        className="font-mono text-sky-400 text-xs hover:text-sky-300 transition-colors underline underline-offset-4 decoration-sky-500/30 hover:decoration-sky-300 mt-3 py-1"
                      >
                        {p.label} →
                      </Link>
                    ))}
                  </div>
                )}
                <div className="pt-1">
                  <Link
                    href="/contacts"
                    className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                  >
                    Work with me on this →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 xl:mt-20 border border-zinc-800 p-8 xl:p-12 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
          <div>
            <h2 className="text-white font-bold text-2xl mb-2 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
              Tell me what you&apos;re building. I&apos;ll tell you honestly
              whether I can help and what that would look like.
            </p>
          </div>
          <Link
            href="/contacts"
            className="flex-shrink-0 flex items-center gap-2 bg-white text-zinc-950 hover:bg-sky-500 hover:text-white py-4 px-8 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Solutions;
