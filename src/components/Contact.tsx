import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7350350254",
      href: "tel:+917350350254",
      color: "primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "joshisarth8yt@gmail.com",
      href: "mailto:joshisarth8yt@gmail.com",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chhatrapati Sambhajinagar, Maharashtra",
      href: "#",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "primary"
    },
    {
      name: "Video Profile",
      icon: ExternalLink,
      href: "#",
      color: "secondary"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you and explore how we can work together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking for a dedicated developer, a team leader for your next project, 
                  or someone passionate about innovation and technology, I'm always open to new opportunities 
                  and meaningful conversations.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-skill-bg rounded-lg border border-border hover:shadow-lg transition-all duration-300 group">
                    <div className={`p-3 bg-${contact.color}/10 rounded-lg group-hover:bg-${contact.color}/20 transition-colors`}>
                      <contact.icon className={`w-5 h-5 text-${contact.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <a 
                        href={contact.href}
                        className={`font-medium text-foreground hover:text-${contact.color} transition-colors`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`inline-flex items-center space-x-2 px-4 py-2 bg-${social.color}/10 text-${social.color} rounded-lg border border-${social.color}/20 hover:bg-${social.color}/20 transition-all duration-300 hover:scale-105`}
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <div className="pt-6">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-skill-bg p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" variant="secondary-hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Typically responds within <span className="font-semibold text-primary">24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;