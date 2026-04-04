"use client";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";
import {
  Code2, Server, Database, Brain, Wrench,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    icon: Code2,
    label: "Frontend",
    color: "cyan",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🖌️" },
      { name: "JavaScript", icon: "JS" },
    ],
  },
  {
    id: "backend",
    icon: Server,
    label: "Backend",
    color: "blue",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    id: "databases",
    icon: Database,
    label: "Databases",
    color: "violet",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    id: "ai",
    icon: Brain,
    label: "AI & Automation",
    color: "pink",
    skills: [
      { name: "OpenAI APIs", icon: "🤖" },
      { name: "AI Chatbots", icon: "💬" },
      { name: "Voice Agents", icon: "🎙️" },
      { name: "Automation", icon: "⚙️" },
      { name: "Real-time Integrations", icon: "🔄" },
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools & Platforms",
    color: "orange",
    skills: [
      { name: "Git & GitHub", icon: "🔀" },
      { name: "Vercel", icon: "▲" },
      { name: "Render", icon: "🚀" },
      { name: "AWS (EC2, S3)", icon: "☁️" },
      { name: "Stripe", icon: "💳" },
      { name: "Docker", icon: "🐳" },
      { name: "NGINX", icon: "⚡" },
    ],
  },
];

const colorStyles: Record<string, { badge: string; icon: string; tag: string; border: string; glow: string }> = {
  cyan: {
    badge: "bg-cyan-500/15 border-cyan-500/25 text-cyan-400",
    icon: "from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/20",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/15",
    border: "group-hover:border-cyan-500/30",
    glow: "group-hover:shadow-cyan-500/5",
  },
  blue: {
    badge: "bg-blue-500/15 border-blue-500/25 text-blue-400",
    icon: "from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/20",
    tag: "bg-blue-500/10 text-blue-300 border-blue-500/15",
    border: "group-hover:border-blue-500/30",
    glow: "group-hover:shadow-blue-500/5",
  },
  violet: {
    badge: "bg-violet-500/15 border-violet-500/25 text-violet-400",
    icon: "from-violet-500/20 to-violet-500/5 text-violet-400 border-violet-500/20",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/15",
    border: "group-hover:border-violet-500/30",
    glow: "group-hover:shadow-violet-500/5",
  },
  pink: {
    badge: "bg-pink-500/15 border-pink-500/25 text-pink-400",
    icon: "from-pink-500/20 to-pink-500/5 text-pink-400 border-pink-500/20",
    tag: "bg-pink-500/10 text-pink-300 border-pink-500/15",
    border: "group-hover:border-pink-500/30",
    glow: "group-hover:shadow-pink-500/5",
  },
  orange: {
    badge: "bg-orange-500/15 border-orange-500/25 text-orange-400",
    icon: "from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/20",
    tag: "bg-orange-500/10 text-orange-300 border-orange-500/15",
    border: "group-hover:border-orange-500/30",
    glow: "group-hover:shadow-orange-500/5",
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#08111f]/50">
      <SectionHeading
        label="Expertise"
        title="My"
        highlight="Skills"
        subtitle="A focused set of technologies I use to build fast, scalable, and modern digital products."
        centered
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          const styles = colorStyles[cat.color];
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className={`group relative rounded-2xl bg-[#0d1525] border border-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.border} ${styles.glow} ${cat.id === "ai" ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br border flex items-center justify-center flex-shrink-0 ${styles.icon}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase rounded-full border ${styles.badge}`}
                  >
                    {cat.label}
                  </span>
                  <p className="text-slate-600 text-[10px] mt-0.5">
                    {cat.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border cursor-default transition-colors ${styles.tag}`}
                  >
                    <span className="text-sm leading-none">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
