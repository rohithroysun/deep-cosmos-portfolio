import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const FooterSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <footer id="contact" className="py-24 relative border-t border-border">
      <div className="absolute inset-0 neon-glow-bg opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          Get In <span className="neon-text">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-glass-border focus:border-primary text-foreground placeholder:text-muted-foreground"
            />
            <Input
              placeholder="Your Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-glass-border focus:border-primary text-foreground placeholder:text-muted-foreground"
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary/50 border-glass-border focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
            />
            <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-semibold neon-border">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-center items-center gap-8"
          >
            <p className="text-muted-foreground text-center leading-relaxed">
              Feel free to reach out for collaborations, projects, or just to say hi!
            </p>
            <div className="flex gap-5">
              <a
                href="#"
                className="w-14 h-14 rounded-xl glass-card neon-border flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-xl glass-card neon-border flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-8">
              © 2026 Inbanesan V. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
