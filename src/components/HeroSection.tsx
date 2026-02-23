import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full neon-glow-bg animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-3 tracking-wide text-sm uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="neon-text">ROHITH S</span>
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Machine Learning Engineer &amp; Full-Stack Developer
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              Engineering intelligent solutions for a digital world.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-6 text-base rounded-lg neon-border transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Right photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-150 photo-glow animate-glow-pulse" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full glass-card neon-border flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold neon-text">RS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
