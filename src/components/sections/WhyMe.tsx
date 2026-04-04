"use client";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";
import { CheckCircle2, Zap, MessageCircle, Target, TrendingUp, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Clean, Modern Work",
    desc: "Every project is built with care — polished design, tidy code, and attention to the details that matter.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    desc: "I respect your time. Projects are delivered on schedule without cutting corners on quality.",
  },
  {
    icon: MessageCircle,
    title: "Easy Communication",
    desc: "Clear updates, no tech jargon. You'll always know exactly where your project stands.",
  },
  {
    icon: Target,
    title: "Focus on Real Results",
    desc: "I build things that work in the real world and move the needle for your business.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Built to grow with you. Whether you're a startup or scaling up, the foundation won't break.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Ownership",
    desc: "From first idea to live deployment — I handle the full journey so you don't have to juggle multiple vendors.",
  },
];

export default function WhyMe() {
  return (
    <SectionWrapper id="why-me" className="bg-[#08111f]/50">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <SectionHeading
            label="Why Choose Me"
            title="Let's build"
            highlight="something great"
            subtitle="I'm not just a developer. I'm a partner who's invested in your success."
          />

          <p className="text-slate-400 leading-relaxed">
            With over two years of hands-on experience in startups and product companies,
            I understand what it takes to turn an idea into a product that users love —
            and that stands the test of time.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start a Project
            </a>
            <a
              href="mailto:hassanazad917@gmail.com"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              hassanazad917@gmail.com →
            </a>
          </div>
        </div>

        {/* Right — reasons grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex gap-3.5 rounded-xl bg-[#0d1525] border border-white/[0.06] p-4 transition-all duration-300 hover:border-white/[0.1]"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Icon size={16} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
