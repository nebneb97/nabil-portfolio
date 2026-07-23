"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const info = [
  { icon: <FaEnvelope />, label: "Email", value: "nabiladib70@gmail.com", copyable: true },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Selangor, Malaysia" },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/nebneb97", href: "https://github.com/nebneb97" },
];

const Contacts = () => {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [service, setService] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nabiladib70@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      service,
      message: form.message.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setService("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
      className="container mx-auto px-6 xl:px-12 py-16 xl:py-20"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-start">

        {/* Left — info */}
        <div>
          <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl xl:text-6xl font-black text-white leading-none mb-6">
            Let&apos;s
            <br />
            <span className="text-orange-500">Talk.</span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-sm">
            Whether you have a project in mind or just want to connect — I&apos;m
            open and ready to chat.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-4 mb-10">
            {info.map((item, i) => (
              <div
                key={i}
                onClick={item.copyable ? handleCopyEmail : undefined}
                className={`flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl ${
                  item.copyable ? "cursor-pointer hover:border-orange-500/40 transition-colors group" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-orange-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">
                      {item.copyable && copied ? "Copied!" : item.value}
                    </p>
                  )}
                  {item.copyable && (
                    <p className="text-zinc-600 text-[10px] mt-0.5">click to copy</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Why work with me */}
          <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-2">
              Why Work With Me?
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I bring a fresh perspective, strong fundamentals, and a passion
              for continuous learning. Eager to contribute, grow with your team,
              and deliver clean, user-focused solutions using modern tools.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors appearance-none"
              style={{ color: service ? "#fafafa" : "#52525b" }}
            >
              <option value="" disabled>Select a service</option>
              <option value="web">Web App Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="frontend">Frontend Implementation</option>
              <option value="qa">Bug Fixing &amp; QA</option>
            </select>

            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows={6}
              className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-fit bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-8 py-3 rounded-full text-sm uppercase transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-orange-400 text-sm font-medium">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Email me directly at nabiladib70@gmail.com
              </p>
            )}

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/nabiladib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-zinc-600 hover:text-orange-500 transition-colors" />
              </a>
              <a
                href="https://github.com/nebneb97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-zinc-600 hover:text-orange-500 transition-colors" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
