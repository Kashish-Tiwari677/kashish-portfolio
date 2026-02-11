import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading font-semibold text-sm gradient-text">
          Kashish Tiwari
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} — Designed & Built with passion
        </p>
        <div className="flex gap-4">
          {[
            { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=kashishtiwari058@gmail.com" },
            { icon: Github, href: "https://github.com/Kashish-Tiwari677" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kashish-tiwari77" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
