import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnicalCapabilities = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const capabilities = [
    {
      id: 'diagnostic-tools',
      title: 'Factory-Level Diagnostic Tools',
      icon: 'Wrench',
      description: 'Professional-grade diagnostic equipment used by dealerships worldwide',
      image: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: {
        overview: `Our diagnostic arsenal includes the same factory-level tools used by authorized dealerships. Each tool is regularly updated with the latest software versions and technical service bulletins.`,
        equipment: [
          { name: 'BMW ISTA/D & ISTA/P', description: 'Complete BMW diagnostic and programming suite' },
          { name: 'Mercedes Xentry', description: 'Official Mercedes-Benz diagnostic platform' },
          { name: 'Porsche PIWIS III', description: 'Latest generation Porsche diagnostic system' },
          { name: 'Audi/VW VCDS', description: 'Ross-Tech VAG-COM diagnostic interface' },
          { name: 'Launch X431', description: 'Multi-brand professional diagnostic scanner' },
          { name: 'Autel MaxiSys', description: 'Advanced automotive diagnostic tablet' }
        ],
        capabilities: [
          'Real-time data streaming and analysis',
          'Module programming and coding',
          'Adaptation and calibration procedures',
          'Technical service bulletin implementation',
          'Software updates and reflashing',
          'Component activation and testing'
        ]
      }
    },
    {
      id: 'programming',
      title: 'Module Programming & Coding',
      icon: 'Code',
      description: 'Advanced ECU programming and vehicle customization services',
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: {
        overview: `Specialized programming services that require dealership-level access and expertise. Our technicians are trained in the latest programming procedures and security protocols.`,
        services: [
          { name: 'ECU Programming', description: 'Engine control unit software updates and modifications' },
          { name: 'Module Coding', description: 'Feature activation and vehicle customization' },
          { name: 'Key Programming', description: 'New key creation and immobilizer programming' },
          { name: 'Adaptation Services', description: 'Component replacement adaptations' },
          { name: 'Software Updates', description: 'Latest manufacturer software installations' },
          { name: 'Security Access', description: 'Authorized access to protected modules' }
        ],
        brands: [
          'BMW iDrive and comfort access programming',
          'Mercedes COMAND and SAM module coding',
          'Porsche PCM and sport mode activation',
          'Audi MMI and convenience feature coding',
          'Volkswagen infotainment and lighting coding',
          'Lexus and Toyota hybrid system programming'
        ]
      }
    },
    {
      id: 'electrical',
      title: 'Advanced Electrical Diagnostics',
      icon: 'Zap',
      description: 'Complex electrical system analysis and troubleshooting',
      image: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: {
        overview: `Modern vehicles contain dozens of interconnected control modules. Our electrical diagnostic expertise covers everything from simple sensor failures to complex network communication issues.`,
        specialties: [
          { name: 'CAN Bus Analysis', description: 'Controller Area Network communication diagnostics' },
          { name: 'Module Communication', description: 'Inter-module communication troubleshooting' },
          { name: 'Sensor Diagnostics', description: 'Advanced sensor testing and calibration' },
          { name: 'Wiring Analysis', description: 'Circuit analysis and fault location' },
          { name: 'Power Management', description: 'Battery and charging system diagnostics' },
          { name: 'Network Protocols', description: 'LIN, FlexRay, and Ethernet diagnostics' }
        ],
        tools: [
          'Digital oscilloscopes for signal analysis',
          'Network analyzers for bus communication',
          'Multimeters with automotive functions',
          'Current clamps and power analyzers',
          'Breakout boxes for module testing',
          'Specialized probes and adapters'
        ]
      }
    },
    {
      id: 'performance',
      title: 'Performance Analysis',
      icon: 'Activity',
      description: 'Engine performance optimization and tuning diagnostics',
      image: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: {
        overview: `Performance diagnostics go beyond basic trouble codes. We analyze engine parameters, exhaust emissions, and drivetrain efficiency to optimize your vehicle's performance.`,
        analysis: [
          { name: 'Engine Performance', description: 'Comprehensive engine parameter analysis' },
          { name: 'Emissions Testing', description: 'Exhaust gas analysis and optimization' },
          { name: 'Fuel System Analysis', description: 'Injection timing and fuel delivery testing' },
          { name: 'Turbo/Supercharger', description: 'Forced induction system diagnostics' },
          { name: 'Transmission Analysis', description: 'Shift quality and performance optimization' },
          { name: 'Hybrid Systems', description: 'Electric motor and battery performance analysis' }
        ],
        equipment: [
          'Exhaust gas analyzers','Fuel pressure testing equipment','Compression and leak-down testers','Ignition system analyzers','Transmission pressure testers','Hybrid system diagnostic tools'
        ]
      }
    }
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Technical Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade diagnostic equipment and expertise that matches what you'd find at authorized dealerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {capabilities?.map((capability) => (
            <div
              key={capability?.id}
              className={`bg-background rounded-xl border border-brand shadow-card transition-all duration-300 overflow-hidden ${
                expandedCard === capability?.id ? 'shadow-card-hover' : 'hover:shadow-card-hover'
              }`}
            >
              {/* Card Header */}
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={capability?.image}
                    alt={`${capability?.title} equipment`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Icon name={capability?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{capability?.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {capability?.description}
                </p>

                <button
                  onClick={() => toggleCard(capability?.id)}
                  className="flex items-center justify-between w-full p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-300"
                >
                  <span className="font-medium text-primary">
                    {expandedCard === capability?.id ? 'Hide Details' : 'View Technical Details'}
                  </span>
                  <Icon
                    name={expandedCard === capability?.id ? 'ChevronUp' : 'ChevronDown'}
                    size={20}
                    className="text-muted-foreground"
                  />
                </button>

                {/* Expanded Content */}
                {expandedCard === capability?.id && (
                  <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        {capability?.details?.overview}
                      </p>
                    </div>

                    {/* Equipment/Services List */}
                    {capability?.details?.equipment && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Equipment & Tools</h4>
                        <div className="space-y-3">
                          {capability?.details?.equipment?.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-primary text-sm">{item?.name}</div>
                                <div className="text-xs text-muted-foreground">{item?.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability?.details?.services && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Services Offered</h4>
                        <div className="space-y-3">
                          {capability?.details?.services?.map((service, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Icon name="Wrench" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-primary text-sm">{service?.name}</div>
                                <div className="text-xs text-muted-foreground">{service?.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability?.details?.capabilities && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Key Capabilities</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {capability?.details?.capabilities?.map((cap, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <Icon name="Check" size={14} className="text-success" />
                              <span className="text-muted-foreground">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability?.details?.specialties && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Specialties</h4>
                        <div className="space-y-3">
                          {capability?.details?.specialties?.map((specialty, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Icon name="Zap" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-primary text-sm">{specialty?.name}</div>
                                <div className="text-xs text-muted-foreground">{specialty?.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability?.details?.analysis && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Analysis Types</h4>
                        <div className="space-y-3">
                          {capability?.details?.analysis?.map((analysis, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Icon name="Activity" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-primary text-sm">{analysis?.name}</div>
                                <div className="text-xs text-muted-foreground">{analysis?.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability?.details?.brands && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Brand Specializations</h4>
                        <div className="space-y-2">
                          {capability?.details?.brands?.map((brand, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <Icon name="Car" size={14} className="text-accent" />
                              <span className="text-muted-foreground">{brand}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability?.details?.tools && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Specialized Tools</h4>
                        <div className="space-y-2">
                          {capability?.details?.tools?.map((tool, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <Icon name="Tool" size={14} className="text-muted-foreground" />
                              <span className="text-muted-foreground">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;