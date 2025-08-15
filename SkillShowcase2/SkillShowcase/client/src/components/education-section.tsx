import { GraduationCap, Award, School, Trophy, Building } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "GLA University, Mathura",
      year: "2024",
      gpa: "7.54 CPI",
      icon: GraduationCap
    },
    {
      degree: "Intermediate",
      field: "Physics, Chemistry, English, Mathematics, Biology",
      institution: "Sainik School Rewa",
      year: "2020",
      icon: School
    },
    {
      degree: "High School",
      field: "Physics, Chemistry, Mathematics, Biology",
      institution: "Sainik School Rewa",
      year: "2018",
      icon: School
    }
  ];

  const certifications = [
    {
      title: "Gold Medalist",
      issuer: "Summer Training Programme",
      description: "Web Development at GLA University",
      icon: Trophy,
      special: true
    },
    {
      title: "Infosys Springboard Certified",
      issuer: "Infosys",
      description: "HTML5, CSS3, React.js, Bootstrap 4, Java Programming",
      icon: Award,
      special: false
    }
  ];

  const domains = ["Telecom", "EdTech"];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4" data-testid="education-title">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center" data-testid="education-section-title">
              <GraduationCap className="text-primary mr-3 h-6 w-6" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div key={index} className="bg-light-bg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid={`education-${index}`}>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-secondary mb-2" data-testid={`education-degree-${index}`}>
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium mb-1" data-testid={`education-field-${index}`}>
                          {edu.field}
                        </p>
                        <p className="text-text-primary mb-2" data-testid={`education-institution-${index}`}>
                          {edu.institution}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-text-primary/60 text-sm" data-testid={`education-year-${index}`}>
                            {edu.year}
                          </span>
                          {edu.gpa && (
                            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm" data-testid={`education-gpa-${index}`}>
                              {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center" data-testid="certifications-section-title">
              <Award className="text-accent mr-3 h-6 w-6" />
              Certifications & Achievements
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div 
                    key={index} 
                    className={`p-6 rounded-xl border ${
                      cert.special 
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' 
                        : 'bg-light-bg border-transparent'
                    } shadow-sm hover:shadow-md transition-shadow`}
                    data-testid={`certification-${index}`}
                  >
                    <div className="flex items-start">
                      <div className={`${cert.special ? 'bg-yellow-500/20' : 'bg-blue-500/10'} p-3 rounded-lg mr-4`}>
                        <IconComponent className={`h-6 w-6 ${cert.special ? 'text-yellow-600' : 'text-blue-500'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-secondary mb-2" data-testid={`certification-title-${index}`}>
                          {cert.title}
                        </h4>
                        <p className={`font-medium mb-1 ${cert.special ? 'text-yellow-700' : 'text-blue-500'}`} data-testid={`certification-issuer-${index}`}>
                          {cert.issuer}
                        </p>
                        <p className="text-text-primary text-sm" data-testid={`certification-description-${index}`}>
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Domain Exposure */}
              <div className="bg-light-bg p-6 rounded-xl shadow-sm" data-testid="domain-exposure">
                <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center">
                  <Building className="text-purple-500 mr-3 h-5 w-5" />
                  Domain Exposure
                </h4>
                <div className="flex space-x-4">
                  {domains.map((domain, index) => (
                    <span 
                      key={index}
                      className="bg-purple-500/10 text-purple-500 px-4 py-2 rounded-lg"
                      data-testid={`domain-${index}`}
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
