import { Code2, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Hassan Azad<span className="text-cyan-400">.</span>
            </span>
          </div>

          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={12} className="text-cyan-400 fill-cyan-400" /> by Hassan
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/hassan-azad000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 flex items-center justify-center transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:hassanazad917@gmail.com"
              className="w-9 h-9 rounded-xl border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 flex items-center justify-center transition-all duration-200"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Hassan Azad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
