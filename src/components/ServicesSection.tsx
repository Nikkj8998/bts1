import { motion } from "framer-motion";
import { Wrench, Box, Flame, Settings } from "lucide-react";

const capabilities = [
  {
    icon: Wrench,
    title: "Sheet Metal Design & Manufacturing",
    desc: "Precision sheet metal solutions from concept to production with advanced tooling.",
  },
  {
    icon: Box,
    title: "Plastic Mould Design",
    desc: "Complex injection moulding design with DFM optimization and multi-cavity tooling.",
  },
  {
    icon: Flame,
    title: "Casting Solutions",
    desc: "Investment, sand, and die casting design with complete metallurgical analysis.",
  },
  {
    icon: Settings,
    title: "Tool Designing",
    desc: "Press tools, jigs, fixtures and progressive dies engineered for manufacturing excellence.",
  },
];

const verticals = [
  { name: "Automotive Engineering", years: "20 years" },
  { name: "Aerospace & Space", years: "10 years" },
  { name: "Electro Mechanical", years: "10 years" },
  { name: "Medical Devices", years: "10 years" },
  { name: "Consumer Products", years: "" },
  { name: "Heavy Machinery", years: "" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-[1] py-24 px-8 md:px-16 bg-accent text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
              Services & Technology
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            MANUFACTURING CAPABILITIES
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-[15px]">
            Horizontally integrated: Product Design, Manufacturing, Technical Animation, Analysis — all under one roof.
          </p>
        </motion.div>

        {/* Verticals */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {verticals.map((v) => (
            <div
              key={v.name}
              className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-4 text-center hover:border-primary/30 transition-colors"
            >
              <div className="font-display font-bold text-primary-foreground text-sm mb-1">{v.name}</div>
              {v.years && (
                <div className="font-mono text-[10px] text-primary-foreground/60 tracking-wider">{v.years}</div>
              )}
            </div>
          ))}
        </div>

        <div className="h-[20px]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-accent/80 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <cap.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary-foreground text-lg mb-1">{cap.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
