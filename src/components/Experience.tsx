import { Calendar, MapPin, Building, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Android Application Developer",
      company: "RedBytes Pvt. Ltd.",
      location: "Internship",
      duration: "Jun 2025 - Jul 2025",
      type: "internship",
      description: "Developed native Android applications using Java and Android Studio. Worked on user interface design, API integration, and performance optimization.",
      skills: ["Android Studio", "Java", "XML", "API Integration", "UI/UX Design"],
      icon: Building
    },
    {
      role: "Senior Core Member",
      company: "E-Cell VIT",
      location: "VIT Vellore",
      duration: "2024 - Present",
      type: "leadership",
      description: "Leading E-Summit 25 and Innoventures initiatives. Coordinating with multiple teams, managing events, and driving entrepreneurship culture at VIT.",
      skills: ["Event Management", "Team Leadership", "Strategy Planning", "Public Speaking"],
      icon: Users
    },
    {
      role: "Event Organizer",
      company: "Yuva Marathi Club",
      location: "VIT Vellore",
      duration: "2023 - Present",
      type: "cultural",
      description: "Organized cultural events including Gudi Padwa and Aaikya. Managed logistics, coordinated with vendors, and ensured successful event execution.",
      skills: ["Event Planning", "Cultural Activities", "Team Coordination", "Logistics Management"],
      icon: Award
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'primary';
      case 'leadership':
        return 'secondary';
      case 'cultural':
        return 'primary';
      default:
        return 'primary';
    }
  };

  const getTypeBg = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-primary/10';
      case 'leadership':
        return 'bg-secondary/10';
      case 'cultural':
        return 'bg-primary/10';
      default:
        return 'bg-primary/10';
    }
  };

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience & Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on experience, leadership roles, and meaningful contributions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background hidden md:block" />
                  
                  <div className="md:ml-20 bg-skill-bg p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 ${getTypeBg(exp.type)} rounded-lg group-hover:scale-110 transition-transform`}>
                          <exp.icon className={`w-6 h-6 text-${getTypeColor(exp.type)}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <p className={`text-lg font-semibold text-${getTypeColor(exp.type)} mb-2`}>{exp.company}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-3 py-1 bg-${getTypeColor(exp.type)}/10 text-${getTypeColor(exp.type)} rounded-full text-sm font-medium border border-${getTypeColor(exp.type)}/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-skill-bg rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">E-Summit 25</div>
              <div className="text-sm text-muted-foreground">Leading Major Event</div>
            </div>
            <div className="text-center p-6 bg-skill-bg rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">Android</div>
              <div className="text-sm text-muted-foreground">App Development</div>
            </div>
            <div className="text-center p-6 bg-skill-bg rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">Cultural</div>
              <div className="text-sm text-muted-foreground">Event Coordination</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;