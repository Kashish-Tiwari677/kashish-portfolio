import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send,  MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

emailjs.init("XZTV4e4yOao6BdKLE");

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_6uqsn6i",
        "template_osk4njh",
        {
          title: "Portfolio Contact",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }
      );

      setShowSuccess(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Message failed ❌");
    }
  };

  const socials = [
  {
    icon: MessageCircle,
    href: "https://wa.me/919039297612?text=Hi%20Kashish,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    label: "WhatsApp",
  },
  {
  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&to=kashishtiwari058@gmail.com",
  label: "Email",
},
  {
    icon: Github,
    href: "https://github.com/Kashish-Tiwari677",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kashish-tiwari77",
    label: "LinkedIn",
  },
];


  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {[
              { key: "name", label: "Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.key} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 font-heading text-sm pointer-events-none ${
                    focused === field.key ||
                    formState[field.key as keyof typeof formState]
                      ? "-top-2.5 text-xs text-primary bg-background px-1"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={formState[field.key as keyof typeof formState]}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [field.key]: e.target.value,
                    })
                  }
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 font-body text-sm text-foreground"
                />
              </div>
            ))}

            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 font-heading text-sm pointer-events-none ${
                  focused === "message" || formState.message
                    ? "-top-2.5 text-xs text-primary bg-background px-1"
                    : "top-4 text-muted-foreground"
                }`}
              >
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 font-body text-sm text-foreground resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-8 mb-6">
              <h3 className="font-heading font-semibold text-lg mb-3">
                Let's build something amazing
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you have a project in mind, need a developer for your
                team, or just want to say hello — I'd love to hear from you. I'm
                always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="bg-background rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl"
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-heading font-bold mb-2">
              Thank you!
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Your message has been sent successfully.  
              I’ll get back to you as soon as possible 🚀
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="btn-primary w-full"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactSection;
