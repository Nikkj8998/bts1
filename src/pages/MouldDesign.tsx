import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Layers,
  Activity,
  ArrowRight,
  Shield,
  CheckCircle2,
  FlaskConical,
  Gauge,
  Hammer,
  LayoutGrid,
  Cpu,
  Settings,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Slide 1 — Project Running Process
import processFlowImg from "@/assets/ppt/image1.jpg";
// Slide 2 — DFM
import dfmImg from "@/assets/ppt/image3.png";
// Slide 3 — Grill Mesh
import grillMovingHalfImg from "@/assets/ppt/image4.png";
import grillFixedHalfImg from "@/assets/ppt/image5.png";
import grillTopViewImg from "@/assets/ppt/image8.png";
// Slide 4 — Mould Base & Assembly
import mouldBaseImg from "@/assets/ppt/image9.png";
import mouldAssemblyImg from "@/assets/ppt/image10.png";
import mouldPhysicalImg from "@/assets/ppt/image11.jpg";
// Slide 5 — Motor Housing
import motorHousingImg1 from "@/assets/ppt/image13.jpg";
import motorHousingImg2 from "@/assets/ppt/image14.jpg";
// Slide 6 — Moldflow
import moldflowResultsImg from "@/assets/ppt/image15.png";
import moldflowCoolingImg from "@/assets/ppt/image16.png";
// Slide 7 — VMC Machines
import haasImg from "@/assets/ppt/image20.jpg";
import feelerImg from "@/assets/ppt/image21.jpg";
// Slide 8 — Press Tool (exploded mould assembly)
import pressToolAssemblyImg from "@/assets/ppt/image40.png";
// Slide 9 — Transfer Die
import transferDie1Img from "@/assets/ppt/image41.jpg";
import transferDie2Img from "@/assets/ppt/image47.jpg";
// Slide 10 — Plate Type Dies
import plateDie1Img from "@/assets/ppt/image53.jpg";
import plateDie2Img from "@/assets/ppt/image55.jpg";
// Slide 11 — Trial Press
import trialPressImg from "@/assets/ppt/image60.jpg";
import trialPressActionImg from "@/assets/ppt/image61.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const fadeUpFast = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const grillMeshSpecs = [
  { label: "Part Name", value: "Grille Mesh" },
  { label: "Material", value: "ABS" },
  { label: "Shrink", value: "0.55%" },
  { label: "Press", value: "3,300 T" },
  { label: "Weight", value: "47 / 300 Lbs." },
];

const motorHousingSpecs = [
  { label: "Material", value: "PA66 + 30GF" },
  { label: "Cavity", value: "2 Cavity" },
  { label: "Mold Size", value: "550 × 617 × 900 mm" },
  { label: "Mold Weight", value: "1,312 kg" },
];

const feelerSpecs = [
  { no: "1", desc: "Travel", value: "1020 × 520 × 505 mm" },
  { no: "2", desc: "Table Size", value: "1300 × 550 mm" },
  { no: "3", desc: "Carrying Capacity", value: "1,200 Kgs" },
  { no: "4", desc: "T-Slot Width", value: "16 mm" },
  { no: "5", desc: "Tool Type", value: "BT-50" },
  { no: "6", desc: "Spindle Speed", value: "12,000 rpm" },
  { no: "7", desc: "Max. Feed", value: "25,000 /min" },
  { no: "8", desc: "Spindle Motor", value: "30 HP" },
  { no: "9", desc: "Tool Changer", value: "30 + 1" },
  { no: "10", desc: "Air Pressure", value: "6.9 Bar" },
  { no: "11", desc: "Controller", value: "HAAS" },
  { no: "12", desc: "Coolant Tank", value: "208 Ltrs" },
];

const haasSpecs = [
  { no: "1", desc: "Travel", value: "1016 × 660 × 685 mm" },
  { no: "2", desc: "Table Size", value: "1321 × 584 mm" },
  { no: "3", desc: "Carrying Capacity", value: "1,800 Kgs" },
  { no: "4", desc: "T-Slot Width", value: "18 mm" },
  { no: "5", desc: "Tool Type", value: "BT-40" },
  { no: "6", desc: "Spindle Speed", value: "7,500 rpm" },
  { no: "7", desc: "Max. Feed", value: "48,000 /min" },
  { no: "8", desc: "Spindle Motor", value: "28 HP" },
  { no: "9", desc: "Tool Changer", value: "30 + 1" },
  { no: "10", desc: "Air Pressure", value: "6 Bar" },
  { no: "11", desc: "Controller", value: "Mazatrol" },
  { no: "12", desc: "Coolant Tank", value: "250 Ltrs" },
];

