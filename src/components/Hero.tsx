import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/60 to-secondary/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-float glow-primary" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-secondary/25 to-primary/25 rounded-full animate-float glow-secondary" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hi, I'm Sarth Hemant Joshi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A dynamic Computer Science Engineer passionate about{" "}
            <span className="text-primary font-semibold">Web</span>,{" "}
            <span className="text-secondary font-semibold">Mobile Development</span>, and{" "}
            <span className="text-primary font-semibold">Tech Leadership</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="secondary-hero" 
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground mb-4">Currently at</p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <h3 className="font-semibold text-primary">VIT Vellore</h3>
                <p className="text-sm text-muted-foreground">CSE 2023-2027</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <h3 className="font-semibold text-secondary">E-Cell VIT</h3>
                <p className="text-sm text-muted-foreground">Senior Core Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;