import { Code, Globe, Bug, Settings, Layers } from "lucide-react";

export default function SkillsSection() {
  const programmingSkills = [
    "Java", "JavaScript", "Python", "SQL"
  ];

  const webTechnologies = [
    "React.js", "HTML5", "CSS3", "Node.js"
  ];

  const testingSkills = [
    "Manual Testing", "Functional Testing", "Regression Testing",
    "Integration Testing", "Performance Testing", "API Testing"
  ];

  const tools = [
    "Visual Studio Code", "Jira", "PuTTY", "WinSCP", "Oracle VPL", "TFTPd64"
  ];

  const methodologies = [
    "Agile Methodology", "Waterfall Model", "SDLC", "STLC", "Defect Lifecycle"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10">
        <div className="floating-particles absolute inset-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4" data-testid="skills-title">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto animate-gradient-shift"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="glass-effect p-8 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 project-card" data-testid="programming-skills">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Code className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Programming Languages</h3>
            </div>
            <div className="space-y-3">
              {programmingSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 px-4 py-3 rounded-lg border border-blue-300 hover:scale-105 transition-all duration-300 text-center font-medium"
                  data-testid={`programming-skill-${index}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="glass-effect p-8 rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 project-card" data-testid="web-technologies">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-green-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Globe className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-600">Web Technologies</h3>
            </div>
            <div className="space-y-3">
              {webTechnologies.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-600 px-4 py-3 rounded-lg border border-green-300 hover:scale-105 transition-all duration-300 text-center font-medium"
                  data-testid={`web-skill-${index}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Testing Expertise */}
          <div className="glass-effect p-8 rounded-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 project-card" data-testid="testing-expertise">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Bug className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600">Testing Expertise</h3>
            </div>
            <div className="space-y-3">
              {testingSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-pink-500/20 to-red-500/20 text-pink-600 px-4 py-3 rounded-lg border border-pink-300 hover:scale-105 transition-all duration-300 text-center font-medium"
                  data-testid={`testing-skill-${index}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Methodologies */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 project-card" data-testid="tools-section">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Settings className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Tools & Applications</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 px-4 py-3 rounded-lg border border-orange-300 hover:scale-105 transition-all duration-300 text-center font-medium"
                  data-testid={`tool-${index}`}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 project-card" data-testid="methodologies-section">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Layers className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">Methodologies</h3>
            </div>
            <div className="space-y-3">
              {methodologies.map((method, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-600 px-4 py-3 rounded-lg border border-indigo-300 hover:scale-105 transition-all duration-300 text-center font-medium"
                  data-testid={`methodology-${index}`}
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
