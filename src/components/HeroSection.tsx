import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-[68px] z-[1]">
      {/* Left Column: Copy */}
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-12 lg:py-20 relative">
        {/* Accent line divider on right (desktop) */}
        <div className="hidden lg:block absolute top-[68px] bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-7"
        >
          <div className="w-8 h-0.5 bg-primary" />
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent-orange-2">
            Engineering Excellence for Tier-1, Tier-2 &amp; OEMs
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display font-bold text-[clamp(40px,4.5vw,62px)] leading-[1.05] tracking-tight text-foreground mb-6"
        >
          YOU DEFINE THE FRICTION;
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-primary inline-block"
          >
            WE ENGINEER
            <br />
            THE FLOW!
          </motion.span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[15px] font-light leading-[1.7] text-silver max-w-[480px] mb-11 border-l-2 border-border pl-5"
        >
          From raw problem to realized product: We{" "}
          <strong className="text-light font-medium">design the solution</strong>, deliver the result, and anchor the
          support. Your <strong className="text-light font-medium">End-to-End Engineering Ecosystem.</strong>
        </motion.p>

        {/* CTA Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex gap-4 items-center flex-wrap"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded hover:bg-accent-orange-2 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(20_92%_48%/0.4)] transition-all relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <span className="relative">Discuss Your Problem Statement</span>
            <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/15 text-light text-sm font-medium tracking-wide rounded hover:border-foreground/35 hover:bg-foreground/5 hover:text-foreground transition-all"
          >
            <ChevronDown className="w-4 h-4" />
            View Our Process
          </a>
        </motion.div>
      </div>

      {/* Right Column: Engineering Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex items-center justify-center overflow-hidden bg-black min-h-[420px] lg:min-h-0"
      >
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_50%,hsl(var(--cyan)/0.08),transparent_60%)]" />
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_80%,hsl(var(--primary)/0.08),transparent_50%)]" />
        </div>

        {/* Orbit system */}
        <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
          {/* Ring 1 */}
          <div
            className="absolute inset-0 rounded-full border-2 border-cyan shadow-[0_0_25px_hsl(var(--cyan)/0.7),0_0_70px_hsl(var(--cyan)/0.3),inset_0_0_25px_hsl(var(--cyan)/0.15)]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              animation: "spin-slow 25s linear infinite",
            }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan shadow-[0_0_20px_hsl(var(--cyan)),0_0_50px_hsl(var(--cyan)/0.7),0_0_80px_hsl(var(--cyan)/0.3)]" />
          </div>
          {/* Ring 2 */}
          <div
            className="absolute rounded-full border-2 border-primary/70 shadow-[0_0_20px_hsl(var(--primary)/0.5),0_0_60px_hsl(var(--primary)/0.2),inset_0_0_20px_hsl(var(--primary)/0.1)]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "72%",
              height: "72%",
              animation: "spin-slow 18s linear infinite reverse",
            }}
          >
            <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)),0_0_35px_hsl(var(--primary)/0.5)]" />
          </div>
          {/* Ring 3 */}
          <div
            className="absolute rounded-full border-2 border-cyan shadow-[0_0_25px_hsl(var(--cyan)/0.7),0_0_60px_hsl(var(--cyan)/0.3),inset_0_0_25px_hsl(var(--cyan)/0.15)]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "44%",
              height: "44%",
              animation: "spin-slow 12s linear infinite",
            }}
          >
            <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_20px_hsl(var(--cyan)),0_0_50px_hsl(var(--cyan)/0.7),0_0_80px_hsl(var(--cyan)/0.3)]" />
          </div>

          {/* Core */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.4),hsl(var(--primary)/0.08))] border-[1.5px] border-primary/60 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.4),0_0_60px_hsl(var(--primary)/0.15)]"
            style={{ animation: "core-pulse 3s ease-in-out infinite" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(var(--accent-orange-2))"
              strokeWidth="1.8"
              className="w-7 h-7 drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          {/* Nodes */}
          <EngNode position="top-[5%] left-1/2 -translate-x-1/2" label="Concept & Design" color="cyan" delay={0.8}>
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(var(--cyan))" strokeWidth="1.8" className="w-5 h-5">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
            </svg>
          </EngNode>
          <EngNode position="top-1/2 right-[3%] -translate-y-1/2" label="Analysis" color="primary" delay={1.0}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(var(--accent-orange))"
              strokeWidth="1.8"
              className="w-5 h-5"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </EngNode>
          <EngNode position="bottom-[5%] left-1/2 -translate-x-1/2" label="Prototype" color="cyan" delay={1.2}>
            <svg viewBox="0 0 24 24" fill="none" stroke="hsl(var(--cyan))" strokeWidth="1.8" className="w-5 h-5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </EngNode>
          <EngNode position="top-1/2 left-[3%] -translate-y-1/2" label="Production Support" color="primary" delay={0.9}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(var(--accent-orange))"
              strokeWidth="1.8"
              className="w-5 h-5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </EngNode>
        </div>

        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none z-[2] shadow-[0_0_12px_hsl(var(--primary)/0.8),0_0_30px_hsl(var(--primary)/0.4)]"
          style={{ animation: "scan-line 4s ease-in-out infinite" }}
        />

        {/* Corner brackets */}
        <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-primary z-[3]" />
        <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-primary z-[3]" />
        <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-primary z-[3]" />
        <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-primary z-[3]" />

        {/* Floating badge */}
        <div
          className="absolute bottom-4 right-4 md:bottom-9 md:right-9 z-10 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-background/90 border border-cyan/30 rounded-md backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          style={{ animation: "badge-float 4s ease-in-out infinite" }}
        >
          <div
            className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_hsl(180_100%_39%)]"
            style={{ animation: "dot-pulse 2s ease-in-out infinite" }}
          />

          <span className="font-mono text-[9px] md:text-[10px] font-medium tracking-[0.1em] text-cyan uppercase">
            Concept to Production in Action
          </span>
        </div>
      </motion.div>
    </section>
  );
};

const EngNode = ({
  position,
  label,
  children,
  delay,
}: {
  position: string;
  label: string;
  color: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute flex flex-col items-center gap-1.5 ${position}`}
  >
    <div className="w-11 h-11 bg-black/80 border border-cyan/50 rounded-lg flex items-center justify-center shadow-[0_0_20px_hsl(var(--cyan)/0.4),0_0_40px_hsl(var(--primary)/0.2)] backdrop-blur-lg">
      <div className="drop-shadow-[0_0_6px_hsl(var(--cyan)/0.7)]">{children}</div>
    </div>
    <span className="font-mono text-[9px] font-semibold tracking-[0.15em] text-white uppercase text-center whitespace-nowrap drop-shadow-[0_0_8px_hsl(var(--cyan)/0.8)]">
      {label}
    </span>
  </motion.div>
);

export default HeroSection;
