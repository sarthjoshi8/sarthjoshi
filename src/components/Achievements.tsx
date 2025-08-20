import { Trophy, Medal, Award, Star, Target, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "VITEEE Rank 601",
      description: "Secured rank 601 among 2+ lakh students in VIT Engineering Entrance Examination",
      category: "Academic",
      icon: Trophy,
      color: "primary",
      year: "2023"
    },
    {
      title: "E-Summit 25 Leadership",
      description: "Leading the organization of E-Summit 25, VIT's flagship entrepreneurship event",
      category: "Leadership",
      icon: Users,
      color: "secondary",
      year: "2024"
    },
    {
      title: "District Level Cricket",
      description: "Represented district in cricket competitions, showcasing teamwork and sportsmanship",
      category: "Sports",
      icon: Medal,
      color: "primary",
      year: "2022"
    },
    {
      title: "Roller Skating Champion",
      description: "Achieved district-level recognition in roller skating competitions",
      category: "Sports",
      icon: Star,
      color: "secondary",
      year: "2021"
    },
    {
      title: "Cultural Event Excellence",
      description: "Successfully organized Gudi Padwa and Aaikya cultural celebrations at VIT",
      category: "Cultural",
      icon: Award,
      color: "primary",
      year: "2024"
    },
    {
      title: "Innoventures Coordinator",
      description: "Key coordinator for Innoventures initiative under E-Cell VIT",
      category: "Innovation",
      icon: Target,
      color: "secondary",
      year: "2024"
    }
  ];

  const stats = [
    { number: "601", label: "VITEEE Rank", sublabel: "Among 2L+ students" },
    { number: "2+", label: "Years Experience", sublabel: "In leadership" },
    { number: "5+", label: "Major Events", sublabel: "Organized & led" },
    { number: "1000+", label: "Students Impacted", sublabel: "Through events" }
  ];

  return (
    <section id="achievements" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of excellence across academics, leadership, sports, and cultural domains
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-skill-bg rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-skill-bg p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-${achievement.color}/10 rounded-lg group-hover:bg-${achievement.color}/20 transition-colors group-hover:scale-110 transform duration-300`}>
                    <achievement.icon className={`w-6 h-6 text-${achievement.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`px-2 py-1 bg-${achievement.color}/10 text-${achievement.color} rounded-full text-xs font-medium border border-${achievement.color}/20`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These achievements represent my commitment to excellence and continuous growth. 
                I'm always eager to take on new challenges and create meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Let's Collaborate
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-hover transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;