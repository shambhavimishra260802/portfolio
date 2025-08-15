import { Mail, Download, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/WhatsApp Image 2025-08-15 at 23.04.21_dbc6d7a5_1755279935850.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download the PDF resume
    // For now, we'll show a message
    alert("Resume download functionality would be implemented here. Please contact Shambhavi directly for her resume.");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
        <div className="floating-particles absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-shift"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Professional Profile Photo with 3D effects */}
          <div className="w-44 h-44 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-3d-rotate opacity-30 blur-sm"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl neon-glow">
              <img 
                src={profileImage} 
                alt="Shambhavi Mishra - Professional Photo" 
                className="w-full h-full object-cover scale-110"
                style={{ 
                  objectPosition: 'center 25%',
                  filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text" data-testid="hero-name">
            Shambhavi Mishra
          </h1>
          
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6" data-testid="hero-title">
            Quality Analyst & Web Developer
          </p>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Detail-oriented Manual QA Engineer with expertise in functional testing, web technologies, 
            and modern development practices. Passionate about ensuring high-quality software delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="border-2 border-purple-500 text-purple-600 bg-white px-8 py-3 rounded-lg hover:bg-purple-500 hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
              data-testid="button-resume"
            >
              <Download className="mr-2 h-4 w-4 animate-3d-bounce" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2 glass-effect p-3 rounded-lg hover:scale-105 transition-all duration-300" data-testid="contact-location">
              <MapPin className="h-4 w-4 text-pink-500 animate-3d-bounce" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2 glass-effect p-3 rounded-lg hover:scale-105 transition-all duration-300" data-testid="contact-phone">
              <Phone className="h-4 w-4 text-purple-500 animate-3d-bounce" />
              <span>+91-9301788717</span>
            </div>
            <div className="flex items-center gap-2 glass-effect p-3 rounded-lg hover:scale-105 transition-all duration-300" data-testid="contact-email">
              <Mail className="h-4 w-4 text-cyan-500 animate-3d-bounce" />
              <span>shambhavi260802@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
