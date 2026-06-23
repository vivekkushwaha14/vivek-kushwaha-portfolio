"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, Check, Copy } from "lucide-react";
import { developerInfo } from "@/app/data/portfolio";
import SectionWrapper from "../ui/SectionWrapper";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const [formState, setFormState] = useState("idle"); // idle, loading, success
  const [copied, setCopied] = useState(false);
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setFormState("success");
    } catch (error) {
  console.log("EMAILJS ERROR:", error);
  alert(JSON.stringify(error));
  setFormState("idle");
}
  };
  const copyEmail = () => {
    const email = developerInfo.socials
      .find((s) => s.name === "Email")
      .url.replace("mailto:", "");
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or just want to say hi?"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text">Let&apos;s connect</h3>
            <p className="text-muted text-lg leading-relaxed max-w-md">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-text font-semibold text-sm group"
            >
              <span className="border-b border-[#e5e7eb] group-hover:border-text transition-colors">
                {developerInfo.socials
                  .find((s) => s.name === "Email")
                  .url.replace("mailto:", "")}
              </span>
              {copied ? (
                <Check size={16} />
              ) : (
                <Copy
                  size={16}
                  className="opacity-50 group-hover:opacity-100 transition-opacity"
                />
              )}
            </button>
          </div>

          <div className="space-y-4">
            {developerInfo.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-[#d1d5db]"
                >
                  <div className="p-3 bg-secondary rounded-lg text-text group-hover:bg-text group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-bold uppercase tracking-widest">
                      {social.name}
                    </p>
                    <p className="text-text font-medium truncate max-w-[200px] md:max-w-xs">
                      {social.url
                        .replace("mailto:", "")
                        .replace("https://", "")}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-2xl"
        >
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 bg-secondary text-text rounded-full flex items-center justify-center">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-text">Message Sent!</h3>
                <p className="text-muted">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-accent font-bold text-sm underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-muted ml-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="from_name"
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white border border-[#e5e7eb] rounded-lg px-5 py-4 text-text placeholder:text-muted/50 focus:border-text outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-muted ml-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="from_email"
                      required
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white border border-[#e5e7eb] rounded-lg px-5 py-4 text-text placeholder:text-muted/50 focus:border-text outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-muted ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full bg-white border border-[#e5e7eb] rounded-lg px-5 py-4 text-text placeholder:text-muted/50 focus:border-text outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full bg-text text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-black/80 transition-colors disabled:opacity-50"
                >
                  {formState === "loading" ? "Sending..." : "Send Message"}
                  <Send
                    size={20}
                    className={formState === "loading" ? "animate-pulse" : ""}
                  />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
