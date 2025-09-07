import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BrandHero = ({ selectedBrand, onBrandSelect }) => {
  const brands = [
    {
      id: 'bmw',
      name: 'BMW',
      tagline: 'Ultimate Driving Machine Diagnostics',
      description: 'Advanced BMW coding, programming, and ISTA diagnostics for all BMW models',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=400&fit=crop',
      accent: 'from-blue-600 to-blue-800',
      textAccent: 'text-blue-600'
    },
    {
      id: 'mercedes',
      name: 'Mercedes-Benz',
      tagline: 'The Best or Nothing',
      description: 'STAR diagnostics and Mercedes-specific programming services',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=400&fit=crop',
      accent: 'from-gray-700 to-gray-900',
      textAccent: 'text-gray-700'
    },
    {
      id: 'porsche',
      name: 'Porsche',
      tagline: 'There Is No Substitute',
      description: 'PIWIS integration and specialized Porsche diagnostic services',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=400&fit=crop',
      accent: 'from-red-600 to-red-800',
      textAccent: 'text-red-600'
    },
    {
      id: 'audi',
      name: 'Audi/VW',
      tagline: 'Vorsprung durch Technik',
      description: 'VCDS capabilities and VAG-COM diagnostic expertise',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=400&fit=crop',
      accent: 'from-red-500 to-red-700',
      textAccent: 'text-red-500'
    }
  ];

  const currentBrand = brands?.find(brand => brand?.id === selectedBrand) || brands?.[0];

  return (
    <div className="relative bg-background">
      {/* Brand Selection Tabs */}
      <div className="border-b border-brand">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {brands?.map((brand) => (
              <button
                key={brand?.id}
                onClick={() => onBrandSelect(brand?.id)}
                className={`flex-shrink-0 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  selectedBrand === brand?.id
                    ? `border-accent ${brand?.textAccent}`
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                }`}
              >
                {brand?.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Content */}
      <div className="relative overflow-hidden bg-gradient-to-r from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${currentBrand?.accent} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">
                      {currentBrand?.name?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                      {currentBrand?.name}
                    </h1>
                    <p className={`text-lg font-medium ${currentBrand?.textAccent}`}>
                      {currentBrand?.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentBrand?.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-brand">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${currentBrand?.accent} flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Factory-Level Tools</p>
                    <p className="text-sm text-muted-foreground">OEM diagnostic equipment</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-brand">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${currentBrand?.accent} flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Mobile Service</p>
                    <p className="text-sm text-muted-foreground">We come to you</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="btn-primary hover-lift"
                >
                  Book {currentBrand?.name} Diagnostic
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call (555) 123-4567
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
                <Image
                  src={currentBrand?.image}
                  alt={`${currentBrand?.name} diagnostic services`}
                  className="w-full h-96 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentBrand?.accent} opacity-20`}></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-brand rounded-xl p-4 shadow-card-hover">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentBrand?.accent} flex items-center justify-center`}>
                    <span className="text-white font-bold">500+</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{currentBrand?.name} Vehicles</p>
                    <p className="text-sm text-muted-foreground">Successfully diagnosed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHero;