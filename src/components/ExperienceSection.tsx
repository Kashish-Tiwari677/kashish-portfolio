import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Palette } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Full Stack Developer Intern",
    company: "Bitabox Technology",
    period: "Present",
    description:
      "Building and maintaining full-stack web applications using React, Node.js, and modern cloud infrastructure. Collaborating with cross-functional teams to deliver production-ready features.",
    current: true,
  },
  {
    icon: Palette,
    role: "Graphic Designer",
    company: "Mage Marketer",
    period: "6 Months",
    description:
      "Created brand identities, marketing materials, and UI designs for various clients. Specialized in modern, minimalist design with strong typographic foundations.",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-neon-purple to-transparent"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.25 }}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                )}
              </div>

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass-card-hover p-6 group">
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-heading tracking-wider uppercase text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
