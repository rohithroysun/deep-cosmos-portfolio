import { motion } from "framer-motion";
import { GraduationCap, Target, Brain, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const strengths = [
  { icon: Brain, label: "ML / AI Focus" },
  { icon: Target, label: "Problem Solving" },
  { icon: Layers, label: "Scalable Architecture" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold text-center mb-16"
      >
        About <span className="neon-text">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* My Journey */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card neon-border p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="font-display text-2xl font-semibold">My Journey</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I'm a 5th-semester Engineering student at Panimalar Institute of Technology,
            passionate about building systems that learn and adapt. My journey started
            with curiosity about how machines think, and has evolved into a dedicated
            pursuit of crafting intelligent, user-centric applications.
          </p>
        </motion.div>

        {/* Goals & Strengths */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card neon-border p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="font-display text-2xl font-semibold">Goals &amp; Strengths</h3>
          </div>
          <div className="space-y-4">
            {strengths.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
