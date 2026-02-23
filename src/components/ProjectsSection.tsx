import { motion } from "framer-motion";
import { ExternalLink, Github, Plus, ShieldAlert, MessageSquare, Twitter } from "lucide-react";

const projects = [
  {
    title: "UPI Fraud Detection",
    description: "Real-time fraud detection system using XGBoost and Random Forest models to identify suspicious UPI transactions with high accuracy.",
    tags: ["XGBoost", "Random Forest", "Python", "ML"],
    icon: ShieldAlert,
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Complaint System",
    description: "A full-stack intelligent complaint management platform with automated routing, status tracking, and analytics dashboard.",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    icon: MessageSquare,
    github: "#",
    demo: "#",
  },
  {
    title: "Twitter Clone",
    description: "A feature-rich social media clone built with Java 17, supporting real-time feeds, user authentication, and interactive timelines.",
    tags: ["Java 17", "REST API", "Full-Stack"],
    icon: Twitter,
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold text-center mb-16"
      >
        Featured <span className="neon-text">Projects</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card neon-border p-8 group hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <project.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add more card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="glass-card border-dashed border-2 border-primary/20 p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 transition-all duration-300 group"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Plus className="h-7 w-7 text-primary" />
          </div>
          <span className="text-muted-foreground font-medium">More coming soon</span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
