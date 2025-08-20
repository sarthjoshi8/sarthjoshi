import { ExternalLink, Github, Smartphone, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      category: "Mobile",
      description: "Native Android application with modern UI, secure payment integration, and real-time inventory management. Built using Java and Android Studio.",
      tech: ["Android Studio", "Java", "Firebase", "Material Design"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      color: "primary"
    },
    {
      title: "Portfolio Website Platform",
      category: "Web",
      description: "Dynamic portfolio platform with CMS integration, responsive design, and optimized performance. Built with React and modern web technologies.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      icon: Globe,
      color: "secondary"
    },
    {
      title: "Event Management System",
      category: "Leadership",
      description: "Comprehensive system for managing E-Cell events, participant registration, and resource allocation. Streamlined event coordination for E-Summit 25.",
      tech: ["React.js", "Express.js", "PostgreSQL", "AWS"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      icon: Code,
      color: "primary"
    },
    {
      title: "Cultural Event App",
      category: "Mobile",
      description: "Mobile application for cultural event participation, featuring real-time updates, photo sharing, and community engagement for college events.",
      tech: ["React Native", "Firebase", "Node.js", "Socket.io"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      color: "secondary"
    },
    {
      title: "Task Management Dashboard",
      category: "Web",
      description: "Productivity dashboard with advanced analytics, team collaboration features, and integration with popular tools. Focus on user experience and performance.",
      tech: ["TypeScript", "React.js", "Chart.js", "REST API"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      icon: Globe,
      color: "primary"
    },
    {
      title: "Innovation Hub Platform",
      category: "Leadership",
      description: "Platform connecting entrepreneurs, mentors, and investors. Features startup showcase, networking tools, and resource sharing for the innovation ecosystem.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      icon: Code,
      color: "secondary"
    }
  ];

  const categories = ["All", "Web", "Mobile", "Leadership"];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creative solutions across web, mobile, and leadership domains
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-skill-bg rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className={`w-16 h-16 text-${project.color} opacity-50`} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full text-sm font-medium border border-${project.color}/20`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="rounded-full">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;