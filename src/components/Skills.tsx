import { 
  Code2, 
  Smartphone, 
  Globe, 
  Users, 
  Trophy, 
  MessageCircle,
  Database,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 88 },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 82 },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Android Studio", level: 88 },
        { name: "Java (Android)", level: 85 },
        { name: "React Native", level: 75 },
        { name: "UI/UX Design", level: 80 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "VS Code", level: 95 },
      ]
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: Users, description: "Leading teams and projects effectively" },
    { name: "Event Coordination", icon: Trophy, description: "Organizing tech and cultural events" },
    { name: "Communication", icon: MessageCircle, description: "Clear and effective communication" },
    { name: "Problem Solving", icon: GitBranch, description: "Analytical thinking and solution design" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technical skills and soft skills that drive innovation and success
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-skill-bg p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Soft Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-skill-bg p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
                    <skill.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;