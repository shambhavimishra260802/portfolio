import { Film, Hand, User, ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "FILMYVERSE",
      description: "Full Stack Movie Review Platform built using React, Firebase, Tailwind CSS, and Material-UI. Features OTP-based signup, movie browsing, and routing with Firestore-based data storage.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Material-UI"],
      icon: Film,
      color: "primary",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "LETTER DETECTOR",
      description: "Frontend Gesture Detection App created using React.js and MediaPipe for real-time English alphabet detection through hand gestures. Integrated GPU acceleration and tested thoroughly.",
      technologies: ["React.js", "MediaPipe", "Computer Vision", "GPU Acceleration"],
      icon: Hand,
      color: "accent",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "Designed and developed a responsive personal portfolio using HTML, CSS, and JavaScript, highlighting projects, contact details, and skills with interactive elements.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: User,
      color: "purple-500",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-cyan-900/10 to-pink-900/10">
        <div className="floating-particles absolute inset-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 via-cyan-500 to-pink-500 mx-auto animate-gradient-shift"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <div 
                key={index}
                className="project-card glass-effect rounded-xl shadow-2xl overflow-hidden hover:shadow-purple-500/25 transition-all duration-500 group h-full flex flex-col"
                data-testid={`project-${index}`}
              >
                {/* Project Header */}
                <div className="p-6 relative flex-1 flex flex-col">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className={`bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-purple-600' : index === 1 ? 'from-green-500 to-cyan-600' : 'from-pink-500 to-red-600'} p-3 rounded-lg mr-3`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600" data-testid={`project-title-${index}`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-primary mb-4 leading-relaxed flex-1" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`bg-${project.color}/10 text-${project.color} px-2 py-1 rounded text-sm`}
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4 mt-auto">
                    <a 
                      href={project.demoLink}
                      className={`flex items-center text-${project.color} hover:text-${project.color}/80 transition-colors`}
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="flex items-center text-text-primary hover:text-secondary transition-colors"
                      data-testid={`project-github-${index}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
