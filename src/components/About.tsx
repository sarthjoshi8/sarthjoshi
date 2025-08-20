import { GraduationCap, MapPin, Calendar } from "lucide-react";
import profileImage from "@/assets/sarth-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center md:text-left">
              <div className="relative inline-block">
                <div className="w-80 h-80 rounded-2xl overflow-hidden mx-auto md:mx-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                   <img 
                     src="/lovable-uploads/23d2dd0a-cabb-423d-a49d-2f9a4ccbdd70.png" 
                     alt="Sarth Hemant Joshi" 
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-float">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Computer Science Engineering student at VIT Vellore with strong skills in 
                  <span className="text-primary font-semibold"> web development</span>, 
                  <span className="text-secondary font-semibold"> Android app development</span>, and 
                  <span className="text-primary font-semibold"> event leadership</span>.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I thrive on building impactful projects, leading teams, and organizing tech and cultural events. 
                  My passion lies in creating solutions that make a difference while fostering innovation and collaboration.
                </p>
              </div>

              {/* Education & Location */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-skill-bg p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-primary">VIT Vellore</p>
                      <p className="text-sm text-muted-foreground">Computer Science Engineering</p>
                      <p className="text-sm text-muted-foreground">2023 - 2027</p>
                    </div>
                    <div className="pt-2">
                      <p className="font-medium text-secondary">Deogiri College</p>
                      <p className="text-sm text-muted-foreground">2021 - 2023</p>
                    </div>
                  </div>
                </div>

                <div className="bg-skill-bg p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <h3 className="font-semibold text-lg">Location</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Chhatrapati Sambhajinagar</p>
                    <p className="text-sm text-muted-foreground">Maharashtra, India</p>
                    <div className="flex items-center space-x-2 pt-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Available for opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-skill-bg rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">601</div>
                  <div className="text-sm text-muted-foreground">VITEEE Rank</div>
                </div>
                <div className="text-center p-4 bg-skill-bg rounded-lg border border-border">
                  <div className="text-2xl font-bold text-secondary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-skill-bg rounded-lg border border-border col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-primary">E-Cell</div>
                  <div className="text-sm text-muted-foreground">Core Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;