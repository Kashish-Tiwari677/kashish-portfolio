import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card gradient-border p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Want to know more?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Download my resume for a detailed overview of my skills, experience, and education.
            </p>
            <a
              href="/Kashish_Tiwari_CV.pdf"
              download
              className="btn-primary inline-flex"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
