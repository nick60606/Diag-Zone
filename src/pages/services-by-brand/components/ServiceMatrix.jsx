import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceMatrix = ({ selectedBrand }) => {
  const [expandedService, setExpandedService] = useState(null);

  const servicesByBrand = {
    bmw: [
      {
        id: 'coding',
        name: 'BMW Coding & Programming',
        description: 'Advanced BMW coding services using ISTA/D and ISTA/P',
        capabilities: [
          'Module coding and programming',
          'Feature activation and deactivation',
          'Software updates and retrofits',
          'Key programming and registration'
        ],
        equipment: 'BMW ISTA, ICOM Next, E-Sys',
        price: 'Starting at $150',
        duration: '1-3 hours',
        icon: 'Code'
      },
      {
        id: 'diagnostics',
        name: 'BMW Diagnostics',
        description: 'Comprehensive BMW diagnostic services',
        capabilities: [
          'Full system scan and analysis',
          'Live data monitoring',
          'Fault code interpretation',
          'Component testing'
        ],
        equipment: 'BMW ISTA, ICOM A2/A3',
        price: 'Starting at $120',
        duration: '30-90 minutes',
        icon: 'Search'
      },
      {
        id: 'maintenance',
        name: 'BMW Service Reset',
        description: 'Service indicator and maintenance resets',
        capabilities: [
          'Oil service reset',
          'Brake service reset',
          'Inspection reset',
          'Component adaptation'
        ],
        equipment: 'BMW ISTA, ICOM',
        price: 'Starting at $80',
        duration: '15-30 minutes',
        icon: 'Settings'
      }
    ],
    mercedes: [
      {
        id: 'star',
        name: 'STAR Diagnostics',
        description: 'Mercedes-Benz STAR diagnostic system',
        capabilities: [
          'Complete system diagnostics',
          'Guided troubleshooting',
          'Component activation',
          'Service functions'
        ],
        equipment: 'Mercedes STAR, C4/C5/C6',
        price: 'Starting at $140',
        duration: '45-120 minutes',
        icon: 'Star'
      },
      {
        id: 'programming',
        name: 'Mercedes Programming',
        description: 'ECU programming and coding services',
        capabilities: [
          'ECU programming',
          'Key programming',
          'Module coding',
          'Software updates'
        ],
        equipment: 'Mercedes STAR, Vediamo',
        price: 'Starting at $180',
        duration: '1-4 hours',
        icon: 'Cpu'
      },
      {
        id: 'calibration',
        name: 'System Calibration',
        description: 'Advanced system calibrations',
        capabilities: [
          'Camera calibration',
          'Radar calibration',
          'Steering angle sensor',
          'Suspension calibration'
        ],
        equipment: 'Mercedes STAR, Calibration tools',
        price: 'Starting at $200',
        duration: '1-2 hours',
        icon: 'Target'
      }
    ],
    porsche: [
      {
        id: 'piwis',
        name: 'PIWIS Diagnostics',
        description: 'Porsche PIWIS diagnostic system',
        capabilities: [
          'Complete vehicle diagnostics',
          'Actuator testing',
          'Parameter programming',
          'Service functions'
        ],
        equipment: 'Porsche PIWIS 3/4',
        price: 'Starting at $160',
        duration: '45-90 minutes',
        icon: 'Zap'
      },
      {
        id: 'programming',
        name: 'Porsche Programming',
        description: 'ECU and module programming',
        capabilities: [
          'ECU programming',
          'Key programming',
          'Module replacement',
          'Software updates'
        ],
        equipment: 'Porsche PIWIS, PST2',
        price: 'Starting at $220',
        duration: '2-5 hours',
        icon: 'Wrench'
      },
      {
        id: 'performance',
        name: 'Performance Diagnostics',
        description: 'Track-focused diagnostic services',
        capabilities: [
          'Performance monitoring',
          'Data logging analysis',
          'Track mode setup',
          'Sport system diagnostics'
        ],
        equipment: 'Porsche PIWIS, Data loggers',
        price: 'Starting at $180',
        duration: '1-2 hours',
        icon: 'Activity'
      }
    ],
    audi: [
      {
        id: 'vcds',
        name: 'VCDS Diagnostics',
        description: 'VAG-COM diagnostic services',
        capabilities: [
          'Complete system scan',
          'Live data monitoring',
          'Adaptation procedures',
          'Coding functions'
        ],
        equipment: 'VCDS, OBDeleven Pro',
        price: 'Starting at $110',
        duration: '30-90 minutes',
        icon: 'Scan'
      },
      {
        id: 'coding',
        name: 'Audi/VW Coding',
        description: 'Advanced coding and adaptations',
        capabilities: [
          'Convenience coding',
          'Feature activation',
          'Module adaptations',
          'Long coding'
        ],
        equipment: 'VCDS, ODIS, VCP',
        price: 'Starting at $130',
        duration: '1-2 hours',
        icon: 'Code2'
      },
      {
        id: 'programming',
        name: 'ECU Programming',
        description: 'ECU and module programming',
        capabilities: [
          'ECU flashing',
          'Key programming',
          'Module replacement',
          'Immobilizer service'
        ],
        equipment: 'ODIS, VCP, VCDS',
        price: 'Starting at $170',
        duration: '1-3 hours',
        icon: 'Chip'
      }
    ]
  };

  const currentServices = servicesByBrand?.[selectedBrand] || servicesByBrand?.bmw;

  const toggleExpanded = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Service Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive diagnostic and programming services using factory-level equipment and certified technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentServices?.map((service) => (
            <div
              key={service?.id}
              className="bg-card border border-brand rounded-xl overflow-hidden hover-lift transition-all duration-300"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-brand">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={service?.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {service?.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing & Duration */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-semibold">{service?.price}</span>
                  <span className="text-muted-foreground">{service?.duration}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {service?.capabilities?.slice(0, expandedService === service?.id ? undefined : 2)?.map((capability, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {service?.capabilities?.length > 2 && (
                      <button
                        onClick={() => toggleExpanded(service?.id)}
                        className="mt-2 text-sm text-accent hover:text-accent/80 transition-colors duration-200"
                      >
                        {expandedService === service?.id ? 'Show less' : `+${service?.capabilities?.length - 2} more`}
                      </button>
                    )}
                  </div>

                  {expandedService === service?.id && (
                    <div className="border-t border-brand pt-4">
                      <h4 className="font-medium text-foreground mb-2">Equipment Used:</h4>
                      <p className="text-sm text-muted-foreground">{service?.equipment}</p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                    className="hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't see what you're looking for? Our certified technicians can handle specialized requests and complex diagnostic challenges.
            </p>
            <Button
              variant="default"
              iconName="MessageCircle"
              iconPosition="left"
              className="btn-primary"
            >
              Discuss Custom Requirements
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMatrix;