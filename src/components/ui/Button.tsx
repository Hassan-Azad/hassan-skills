"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40",
    outline:
      "border border-cyan-500/40 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 font-medium",
    ghost:
      "text-slate-400 hover:text-white hover:bg-white/5 font-medium",
  };

  const baseClass = `relative inline-flex items-center gap-2 rounded-xl transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      className={baseClass}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
