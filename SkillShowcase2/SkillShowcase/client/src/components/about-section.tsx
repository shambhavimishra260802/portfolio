import { Bug, Code, GraduationCap, Trophy } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Bug,
      title: "QA Expertise",
      description: "Manual testing across multiple domains with comprehensive test coverage",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with React.js, Node.js, and modern technologies",
      color: "text-accent"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science (7.54 CPI) from GLA University",
      color: "text-blue-500"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Gold Medalist at Summer Training Programme & Multiple Certifications",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-secondary mb-6" data-testid="about-summary-title">
              Professional Summary
            </h3>
            <div className="space-y-6 text-text-primary leading-relaxed">
              <p data-testid="about-description-1">
                Quality Detail-oriented and enthusiastic Manual QA Engineer with hands-on experience in executing 
                functional, smoke, sanity, integration, regression, and performance testing. Proficient in test plan 
                creation, test case execution, and defect lifecycle management across Agile environments.
              </p>
              <p data-testid="about-description-2">
                Experienced with tools such as PuTTY, WinSCP, and Oracle VPL, and skilled in web technologies like 
                React.js, HTML5, CSS3, and JavaScript. Strong grasp of SDLC, STLC, and manual QA best practices, 
                with a proven ability to ensure high-quality software delivery.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center" data-testid="about-location">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span><strong>Location:</strong> Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center" data-testid="about-email">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span><strong>Email:</strong> shambhavi260802@gmail.com</span>
              </div>
              <div className="flex items-center" data-testid="about-phone">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span><strong>Phone:</strong> +91-9301788717</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-light-bg p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-secondary mb-6" data-testid="highlights-title">
                Key Highlights
              </h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={index} className="flex items-start" data-testid={`highlight-${index}`}>
                      <div className={`bg-${highlight.color.split('-')[1]}-500/10 p-3 rounded-lg mr-4`}>
                        <IconComponent className={`h-5 w-5 ${highlight.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">{highlight.title}</h4>
                        <p className="text-text-primary text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
