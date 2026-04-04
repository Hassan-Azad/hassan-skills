"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "blue" | "violet" | "none";
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = "none",
}: CardProps) {
  const glowMap = {
    cyan: "hover:border-cyan-500/30 hover:shadow-cyan-500/10",
    blue: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    violet: "hover:border-violet-500/30 hover:shadow-violet-500/10",
    none: "hover:border-white/10",
  };

  return (
    <motion.div
      className={`rounded-2xl bg-[#0d1525] border border-white/[0.06] ${
        hover ? `transition-all duration-300 hover:shadow-xl ${glowMap[glow]}` : ""
      } ${className}`}
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
