"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, Send, MapPin, Linkedin, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdapwnzz";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-[#111827] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200";

  return (
    <SectionWrapper id="contact">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 font-medium">
          <span className="w-6 h-px bg-cyan-400/60" />
          Get In Touch
          <span className="w-6 h-px bg-cyan-400/60" />
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          Let&apos;s build something{" "}
          <span className="gradient-text">great</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Send me a
          message and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Left — contact info */}
        <div className="lg:col-span-2 space-y-4">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "hassanazad917@gmail.com",
              href: "mailto:hassanazad917@gmail.com",
              color: "cyan",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/hassan-azad000",
              href: "https://www.linkedin.com/in/hassan-azad000",
              color: "blue",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Rawalpindi, Pakistan",
              href: null,
              color: "violet",
            },
          ].map((item) => {
            const Icon = item.icon;
            const colorMap: Record<string, string> = {
              cyan: "from-cyan-500/20 to-transparent text-cyan-400 border-cyan-500/20",
              blue: "from-blue-500/20 to-transparent text-blue-400 border-blue-500/20",
              violet: "from-violet-500/20 to-transparent text-violet-400 border-violet-500/20",
            };
            const content = (
              <div className="flex items-center gap-4 rounded-2xl bg-[#0d1525] border border-white/[0.06] p-5 hover:border-white/[0.1] transition-all duration-200">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br border flex items-center justify-center flex-shrink-0 ${colorMap[item.color]}`}
                >
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs font-medium mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium truncate">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {content}
              </motion.a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}

          {/* Availability badge */}
          <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 p-5">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm font-semibold">Available for work</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Open to freelance projects, full-time roles, and long-term collaborations.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3 rounded-2xl bg-[#0d1525] border border-white/[0.06] p-7"
        >
          {/* Success state */}
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-green-400" />
              </div>
              <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-cyan-400 text-sm hover:text-cyan-300 transition-colors font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-slate-600 text-xs text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
