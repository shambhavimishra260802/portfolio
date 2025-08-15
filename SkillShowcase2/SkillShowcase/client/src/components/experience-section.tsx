import { Bug, PenTool, Code } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Quality Analyst Trainee",
      company: "Checkbox Technology Pvt Ltd",
      period: "11/2024 - 05/2025",
      current: true,
      icon: Bug,
      color: "primary",
      responsibilities: [
        "Executed manual testing across multiple STB projects (Sky, Pan) covering functional, smoke, sanity, integration, regression, and performance testing",
        "Authored and maintained test plans and test cases aligned with project requirements",
        "Utilized tools such as PuTTY, WinSCP, Oracle VPL for system access, log collection, flashing, and verification processes",
        "Contributed to defect identification and tracking, working within Agile frameworks to ensure efficient releases"
      ]
    },
    {
      title: "Technical Content Engineer Intern",
      company: "GeeksForGeeks",
      period: "06/2024 - 10/2024",
      current: false,
      icon: PenTool,
      color: "accent",
      responsibilities: [
        "Created and reviewed high-quality technical documentation and tutorials on modern web development technologies including React.js, Next.js, Node.js, and JavaScript",
        "Wrote accurate and tested code samples for real-world developer use"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Intrainz",
      period: "05/2023 - 07/2023",
      current: false,
      icon: Code,
      color: "blue-500",
      responsibilities: [
        "Developed \"Interio\" – a responsive interior design website using HTML5, CSS3, JavaScript, and Bootstrap 4",
        "Focused on user-friendly UI/UX and efficient web layout structuring"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4" data-testid="experience-title">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="flex flex-col md:flex-row items-center" data-testid={`experience-${index}`}>
                  {/* Left side content for desktop */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:order-3 md:pl-8'}`}>
                    <div className="bg-light-bg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className={`flex items-center mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className={`bg-${exp.color}/10 p-2 rounded-lg`}>
                          <IconComponent className={`h-5 w-5 text-${exp.color}`} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-secondary mb-2" data-testid={`job-title-${index}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-${exp.color} font-medium mb-2 text-lg`} data-testid={`company-${index}`}>
                        {exp.company}
                      </p>
                      <p className="text-text-primary/60 text-base mb-4" data-testid={`period-${index}`}>
                        {exp.period}
                      </p>
                      <ul className={`text-text-primary text-base space-y-2 ${isLeft ? 'md:text-left' : ''}`}>
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} data-testid={`responsibility-${index}-${respIndex}`}>
                            • {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`relative z-10 bg-${exp.color} w-4 h-4 rounded-full my-4 md:my-0 hidden md:block md:order-2`}></div>
                  
                  {/* Right side spacer for desktop */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:order-3' : ''}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
