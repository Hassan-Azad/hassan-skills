"use client";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";
import { GraduationCap, Briefcase, Cpu, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "3+ Years Experience",
    desc: "Building production-ready web and mobile applications for real businesses.",
    color: "cyan",
  },
  {
    icon: Rocket,
    title: "Full Stack Development",
    desc: "From pixel-perfect frontends to powerful backends — I handle the complete picture.",
    color: "blue",
  },
  {
    icon: Cpu,
    title: "AI Systems",
    desc: "AI chatbots and voice agents that understand, respond, and automate tasks.",
    color: "violet",
  },
  {
    icon: GraduationCap,
    title: "Computer Science Degree",
    desc: "B.Sc. in Computer Science.",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
  blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400",
  violet: "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <SectionHeading
            label="About Me"
            title="Who I"
            highlight="Am"
            subtitle="I'm a software engineer who loves turning complex ideas into simple, beautiful, and functional digital products."
          />

          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Over the past two years, I've worked on everything from
              fast-loading marketing websites to complex AI-powered platforms.
              Whether it's a startup or an established business, I bring the
              same focus: clean code, great design, and real results.
            </p>
            <p>
              I specialize in building <span className="text-white font-medium">Full Stack Web Applications</span> and
              integrating <span className="text-white font-medium">AI systems</span> — like chatbots that handle
              customer queries and voice agents that automate phone calls.
            </p>
            {/* <p>
              I believe technology should solve real problems. Every project I
              take on, I treat as if it were my own business.
            </p> */}
          </div>

          {/* Quick facts */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["React & Next.js", "AI & Automation", "Node.js APIs", "AWS & Cloud"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — highlights grid */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#0d1525] border border-white/[0.06] p-5 transition-all duration-300 hover:border-white/[0.1]"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[item.color]} border flex items-center justify-center mb-4`}
                >
                  <Icon size={18} className={colorMap[item.color].split(" ").slice(-1)[0]} />
                </div>
                <h4 className="font-display font-semibold text-white text-sm leading-snug mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
