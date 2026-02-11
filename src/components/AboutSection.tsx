import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Palette, Code2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: GraduationCap, label: "Graduated 2025", desc: "BBA CA (computer application)" },
    { icon: Code2, label: "Full Stack Dev", desc: "Building scalable web apps" },
    { icon: Palette, label: "Graphic Designer", desc: "6 months professional experience" },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Developer by day,{" "}
            <span className="gradient-text">designer by passion</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm a recent graduate with a deep love for building things that live on the internet.
            I bring ideas to life through clean code and creative design, always striving for the
            perfect balance between aesthetics and functionality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-8 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
