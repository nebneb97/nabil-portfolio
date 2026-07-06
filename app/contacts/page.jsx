"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nabiladib70@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Selangor, Malaysia",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "github.com/nebneb97",
  },
];

const Contacts = () => {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nabiladib70@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
    >
      <div className="container mx-auto px-4 xl:px-10 xl:pb-5 xl:mt-30">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-10">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Contact info */}
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
              <h4 className="text-xl font-semibold text-indigo-500 mb-5">
                Contact Information
              </h4>
              <ul className="flex flex-col gap-5">
                {info.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-4 ${item.title === "Email" ? "cursor-pointer group" : ""}`}
                    onClick={item.title === "Email" ? handleCopyEmail : undefined}
                    title={item.title === "Email" ? "Click to copy" : undefined}
                  >
                    <div className="w-[48px] h-[48px] bg-indigo-50 text-indigo-500 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-zinc-800 group-hover:text-indigo-500 transition-colors">
                        {item.title === "Email" && copied ? "Copied!" : item.description}
                      </h3>
                      {item.title === "Email" && (
                        <p className="text-zinc-400 text-xs mt-0.5">click to copy</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why work with me */}
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
              <h4 className="text-xl font-semibold text-indigo-500 mb-2">
                Why Work With Me?
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I bring a fresh perspective, strong fundamentals, and a passion
                for continuous learning. I&apos;m eager to contribute, grow with your
                team, and deliver clean, user-focused solutions using modern
                development tools.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="xl:w-[60%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-bold text-zinc-900">
                Let&apos;s work together
              </h3>
              <p className="text-zinc-500 text-sm">
                Whether you&apos;re planning a mobile app or web platform — feel free
                to reach out.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" required />
                <Input type="text" placeholder="Last Name" required />
                <Input type="email" placeholder="Email" required />
                <Input type="tel" placeholder="Phone Number" />
              </div>

              <Select>
                <SelectTrigger className="w-full bg-zinc-50 border-zinc-200">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="web">Web App Development</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="frontend">Frontend Implementation</SelectItem>
                    <SelectItem value="qa">Bug Fixing &amp; QA</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Type your message here."
                className="h-[140px] bg-zinc-50 border-zinc-200"
              />

              <Button type="submit" className="w-fit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-indigo-500 text-sm font-medium">
                  Message sent successfully!
                </p>
              )}

              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/in/nabiladib" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl text-zinc-400 hover:text-indigo-500 transition-colors" />
                </a>
                <a href="https://github.com/nebneb97" target="_blank" aria-label="GitHub">
                  <FaGithub className="text-2xl text-zinc-400 hover:text-indigo-500 transition-colors" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
