import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import BrandHero from './components/BrandHero';
import ServiceMatrix from './components/ServiceMatrix';
import CommonIssues from './components/CommonIssues';
import CaseStudies from './components/CaseStudies';
import BookingForm from './components/BookingForm';

const ServicesByBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState('bmw');

  // Set initial brand based on URL params or default to BMW
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const brandParam = urlParams?.get('brand');
    if (brandParam && ['bmw', 'mercedes', 'porsche', 'audi']?.includes(brandParam)) {
      setSelectedBrand(brandParam);
    }
  }, []);

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
    // Update URL without page reload
    const newUrl = new URL(window.location);
    newUrl?.searchParams?.set('brand', brandId);
    window.history?.pushState({}, '', newUrl);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Brand Hero Section */}
        <BrandHero 
          selectedBrand={selectedBrand}
          onBrandSelect={handleBrandSelect}
        />
        
        {/* Service Capabilities Matrix */}
        <ServiceMatrix selectedBrand={selectedBrand} />
        
        {/* Common Issues Database */}
        <CommonIssues selectedBrand={selectedBrand} />
        
        {/* Case Studies */}
        <CaseStudies selectedBrand={selectedBrand} />
        
        {/* Booking Form */}
        <BookingForm selectedBrand={selectedBrand} />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary-foreground"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="8"
                      fill="var(--color-accent)"
                    />
                    <path
                      d="M12 20L18 26L28 14"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold">Diag Zone</span>
                  <p className="text-sm text-primary-foreground/80">DIAGNOSTIC EXPERTS</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Premium automotive diagnostics service trusted by Top-100 US dealerships. 
                Factory-level expertise delivered directly to you.
              </p>
              <div className="flex space-x-4">
                <a href="tel:5551234567" className="text-accent hover:text-accent/80 transition-colors">
                  (555) 123-4567
                </a>
                <span className="text-primary-foreground/60">|</span>
                <a href="mailto:info@diagzone.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@diagzone.com
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/services-by-brand?brand=bmw" className="hover:text-accent transition-colors">BMW Diagnostics</a></li>
                <li><a href="/services-by-brand?brand=mercedes" className="hover:text-accent transition-colors">Mercedes Service</a></li>
                <li><a href="/services-by-brand?brand=porsche" className="hover:text-accent transition-colors">Porsche Diagnostics</a></li>
                <li><a href="/services-by-brand?brand=audi" className="hover:text-accent transition-colors">Audi/VW Service</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Boston Metro Area</li>
                <li>Mobile Service Available</li>
                <li>Mon-Fri: 8AM-6PM</li>
                <li>Sat: 9AM-4PM</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date()?.getFullYear()} Diag Zone. All rights reserved. | Licensed & Insured | ASE Certified Technicians
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesByBrand;