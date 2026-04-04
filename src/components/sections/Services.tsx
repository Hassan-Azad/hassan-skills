"use client";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";
import { Globe, MessageSquareCode, Mic, Plug } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description:
      "I create complete websites and web apps — from the design you see to the servers that power it. Whether it's a business site or a complex platform, I handle everything from idea to deployment.",
    features: ["Responsive UI", "Scalable Backend", "API Design", "Cloud Deployment"],
    color: "cyan",
  },
  {
    icon: MessageSquareCode,
    title: "AI Chatbots",
    description:
      "I build smart chat systems that answer questions, guide users, and automate support — so your business keeps running even when you're offline.",
    features: ["24/7 Availability", "Custom Knowledge", "Multi-platform", "OpenAI Powered"],
    color: "blue",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "I create voice assistants that can make and receive calls, handle tasks automatically, and communicate naturally — just like a real person.",
    features: ["Speech-to-Text", "Natural TTS", "Call Automation", "Twilio Integration"],
    color: "violet",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "I connect different tools and systems so they work together smoothly. Payments, CRMs, messaging — whatever your business needs linked up, I make it happen.",
    features: ["Payment Systems", "Third-party APIs", "Webhooks", "Real-time Sync"],
    color: "pink",
  },
];

const colorMap: Record<string, { gradient: string; icon: string; tag: string; badge: string }> = {
  cyan: {
    gradient: "from-cyan-500/10 via-transparent",
    icon: "from-cyan-500/25 to-transparent text-cyan-400 border-cyan-500/25",
    tag: "bg-cyan-500/10 text-cyan-400",
    badge: "bg-cyan-400",
  },
  blue: {
    gradient: "from-blue-500/10 via-transparent",
    icon: "from-blue-500/25 to-transparent text-blue-400 border-blue-500/25",
    tag: "bg-blue-500/10 text-blue-400",
    badge: "bg-blue-400",
  },
  violet: {
    gradient: "from-violet-500/10 via-transparent",
    icon: "from-violet-500/25 to-transparent text-violet-400 border-violet-500/25",
    tag: "bg-violet-500/10 text-violet-400",
    badge: "bg-violet-400",
  },
  pink: {
    gradient: "from-pink-500/10 via-transparent",
    icon: "from-pink-500/25 to-transparent text-pink-400 border-pink-500/25",
    tag: "bg-pink-500/10 text-pink-400",
    badge: "bg-pink-400",
  },
};

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        label="What I Do"
        title="My"
        highlight="Services"
        subtitle="Practical, scalable solutions for businesses at every stage."
        centered
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          const styles = colorMap[service.color];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl bg-[#0d1525] border border-white/[0.06] p-7 overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:shadow-2xl"
            >
              {/* Top gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${styles.gradient} to-transparent pointer-events-none opacity-50`}
              />

              {/* Icon */}
              <div
                className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br border flex items-center justify-center mb-5 ${styles.icon}`}
              >
                <Icon size={22} />
              </div>

              {/* Title & desc */}
              <h3 className="relative font-display font-bold text-white text-xl mb-3">
                {service.title}
              </h3>
              <p className="relative text-slate-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="relative flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${styles.tag}`}
                  >
                    <span className={`w-1 h-1 rounded-full ${styles.badge}`} />
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