const trialPresses = [
  { capacity: "160 Ton", type: "Power Press with Cushion", bedSize: "600 × 600 mm", stroke: "300 mm", dieHeight: null },
  { capacity: "100 Ton", type: "Mechanical Press", bedSize: "1,150 × 680 mm", stroke: "200 mm", dieHeight: "360 mm" },
  { capacity: "80 Ton", type: "Hydraulic Press with Cushion", bedSize: "750 × 600 mm", stroke: "100 mm", dieHeight: null },
];

const closingPoints = [
  { icon: Layers, title: "Domain Expertise", desc: "Decades of battle-tested experience across automotive, aerospace, and industrial sectors." },
  { icon: FlaskConical, title: "Niche Projects Showcase", desc: "Proven track record on complex, high-tolerance tooling that most vendors cannot execute." },
  { icon: Cpu, title: "In-House Technical Expertise", desc: "Fully equipped VMC machining centres and in-house trial press bays eliminate external dependency." },
  { icon: Gauge, title: "Best Cost Option", desc: "Competitive pricing without compromise — engineering efficiency drives our cost structure." },
  { icon: Shield, title: "Reliable Quality & Delivery", desc: "ISO-certified processes with strict milestone tracking and on-time delivery commitment." },
];

const SectionLabel = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-8 h-0.5 bg-primary" />
    <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent-orange-2">{label}</span>
    <div className="w-8 h-0.5 bg-primary" />
  </div>
);

const SectionLabelLight = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-8 h-0.5 bg-primary" />
    <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-primary">{label}</span>
    <div className="w-8 h-0.5 bg-primary" />
  </div>
);

