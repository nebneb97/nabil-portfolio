"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Toast from "@/components/Toast";

const info = [
  { icon: <FaEnvelope />, label: "Email", value: "nabiladib70@gmail.com", copyable: true },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Selangor, Malaysia" },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/nebneb97", href: "https://github.com/nebneb97" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/nabiladib", href: "https://linkedin.com/in/nabiladib" },
];

const faqs = [
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm open to freelance projects alongside my full-time role. Reach out with your scope and timeline and we'll see if it's a fit.",
  },
  {
    q: "What kind of projects do you take on?",
    a: "Full stack web apps (Next.js, Node.js), mobile apps (Flutter), backend APIs, and cloud deployments on AWS or Vercel. I work best with defined requirements and a clear scope.",
  },
  {
    q: "How do we get started?",
    a: "Fill in the contact form or email me directly. I reply within 24 hours and we'll schedule a call to discuss your project in detail.",
  },
  {
    q: "Do you work with clients outside Malaysia?",
    a: "Yes — I work fully remote with no geographic restrictions. I'm comfortable with async communication across time zones.",
  },
  {
    q: "Can you handle both design and development?",
    a: "I focus on development. I can work from your Figma files, or recommend a designer to collaborate with if you don't have one.",
  },
  {
    q: "What does 'Demo on request' mean for your projects?",
    a: "Some of my projects are enterprise applications on private infrastructure. I can walk you through them live on a video call.",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (data) => {
  const errs = {};
  if (!data.firstName?.trim()) errs.firstName = "First name is required.";
  if (!data.email?.trim()) errs.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email.trim())) errs.email = "Enter a valid email address.";
  if (!data.message?.trim()) errs.message = "Message is required.";
  return errs;
};

const inputBase =
  "bg-zinc-900 border text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors w-full";

const Contacts = () => {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [service, setService] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const dismissToast = useCallback(() => setToast(null), []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nabiladib70@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validate({ [name]: value });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      service,
      message: form.message.value,
    };

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("idle");
        form.reset();
        setService("");
        setToast({ message: "Message sent! I'll get back to you within 24 hours.", type: "success" });
      } else {
        setStatus("idle");
        setToast({ message: "Something went wrong. Email me at nabiladib70@gmail.com", type: "error" });
      }
    } catch {
      setStatus("idle");
      setToast({ message: "Network error. Please try again or email me directly.", type: "error" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
      className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-start">

        {/* Left — info */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />
          <p className="font-mono text-sky-500 text-xs font-semibold uppercase tracking-widest mb-4 relative">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-none mb-6">
            Let&apos;s
            <br />
            <span className="text-sky-500">Talk.</span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-3 max-w-sm">
            I read every message. Whether you have a project that needs
            building or just want to talk shop — either works for me.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            I typically reply within 24 hours.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-4 mb-10">
            {info.map((item, i) => (
              <div
                key={i}
                onClick={item.copyable ? handleCopyEmail : undefined}
                className={`flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl ${
                  item.copyable ? "cursor-pointer hover:border-sky-500/40 transition-colors group" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-sky-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium group-hover:text-sky-400 transition-colors">
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

          {/* What to expect */}
          <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <p className="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">
              What to Expect
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "I'll tell you honestly if something won't work before we start building it.",
                "I communicate throughout — you won't be left wondering what's happening.",
                "I've worked with CTOs and mentored interns. I adapt to who I'm working with.",
                "I cover web and mobile — you don't need two developers for two platforms.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-sky-500 mt-0.5 flex-shrink-0">—</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First name */}
              <div className="flex flex-col gap-1">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onBlur={handleBlur}
                  className={`${inputBase} ${errors.firstName ? "border-red-500 focus:border-red-500" : "border-zinc-700 focus:border-sky-500"}`}
                />
                {errors.firstName && (
                  <p className="text-red-400 text-xs px-1">{errors.firstName}</p>
                )}
              </div>

              {/* Last name */}
              <div className="flex flex-col gap-1">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className={`${inputBase} border-zinc-700 focus:border-sky-500`}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  className={`${inputBase} ${errors.email ? "border-red-500 focus:border-red-500" : "border-zinc-700 focus:border-sky-500"}`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs px-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={`${inputBase} border-zinc-700 focus:border-sky-500`}
                />
              </div>
            </div>

            {/* Service */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors appearance-none w-full"
              style={{ color: service ? "#fafafa" : "#52525b" }}
            >
              <option value="" disabled>Select a service</option>
              <option value="web">Web App Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="frontend">Frontend Implementation</option>
              <option value="qa">Bug Fixing &amp; QA</option>
            </select>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                placeholder="Your message..."
                rows={6}
                onBlur={handleBlur}
                className={`${inputBase} resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-zinc-700 focus:border-sky-500"}`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs px-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-fit bg-sky-500 hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-full text-sm uppercase transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/nabiladib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-zinc-600 hover:text-sky-500 transition-colors" />
              </a>
              <a
                href="https://github.com/nebneb97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-zinc-600 hover:text-sky-500 transition-colors" />
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <p className="font-mono text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-8">Common Questions</h2>
        <div className="flex flex-col divide-y divide-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span className="text-white text-sm font-medium pr-4">{faq.q}</span>
                <span
                  className="text-sky-500 text-lg flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast
            key="contact-toast"
            message={toast.message}
            type={toast.type}
            onClose={dismissToast}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contacts;
