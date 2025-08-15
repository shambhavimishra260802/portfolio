import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">
            Shambhavi Mishra
          </h3>
          <p className="text-white/80 mb-6" data-testid="footer-title">
            Quality Analyst & Web Developer
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:shambhavi260802@gmail.com" 
              className="text-white/80 hover:text-white transition-colors"
              data-testid="footer-email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+919301788717" 
              className="text-white/80 hover:text-white transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm" data-testid="footer-copyright">
              © 2024 Shambhavi Mishra. All rights reserved. Built with passion for quality and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
