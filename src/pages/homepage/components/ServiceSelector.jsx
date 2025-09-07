import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceSelector = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const vehicleBrands = [
    {
      id: 'porsche',
      name: 'Porsche',
      logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      specialties: ['PIWIS Diagnostics', 'Performance Tuning', 'Sport Mode Coding'],
      description: 'Factory-level diagnostics for all Porsche models including 911, Cayenne, Macan, and Panamera.',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'bmw',
      name: 'BMW',
      logo: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      specialties: ['ISTA Diagnostics', 'Coding & Programming', 'iDrive Updates'],
      description: 'Complete BMW diagnostic services using genuine ISTA software and factory procedures.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'audi',
      name: 'Audi/VW',
      logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      specialties: ['VCDS Diagnostics', 'VAG-COM Coding', 'Adaptation Services'],
      description: 'Comprehensive Audi and Volkswagen diagnostics with Ross-Tech VCDS and factory tools.',
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'mercedes',
      name: 'Mercedes',
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      specialties: ['Xentry Diagnostics', 'SCN Coding', 'COMAND Updates'],
      description: 'Mercedes-Benz diagnostics using genuine Xentry software and dealership procedures.',
      color: 'from-silver-500 to-silver-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Select Your Vehicle Brand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each brand requires specialized diagnostic tools and expertise. Choose your vehicle to see our specific capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vehicleBrands?.map((brand) => (
            <div
              key={brand?.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                selectedBrand === brand?.id ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setSelectedBrand(selectedBrand === brand?.id ? null : brand?.id)}
            >
              <div className={`bg-background rounded-xl p-6 border-2 transition-all duration-300 shadow-card hover:shadow-card-hover ${
                selectedBrand === brand?.id ? 'border-accent shadow-card-hover' : 'border-brand'
              }`}>
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-16 h-16 rounded-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${brand?.color} opacity-10`}></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{brand?.name?.charAt(0)}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{brand?.name}</h3>
                    <div className="space-y-1">
                      {brand?.specialties?.slice(0, 2)?.map((specialty, index) => (
                        <div key={index} className="text-sm text-muted-foreground">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Icon 
                      name={selectedBrand === brand?.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className={`transition-colors duration-300 ${
                        selectedBrand === brand?.id ? 'text-accent' : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Brand Details */}
        {selectedBrand && (
          <div className="bg-background rounded-xl p-8 border border-brand shadow-card">
            {vehicleBrands?.filter(brand => brand?.id === selectedBrand)?.map((brand) => (
                <div key={brand?.id} className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${brand?.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{brand?.name?.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{brand?.name} Diagnostics</h3>
                      <p className="text-muted-foreground">{brand?.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Specialized Services</h4>
                      <ul className="space-y-2">
                        {brand?.specialties?.map((specialty, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={16} className="text-success" />
                            <span>{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Common Issues</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center space-x-2">
                          <Icon name="AlertTriangle" size={16} className="text-warning" />
                          <span>Engine Performance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="AlertTriangle" size={16} className="text-warning" />
                          <span>Electrical Systems</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="AlertTriangle" size={16} className="text-warning" />
                          <span>Module Programming</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Pricing</h4>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Basic Diagnostic:</span> $149
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Complex Issues:</span> $249
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Programming:</span> $349
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-brand">
                    <Button
                      variant="default"
                      iconName="Calendar"
                      iconPosition="left"
                      className="btn-primary"
                    >
                      Book {brand?.name} Diagnostic
                    </Button>
                    <Button
                      variant="outline"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Ask Questions
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSelector;