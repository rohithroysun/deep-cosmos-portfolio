import { motion } from "framer-motion";
import { Code2, Braces, Server, MonitorSmartphone, BarChart3, TreePine } from "lucide-react";

const skills = [
  { name: "Java", icon: Braces, color: "text-orange-400" },
  { name: "Python", icon: Code2, color: "text-yellow-400" },
  { name: "Spring Boot", icon: Server, color: "text-green-400" },
  { name: "React", icon: MonitorSmartphone, color: "text-cyan-400" },
  { name: "XGBoost", icon: BarChart3, color: "text-primary" },
  { name: "Random Forest", icon: TreePine, color: "text-emerald-400" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute inset-0 neon-glow-bg opacity-30" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold text-center mb-16"
      >
        My <span className="neon-text">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card neon-border p-6 flex flex-col items-center gap-4 cursor-default group"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <skill.icon className={`h-7 w-7 ${skill.color}`} />
            </div>
            <span className="font-display font-semibold text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
