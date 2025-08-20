import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "text-muted-foreground hover:text-primary" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "text-muted-foreground hover:text-secondary" },
    { name: "Email", icon: Mail, href: "mailto:joshisarth8yt@gmail.com", color: "text-muted-foreground hover:text-primary" },
    { name: "Phone", icon: Phone, href: "tel:+917350350254", color: "text-muted-foreground hover:text-secondary" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-section-bg border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sarth Joshi
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science Engineering student passionate about creating impactful 
                solutions through web development, mobile apps, and tech leadership.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-lg bg-skill-bg hover:bg-muted transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-primary">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300 py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-secondary">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:joshisarth8yt@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    joshisarth8yt@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a 
                    href="tel:+917350350254"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 7350350254
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full sm:w-auto"
                >
                  Let's Collaborate
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© 2025 Sarth Hemant Joshi | Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and Code</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;