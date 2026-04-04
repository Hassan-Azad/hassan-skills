"use client";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Linkedin, Mail } from "lucide-react";

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 dot-grid"
    >
      {/* Dot grid fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c14] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wide mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for new projects
              <Sparkles size={12} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-6xl text-white leading-[1.08] tracking-tight"
            >
              Hassan Azad
              <span className="block mt-2 gradient-text">
                Full Stack &amp;
              </span>
              <span className="block text-white/90">
                AI Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-slate-400 text-lg leading-relaxed max-w-md"
            >
              I build modern websites and smart AI systems that help
              businesses grow — from idea to deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-slate-300 font-medium text-sm hover:border-cyan-500/30 hover:text-white hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Skills
                <ArrowDown size={15} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">
                Connect
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/hassan-azad000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:hassanazad917@gmail.com"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Illustration / Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-2xl" />

              {/* Card */}
              <div className="relative w-[300px] sm:w-[340px] rounded-3xl bg-[#0d1525] border border-white/[0.07] p-6 overflow-hidden">
                {/* Mesh gradient top */}
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

                {/* Avatar illustration */}
                <div className="relative flex justify-center mb-5">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/20 flex items-center justify-center text-5xl select-none">
                    👨‍💻
                  </div>
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center text-xs">
                    ✅
                  </span>
                </div>

                {/* Info */}
                <div className="relative text-center mb-6">
                  <h3 className="font-display font-bold text-white text-xl">Hassan Azad</h3>
                  <p className="text-cyan-400 text-sm font-medium mt-1">Full Stack &amp; AI Engineer</p>
                  <p className="text-slate-500 text-xs mt-1">📍 Available for Remote Work</p>
                </div>

                {/* Stats */}
                <div className="relative grid grid-cols-3 gap-3">
                  {[
                    { value: "2+", label: "Years Exp." },
                    { value: "15+", label: "Projects" },
                    { value: "24h", label: "Availability" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.04] rounded-xl p-3 text-center border border-white/[0.06]"
                    >
                      <div className="font-display font-bold text-white text-lg leading-none">
                        {stat.value}
                      </div>
                      <div className="text-slate-500 text-[10px] mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="relative mt-4 flex flex-wrap gap-1.5 justify-center">
                  {["React", "Next.js", "Node.js", "OpenAI", "AWS"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
