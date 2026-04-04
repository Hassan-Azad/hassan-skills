"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`relative py-20 md:py-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">{children}</div>
    </motion.section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 font-medium">
          <span className="w-6 h-px bg-cyan-400/60" />
          {label}
          <span className="w-6 h-px bg-cyan-400/60" />
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-lg  leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