const MouldDesign = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative z-[1] pt-32 pb-20 px-8 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <SectionLabel label="Plastic Mould Design" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PRECISION TOOLING FROM <br className="hidden md:block" /> CONCEPT TO PRODUCTION
            </h1>
            <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed mb-8">
              Our Plastic Mould Design division delivers end-to-end tooling solutions — from DFM analysis and
              complex mould design to in-house VMC machining, Moldflow validation, and full-scale trial press
              runs. Every tool we design performs exactly on your production floor.
            </p>
            <div className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 rounded-lg px-6 py-3">
              <CheckCircle2 className="w-4 h-4 text-accent-orange-2 shrink-0" />
              <p className="font-display font-bold text-foreground text-base md:text-lg">
                What We Design Digitally is Exactly What You Manufacture Physically
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Project Running Process ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabelLight label="Project Running Process" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              DEDICATED PROJECT MANAGEMENT
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Effective project management is essential for program success. Our dedicated project managers bring
              extensive expertise in the mould industry, ensuring seamless execution and deep technical understanding.
              By maintaining consistent project manager assignments for our partners, we foster strong, long-term
              collaborations and a thorough grasp of program specifications and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, title: "Dedicated Managers", desc: "A single, consistent project manager per program — deep ownership, zero handover friction." },
              { icon: Activity, title: "Seamless Execution", desc: "Milestone-driven scheduling with real-time progress visibility and proactive bottleneck resolution." },
              { icon: Layers, title: "Long-Term Partnership", desc: "We invest in understanding your specifications so every subsequent program runs faster and tighter." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUpFast(i * 0.1)}
                className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Flowchart */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h3 className="font-display font-bold text-primary-foreground text-lg">Complete Program Flow — RFQ to After Service</h3>
            </div>
            <div className="rounded-xl border border-primary-foreground/15 overflow-hidden bg-white shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
              <img
                src={processFlowImg}
                alt="Project Running Process — RFQ to After Service flowchart"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-primary-foreground/40">
              Full program flow: Customer RFQ → Quote → Design → CNC → Machining → EDM → Trial → Shipment → After Service
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DFM Analysis ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel label="DFM Analysis" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              DESIGN FOR MANUFACTURABILITY
            </h2>
            <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed">
              Before a single cavity is cut, we interrogate every geometry for manufacturability risk. Our DFM
              reports identify draw direction, undercut features, lifter & slider requirements, ejection
              positions, and draft angle issues — eliminating costly rework before tooling begins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: ChevronRight, title: "Draw Direction", desc: "Tooling draw direction and customer vehicle co-ordinate analysis with draft angle verification." },
              { icon: Layers, title: "Undercut Analysis", desc: "Complete identification of lifters and sliders required — lifter and slider counts defined upfront." },
              { icon: Settings, title: "Ejection Strategy", desc: "Tentative ejection pin positions established; straight lifters and ejector pin counts confirmed." },
              { icon: FlaskConical, title: "Draft Analysis", desc: "Doghouse lifter clash detection and proposal generation before any steel is cut." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUpFast(i * 0.1)}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-4 h-4 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">{item.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* DFM Full Example */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-accent-orange-2 rounded-full" />
              <h3 className="font-display font-bold text-foreground text-lg">DFM Example — Automotive Panel Analysis</h3>
            </div>
            <div className="rounded-xl border border-border overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.06)] bg-card">
              <img
                src={dfmImg}
                alt="DFM analysis example showing draw direction, undercut features, ejection and draft analysis"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/60">
              Draw Direction · Undercut Features (Lifters 13 nos / Sliders 6 nos) · Ejection Layout · Draft Analysis
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Grill Mesh Mould Design ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabelLight label="Mould Design Example 01" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              GRILL MESH MOULD DESIGN
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-[15px]">
              A complete mould design with full mechanisms — fixed half, moving half, lifter systems,
              and ejection layout — engineered to exact production specification.
            </p>
          </motion.div>

          {/* Specs bar */}
          <motion.div {...fadeUpFast(0)} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
            {grillMeshSpecs.map((spec) => (
              <div key={spec.label} className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary mb-1">{spec.label}</p>
                <p className="font-display font-bold text-primary-foreground text-lg">{spec.value}</p>
              </div>
            ))}
          </motion.div>

          {/* 3-image gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div {...fadeUpFast(0)} className="rounded-xl border border-primary-foreground/15 overflow-hidden bg-[#1a1f2e]">
              <div className="bg-accent/40 px-4 py-2.5 border-b border-primary-foreground/10">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">Moving Half — Ejector System</p>
              </div>
              <img src={grillMovingHalfImg} alt="Grill Mesh moving half with ejector system" className="w-full h-auto block" />
            </motion.div>
            <motion.div {...fadeUpFast(0.1)} className="rounded-xl border border-primary-foreground/15 overflow-hidden bg-[#1a1f2e]">
              <div className="bg-accent/40 px-4 py-2.5 border-b border-primary-foreground/10">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">Fixed Half — Complete Assembly</p>
              </div>
              <img src={grillFixedHalfImg} alt="Grill Mesh fixed half complete assembly" className="w-full h-auto block" />
            </motion.div>
            <motion.div {...fadeUpFast(0.2)} className="rounded-xl border border-primary-foreground/15 overflow-hidden bg-[#1a1f2e]">
              <div className="bg-accent/40 px-4 py-2.5 border-b border-primary-foreground/10">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">Moving Half — Top View</p>
              </div>
              <img src={grillTopViewImg} alt="Grill Mesh moving half top view with operator side labels" className="w-full h-auto block" />
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {["Fixed Half", "Moving Half", "Complete Mold Mechanisms", "Lifter System", "300 Lbs. Part"].map((tag) => (
              <span key={tag} className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-accent-orange-2/30 text-accent-orange-2 bg-accent-orange-2/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mould Base & Assembly ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel label="Mould Base & Assembly" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              FROM CAD TO MACHINED STEEL
            </h2>
            <p className="text-silver max-w-xl mx-auto text-[15px]">
              Our mould bases are precision-machined in-house and assembled to tight tolerances — every component
              verified before first trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: mouldBaseImg, label: "Mould Base", caption: "Precision machined mould base — fixed half" },
              { img: mouldAssemblyImg, label: "Mould Assembly", caption: "Complete mould assembly with slide rail mechanism" },
              { img: mouldPhysicalImg, label: "Physical Mould", caption: "Assembled mould ready for trial press run" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUpFast(i * 0.1)}
                className="rounded-xl border border-border overflow-hidden bg-card hover:border-primary/30 transition-colors"
              >
                <div className="bg-card/80 px-4 py-2.5 border-b border-border">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.label}</p>
                </div>
                <div className="bg-muted/30 flex items-center justify-center p-2">
                  <img src={item.img} alt={item.caption} className="w-full h-auto block rounded" />
                </div>
                <div className="px-4 py-3">
                  <p className="text-silver text-xs leading-relaxed">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Motor Housing Mould ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabelLight label="Mould Design Example 02" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              MOTOR HOUSING MOULD
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-[15px]">
              A complex 2-cavity mould in high-glass-fibre PA66+30GF — engineered for structural integrity
              and long-run production stability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Specs */}
            <motion.div {...fadeUpFast(0)}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {motorHousingSpecs.map((spec) => (
                  <div key={spec.label} className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-4">
                    <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary mb-1">{spec.label}</p>
                    <p className="font-display font-bold text-primary-foreground text-lg">{spec.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Mould Base", "Mould Assembly", "High Glass Fibre", "Structural Grade", "2-Cavity Tool"].map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-accent-orange-2/30 text-accent-orange-2 bg-accent-orange-2/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Photos */}
            <motion.div {...fadeUpFast(0.1)} className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary-foreground/15 overflow-hidden">
                <div className="bg-accent/40 px-3 py-2 border-b border-primary-foreground/10">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">Assembly View</p>
                </div>
                <img src={motorHousingImg1} alt="Motor housing mould assembly" className="w-full h-auto block" />
              </div>
              <div className="rounded-xl border border-primary-foreground/15 overflow-hidden">
                <div className="bg-accent/40 px-3 py-2 border-b border-primary-foreground/10">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">Open View</p>
                </div>
                <img src={motorHousingImg2} alt="Motor housing mould open showing cavity" className="w-full h-auto block" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Moldflow Analysis ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel label="Simulation" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              MOLDFLOW ANALYSIS SUPPORT
            </h2>
            <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed">
              We simulate plastic flow before steel is cut. Our Moldflow analysis predicts fill imbalances,
              pressure drops, weld line locations, cooling time requirements, and warpage — giving you a
              validated tool design before any hard tooling spend.
            </p>
          </motion.div>

          {/* Multi-part results */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-accent-orange-2 rounded-full" />
              <h3 className="font-display font-bold text-foreground text-lg">Flow & Warpage Analysis — Multi-Part Case Studies</h3>
            </div>
            <div className="rounded-xl border border-border overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.06)] bg-card">
              <img
                src={moldflowResultsImg}
                alt="Moldflow analysis results for IP, Front Door, Tail Lamp Housing and Head Lamp Housing"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/60">
              IP · Front Door · Tail Lamp Housing · Head Lamp Housing — Flow, Warp & Cool Analysis
            </p>
          </motion.div>

          {/* Cooling / Cycle Time */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h3 className="font-display font-bold text-foreground text-lg">Tool Validation — Cooling Circuit & Cycle Time Prediction</h3>
            </div>
            <div className="rounded-xl border border-border overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.06)] bg-card">
              <img
                src={moldflowCoolingImg}
                alt="Moldflow cooling analysis with cavity cooling, core cooling, and accurate cycle time prediction table"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/60">
              Cavity Cooling · Core Cooling · Cycle Time: Injection 8s + Packing 15s + Cooling 22s + Ejection 15s = 60s Total
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VMC Machines ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabelLight label="In-House Manufacturing" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              VMC MACHINE CAPABILITIES
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-[15px]">
              Our in-house Vertical Machining Centres eliminate third-party dependency for cavity and core
              machining — delivering speed, accuracy, and complete process control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FEELER 40(A) */}
            <motion.div {...fadeUpFast(0)}>
              <div className="rounded-xl border border-primary-foreground/15 overflow-hidden mb-4 bg-[#0d1117] flex items-center justify-center p-6">
                <img src={feelerImg} alt="FEELER 40(A) VMC Machine" className="max-h-56 w-auto object-contain" />
              </div>
              <div className="bg-accent/60 border border-primary-foreground/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-primary-foreground/10 flex items-center gap-3">
                  <h3 className="font-display font-bold text-primary-foreground text-lg">FEELER 40 (A)</h3>
                  <span className="ml-auto font-mono text-[10px] tracking-[0.15em] uppercase text-primary">VMC Machine</span>
                </div>
                <div className="p-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 font-mono text-[10px] tracking-wider uppercase text-primary text-left w-8">No.</th>
                        <th className="px-4 py-2 font-mono text-[10px] tracking-wider uppercase text-primary text-left">Spec</th>
                        <th className="px-4 py-2 font-mono text-[10px] tracking-wider uppercase text-primary text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feelerSpecs.map((row, i) => (
                        <tr key={row.no} className={`border-t border-primary-foreground/5 ${i % 2 === 0 ? "bg-accent/40" : ""}`}>
                          <td className="px-4 py-2.5 font-mono text-[11px] text-primary">{row.no}</td>
                          <td className="px-4 py-2.5 text-primary-foreground/80 text-[13px]">{row.desc}</td>
                          <td className="px-4 py-2.5 font-display font-semibold text-primary-foreground text-[13px] text-right">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* HAAS V3YT */}
            <motion.div {...fadeUpFast(0.1)}>
              <div className="rounded-xl border border-primary-foreground/15 overflow-hidden mb-4 bg-[#0d1117] flex items-center justify-center p-6">
                <img src={haasImg} alt="HAAS V3YT VMC Machine" className="max-h-56 w-auto object-contain" />
              </div>
              <div className="bg-accent/60 border border-primary-foreground/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-primary-foreground/10 flex items-center gap-3">
                  <h3 className="font-display font-bold text-primary-foreground text-lg">HAAS V3YT</h3>
                  <span className="ml-auto font-mono text-[10px] tracking-[0.15em] uppercase text-primary">VMC Machine</span>
                </div>
                <div className="p-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 font-mono text-[10px] tracking-wider uppercase text-primary text-left w-8">No.</th>
                        <th className="px-4 py-2 font-mono text-[10px] tracking-wider uppercase text-primary text-left">Spec</th>
                        <th className="px-4 py-2 font-mono text-[10px] tracking-wider uppercase text-primary text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {haasSpecs.map((row, i) => (
                        <tr key={row.no} className={`border-t border-primary-foreground/5 ${i % 2 === 0 ? "bg-accent/40" : ""}`}>
                          <td className="px-4 py-2.5 font-mono text-[11px] text-primary">{row.no}</td>
                          <td className="px-4 py-2.5 text-primary-foreground/80 text-[13px]">{row.desc}</td>
                          <td className="px-4 py-2.5 font-display font-semibold text-primary-foreground text-[13px] text-right">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Press Tool Design ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel label="Solutions in Action" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              PRESS TOOL DESIGN
            </h2>
            <p className="text-silver max-w-2xl mx-auto text-[15px]">
              From single-stage pierce dies to complete transfer die sequences for automotive body panels —
              our press tool engineering covers the full spectrum of sheet metal forming complexity.
            </p>
          </motion.div>

          {/* Exploded tool assembly showcase */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h3 className="font-display font-bold text-foreground text-lg">Complete Press Tool Assembly — Exploded View</h3>
            </div>
            <div className="rounded-xl border border-border overflow-hidden bg-card flex items-center justify-center p-6 md:p-10 shadow-[0_0_40px_hsl(var(--primary)/0.06)]">
              <img
                src={pressToolAssemblyImg}
                alt="Exploded view of complete press tool assembly showing all layers"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Transfer Die */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-accent-orange-2 rounded-full" />
              <h3 className="font-display font-bold text-foreground text-xl">Transfer Die — Automotive Panels</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="bg-card px-4 py-2.5 border-b border-border">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">Transfer Die — Top Half</p>
                </div>
                <div className="flex items-center justify-center p-4 bg-muted/20">
                  <img src={transferDie1Img} alt="Transfer die top half CAD model" className="w-full h-auto block rounded" />
                </div>
              </div>
              <div className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="bg-card px-4 py-2.5 border-b border-border">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">Transfer Die — Full Assembly</p>
                </div>
                <div className="flex items-center justify-center p-4 bg-muted/20">
                  <img src={transferDie2Img} alt="Transfer die full assembly CAD model" className="w-full h-auto block rounded" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { no: "01", label: "Draw Die", desc: "Initial forming with controlled material flow." },
                { no: "02", label: "Trim Die", desc: "Precision trimming to exact part boundaries." },
                { no: "03", label: "Forming Die", desc: "Complex geometries with tight tolerances." },
                { no: "04", label: "Restrike Die", desc: "Springback correction — dimensional lock-in." },
              ].map((stage, i) => (
                <motion.div key={stage.label} {...fadeUpFast(i * 0.08)} className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors relative">
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2 mb-2">Stage {stage.no}</div>
                  <h4 className="font-display font-bold text-foreground text-base mb-1">{stage.label}</h4>
                  <p className="text-silver text-sm">{stage.desc}</p>
                  {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-4 h-4 text-silver/30" />}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Plate Type Dies */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h3 className="font-display font-bold text-foreground text-xl">Plate Type Dies — Designed & Manufactured</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="bg-card px-4 py-2.5 border-b border-border">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">Crash Form Die — Machined</p>
                </div>
                <div className="p-3 bg-muted/20">
                  <img src={plateDie1Img} alt="Crash form die machined pair" className="w-full h-auto block rounded" />
                </div>
              </div>
              <div className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="bg-card px-4 py-2.5 border-b border-border">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">Pierce Die — Open View</p>
                </div>
                <div className="p-3 bg-muted/20">
                  <img src={plateDie2Img} alt="Pierce die open view showing punch and die detail" className="w-full h-auto block rounded" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: Hammer, label: "Pierce Die", desc: "High-precision hole piercing with engineered clearances." },
                { icon: Hammer, label: "Crash Form Die", desc: "Rapid flanges and complex bends in a single stroke." },
                { icon: Hammer, label: "Forming Die", desc: "Multi-stage forming for complex panel geometries." },
                { icon: Hammer, label: "Piercing Die", desc: "Simultaneous multi-hole piercing for high-volume panels." },
              ].map((die, i) => (
                <motion.div key={die.label} {...fadeUpFast(i * 0.08)} className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                  <die.icon className="w-5 h-5 text-accent-orange-2 mb-3" />
                  <h4 className="font-display font-bold text-foreground text-base mb-1">{die.label}</h4>
                  <p className="text-silver text-sm">{die.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trial Press Facility ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabelLight label="Trial Press Facility" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              IN-HOUSE TRIAL PRESS DETAILS
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-[15px]">
              Tools are trialled on our own press floor before customer handover — ensuring first-hit accuracy
              and reducing your validation cycle.
            </p>
          </motion.div>

          {/* Press photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div {...fadeUpFast(0)} className="rounded-xl border border-primary-foreground/15 overflow-hidden">
              <div className="bg-accent/40 px-4 py-2.5 border-b border-primary-foreground/10">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">Trial Press Machine</p>
              </div>
              <div className="bg-[#0d1117] flex items-center justify-center p-6">
                <img src={trialPressImg} alt="SNX-250 trial press machine" className="max-h-72 w-auto object-contain" />
              </div>
            </motion.div>
            <motion.div {...fadeUpFast(0.1)} className="rounded-xl border border-primary-foreground/15 overflow-hidden">
              <div className="bg-accent/40 px-4 py-2.5 border-b border-primary-foreground/10">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">Press Trial — In Action</p>
              </div>
              <div className="bg-[#0d1117] flex items-center justify-center p-6">
                <img src={trialPressActionImg} alt="Trial press in action with formed parts" className="max-h-72 w-auto object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Press specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trialPresses.map((press, i) => (
              <motion.div
                key={press.capacity}
                {...fadeUpFast(i * 0.1)}
                className="bg-accent/60 border border-primary-foreground/10 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-accent-orange-2" />
                </div>
                <div className="font-display font-extrabold text-3xl text-primary-foreground mb-1">{press.capacity}</div>
                <div className="font-mono text-[11px] tracking-wider uppercase text-primary mb-4">{press.type}</div>
                <div className="space-y-2 border-t border-primary-foreground/10 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary-foreground/60">Bed Size</span>
                    <span className="font-semibold text-primary-foreground">{press.bedSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary-foreground/60">Stroke</span>
                    <span className="font-semibold text-primary-foreground">{press.stroke}</span>
                  </div>
                  {press.dieHeight && (
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/60">Die Height</span>
                      <span className="font-semibold text-primary-foreground">{press.dieHeight}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Batara ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel label="Why Batara" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              THE COMPLETE ADVANTAGE
            </h2>
            <p className="text-silver max-w-xl mx-auto text-[15px]">
              We would be pleased to present a detailed demonstration. Here is why leading OEMs and Tier-1
              manufacturers choose to partner with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {closingPoints.map((point, i) => (
              <motion.div
                key={point.title}
                {...fadeUpFast(i * 0.08)}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{point.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-[1] py-20 px-8 md:px-16 bg-accent text-primary-foreground">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary-foreground mb-4">
            Ready for a Detailed Presentation & Demo?
          </h2>
          <p className="text-primary-foreground/70 text-[15px] mb-8">
            Submit your mould design specifications or initiate a project conversation directly with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="flex items-center gap-2 px-8 py-3 bg-primary rounded text-primary-foreground font-semibold tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all"
            >
              Request a Presentation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 rounded bg-primary-foreground/5 text-primary-foreground font-medium tracking-wide hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Our Engineers
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MouldDesign;
