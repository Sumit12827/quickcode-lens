import { motion } from "framer-motion";
import { Puzzle, FolderOpen, FileCode, ArrowRight } from "lucide-react";
import { KeyModule } from "@/types/repo";

interface KeyModulesProps {
  modules: KeyModule[];
}

const MODULE_COLORS = [
  { border: "border-primary/20", glow: "hover:border-primary/40 hover:shadow-primary/5", dot: "bg-primary" },
  { border: "border-accent/20", glow: "hover:border-accent/40 hover:shadow-accent/5", dot: "bg-accent" },
  { border: "border-success/20", glow: "hover:border-success/40 hover:shadow-success/5", dot: "bg-success" },
  { border: "border-warning/20", glow: "hover:border-warning/40 hover:shadow-warning/5", dot: "bg-warning" },
  { border: "border-neon-pink/20", glow: "hover:border-neon-pink/40 hover:shadow-neon-pink/5", dot: "bg-neon-pink" },
];

export function KeyModules({ modules }: KeyModulesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card rounded-2xl p-6 space-y-5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-success/40 to-transparent" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center">
          <Puzzle className="w-4 h-4 text-success" />
        </div>
        <h3 className="text-lg font-semibold">Key Modules</h3>
        <span className="ml-auto text-xs text-muted-foreground/50 px-2 py-0.5 rounded-full bg-secondary/50 border border-border/30">
          {modules.length} {modules.length === 1 ? 'module' : 'modules'}
        </span>
      </div>

      <div className="grid gap-3">
        {modules.map((mod, i) => {
          const colorSet = MODULE_COLORS[i % MODULE_COLORS.length];
          return (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              whileHover={{ x: 4 }}
              className={`group p-4 rounded-xl border ${colorSet.border} ${colorSet.glow} bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 cursor-default shadow-lg shadow-transparent hover:shadow-md`}
            >
              <div className="flex items-start gap-3">
                {/* Color dot indicator */}
                <div className={`w-2 h-2 rounded-full ${colorSet.dot} mt-1.5 flex-shrink-0`} />

                <div className="space-y-1.5 flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {mod.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {mod.purpose}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-mono mt-1">
                    <FolderOpen className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{mod.location}</span>
                  </div>
                </div>

                {/* Arrow on hover */}
                <ArrowRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary/50 transition-all duration-300 transform group-hover:translate-x-1 mt-1" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
