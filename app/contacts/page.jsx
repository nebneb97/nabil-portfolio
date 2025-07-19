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
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+60) 13-742 9864",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nabiladib85@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kuala Lumpur, Malaysia",
  },
];

const Contacts = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate delay and success response
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-10">
          {/*Form*/}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-4 p-4 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              {/*Title and description*/}
              <h3 className="text-4xl text-emerald-500">Let's work together</h3>
              <p className="text-white/60">
                Whether you're planning a mobile app, web platform, or need help debugging your frontend — feel free to reach out. Let's build something great.
              </p>

              {/*Input with labels*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/60 text-sm">First Name</label>
                  <Input type="text" placeholder="Firstname" required />
                </div>
                <div>
                  <label className="text-white/60 text-sm">Last Name</label>
                  <Input type="text" placeholder="Lastname" required />
                </div>
                <div>
                  <label className="text-white/60 text-sm">Email Address</label>
                  <Input type="email" placeholder="Email" required />
                </div>
                <div>
                  <label className="text-white/60 text-sm">Phone Number</label>
                  <Input type="tel" placeholder="Phone" />
                </div>
              </div>

              {/*Select*/}
              <label className="text-white/60 text-sm">Service Type</label>
              <Select required>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose a service</SelectLabel>
                    <SelectItem value="web">🌐 Web App Development</SelectItem>
                    <SelectItem value="mobile">📱 Mobile App Development</SelectItem>
                    <SelectItem value="frontend">🎨 Frontend Implementation</SelectItem>
                    <SelectItem value="qa">🔧 Bug Fixing & QA Support</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*Textarea*/}
              <label className="text-white/60 text-sm">Message</label>
              <Textarea className="h-[200px]" placeholder="Type your message here." required />

              {/*Button & Feedback*/}
              <Button
                size="md"
                type="submit"
                className="max-w-40 disabled:opacity-50"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}

              {/*Social Links*/}
              <div className="flex gap-4 mt-4">
                <a href="https://linkedin.com/in/nabiladib" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl text-white hover:text-green-400 transition" />
                </a>
                <a href="https://github.com/nebneb97" target="_blank" aria-label="GitHub">
                  <FaGithub className="text-2xl text-white hover:text-green-400 transition" />
                </a>
              </div>
            </form>
          </div>

          {/*Info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-400 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
