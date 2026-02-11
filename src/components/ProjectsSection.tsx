import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, } from "lucide-react";

const projects = [
  {
    title: "Zoom Video Main",
    description:
      "A real-time video conferencing application featuring camera view, screen sharing, and seamless voice communication for smooth virtual meetings.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-primary/20 to-neon-purple/20",
    liveLink: "https://video-call-frontend-7qcb.onrender.com",
  },
   {
    title: "Portfolio",
    description:
      "A modern, responsive portfolio website designed to showcase projects, skills, and experience with a polished user interface and smooth interactions.",
    tags: ["React", "Typescript"],
    color: "from-primary/20 to-neon-purple/20",
    liveLink: "https://kashish-portfolio-xi.vercel.app/",
  },
  {
    title: "Astrocharm",
    description:
      "An e-commerce platform for Astrocharm bracelets, showcasing products with a modern UI, secure backend, and seamless data management.",
    tags: ["React.js", "Node.js", "MongoDB"],
    color: "from-neon-purple/20 to-neon-cyan/20",
    liveLink: "https://astrocharm.co.in/",
  },
  {
    title: "The AI Viral Videos",
    description:
      "An AI-powered platform that creates and publishes viral short-form videos using intelligent content generation, trends analysis, and automated workflows.",
    tags: ["React.js", "Superprofile"],
    color: "from-neon-cyan/20 to-primary/20",
    liveLink: "https://www.theviralaivideos.com/",
  },
  {
    title: "Building Stock Trading",
    description:
      "A stock trading platform inspired by Zerodha, enabling users to track markets, manage portfolios, and execute trades with a fast and intuitive interface.",
    tags: ["React.js", "Node.js", "MongoDB"],
    color: "from-neon-cyan/20 to-primary/20",
    liveLink: "https://astrocharm.co.in/",
  },
  {
    title: "Elegant International",
    description:
      "A single-page website for a recycling manufacturing company, presenting services, processes, and sustainability goals with a clean and professional design.",
    tags: ["React.js"],
    color: "from-primary/20 to-neon-cyan/20",
    liveLink: "https://elegantinternational.co/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative dot-grid" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Gradient header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl border border-foreground/10 bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="font-heading font-bold text-2xl gradient-text">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">

                  {/* Live link */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/20 hover:bg-primary/20 hover:border-primary/40 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-heading"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
