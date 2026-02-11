import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex justify-start overflow-hidden"
    >
      {/* 🔥 LOCAL FIX FOR BUTTON BUG */}
      <style>{`
        .btn-outline {
          pointer-events: auto;
        }
        .btn-outline * {
          pointer-events: none;
        }
        .btn-outline::before,
        .btn-outline::after {
          content: none !important;
          display: none !important;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-36">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary font-heading text-xs sm:text-sm tracking-[0.35em] uppercase mb-6"
        >
          Full Stack Developer & Graphic Designer
        </motion.p>

        {/* Name */}
        <div className="grid gap-2 sm:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="gradient-text font-heading font-bold leading-none
                       text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Kashish
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="gradient-text font-heading font-bold leading-none
                       text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Tiwari
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-10 font-light leading-relaxed"
        >
          Crafting digital experiences that blend clean code with stunning
          visuals. Building the future, one pixel and one line of code at a time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-primary cursor-pointer">
            <span className="pointer-events-none">View Work</span>
            <ArrowDown className="w-4 h-4 pointer-events-none" />
          </a>

          <a
            href="/Kashish_Tiwari_CV.pdf"
            download
            className="btn-outline relative flex items-center gap-3 px-6 py-3 cursor-pointer"
          >
            <Download className="w-4 h-4 pointer-events-none" />
            <span className="pointer-events-none">Download CV</span>
          </a>
        </motion.div>

        {/* ✅ FIXED: Scroll indicator BELOW buttons (DESKTOP ONLY) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden lg:flex justify-center mt-14"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
