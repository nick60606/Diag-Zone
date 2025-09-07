import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceSelector from './components/ServiceSelector';
import AvailabilityIndicator from './components/AvailabilityIndicator';
import TrustSignals from './components/TrustSignals';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import CaseStudies from './components/CaseStudies';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Homepage = () => {
  const currentYear = new Date()?.getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServiceSelector />
        <AvailabilityIndicator />
        <TrustSignals />
        <TechnicalCapabilities />
        <CaseStudies />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="8"
                      fill="var(--color-accent)"
                    />
                    <path
                      d="M12 20L18 26L28 14"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="15"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Diag Zone</span>
                  <span className="text-sm text-white/80 font-mono tracking-wide">
                    DIAGNOSTIC EXPERTS
                  </span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Premium automotive diagnostics from certified technicians who service the same dealerships you trust. 
                Complex problems solved with factory-level precision.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full pulse-availability"></div>
                  <span className="text-white/80">Available Today</span>
                </div>
                <span className="text-white/60">•</span>
                <span className="text-sm text-white/80">Boston Metro Area</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/services-by-brand" className="text-white/80 hover:text-accent transition-colors duration-300">
                    BMW Diagnostics
                  </a>
                </li>
                <li>
                  <a href="/services-by-brand" className="text-white/80 hover:text-accent transition-colors duration-300">
                    Mercedes Diagnostics
                  </a>
                </li>
                <li>
                  <a href="/services-by-brand" className="text-white/80 hover:text-accent transition-colors duration-300">
                    Porsche Diagnostics
                  </a>
                </li>
                <li>
                  <a href="/services-by-brand" className="text-white/80 hover:text-accent transition-colors duration-300">
                    Audi/VW Diagnostics
                  </a>
                </li>
                <li>
                  <a href="/services-by-brand" className="text-white/80 hover:text-accent transition-colors duration-300">
                    Programming & Coding
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span className="text-white/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span className="text-white/80">info@diagzone.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-accent mt-0.5" />
                  <span className="text-white/80">
                    Boston Metro Area<br />
                    Mobile Service Available
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="text-white/80">Mon-Sat: 8AM-6PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Icon name="AlertCircle" size={20} className="mr-2 text-accent" />
                  Emergency Diagnostic Service
                </h3>
                <p className="text-white/80 text-sm">
                  Vehicle won't start? Critical system failure? We offer emergency diagnostic services for urgent situations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Emergency Line
                </Button>
                <Button
                  variant="default"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  Text for Help
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-sm text-white/60">
                © {currentYear} Diag Zone. All rights reserved. | Licensed & Insured Automotive Diagnostics
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white/60 hover:text-accent transition-colors duration-300">
                  Terms of Service
                </a>
                <div className="flex items-center space-x-3">
                  <span className="text-white/60">Follow:</span>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                    <Icon name="Facebook" size={16} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                    <Icon name="Twitter" size={16} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                    <Icon name="Instagram" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-brand p-4 z-40">
        <div className="flex gap-3">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            className="flex-1"
          >
            Call Now
          </Button>
          <Button
            variant="default"
            iconName="Calendar"
            iconPosition="left"
            className="btn-primary flex-1"
          >
            Book Diagnostic
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;