import { motion } from "framer-motion";

const STEPS = [
  { label: "Fetching repository structure...", icon: "📂" },
  { label: "Reading key files...", icon: "📄" },
  { label: "Analyzing architecture with AI...", icon: "🧠" },
  { label: "Generating insights...", icon: "✨" },
];

interface LoadingStateProps {
  step: number;
}

export function LoadingState({ step }: LoadingStateProps) {
  return (
    <div className="max-w-lg mx-auto py-16 space-y-10">
      {/* Orbital Animation */}
      <div className="relative w-28 h-28 mx-auto">
        {/* Center pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ filter: "blur(8px)" }}
        />
        <motion.div
          className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50"
        />

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 m-auto w-3 h-3"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            style={{ transformOrigin: "center center" }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: i === 0
                  ? "hsl(195 100% 50%)"
                  : i === 1
                  ? "hsl(270 80% 60%)"
                  : "hsl(160 84% 39%)",
                boxShadow: `0 0 12px ${
                  i === 0
                    ? "hsl(195 100% 50% / 0.5)"
                    : i === 1
                    ? "hsl(270 80% 60% / 0.5)"
                    : "hsl(160 84% 39% / 0.5)"
                }`,
                transform: `translateX(${30 + i * 12}px)`,
              }}
            />
          </motion.div>
        ))}

        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-primary/20"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border border-accent/10"
          style={{ borderStyle: "dashed" }}
        />
      </div>

      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="h-1 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Step {step + 1} of {STEPS.length}
        </p>
      </div>

      {/* Step List */}
      <div className="space-y-3">
        {STEPS.map((s, i) => {
          const isActive = i === step;
          const isComplete = i < step;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0.3, x: -10 }}
              animate={{
                opacity: isComplete || isActive ? 1 : 0.3,
                x: 0,
              }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "glass-card glow-border"
                  : isComplete
                  ? "bg-secondary/30"
                  : "bg-transparent"
              }`}
            >
              <div className="flex-shrink-0">
                {isComplete ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center"
                  >
                    <span className="text-success text-xs">✓</span>
                  </motion.div>
                ) : isActive ? (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-ring"
                  >
                    <span className="text-sm">{s.icon}</span>
                  </motion.div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center">
                    <span className="text-sm opacity-40">{s.icon}</span>
                  </div>
                )}
              </div>
              <span className={`text-sm ${
                isActive ? "text-foreground font-medium" : isComplete ? "text-muted-foreground" : "text-muted-foreground/50"
              }`}>
                {s.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
