import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommonIssues = ({ selectedBrand }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issuesByBrand = {
    bmw: [
      {
        id: 'dme-failure',
        title: 'DME/ECU Failure',
        symptoms: ['Engine won\'t start', 'Check engine light', 'Limp mode activation'],
        description: `BMW Digital Motor Electronics (DME) failures are common in N54, N55, and B58 engines. Symptoms include intermittent starting issues, reduced power, and various fault codes.\n\nOur diagnostic process involves comprehensive DME testing, software verification, and hardware inspection to determine if repair or replacement is needed.`,
        diagnosticProcess: [
          'Initial fault code scan using BMW ISTA',
          'DME communication test',
          'Software version verification',
          'Hardware component testing',
          'Repair or replacement recommendation'
        ],
        resolution: 'DME repair or replacement with proper coding and programming',
        timeframe: '2-4 hours',
        cost: '$300-$800',
        severity: 'high'
      },
      {
        id: 'coding-issues',
        title: 'Coding & Programming',
        symptoms: ['Features not working', 'Module errors', 'Software conflicts'],
        description: `BMW vehicles require precise coding after module replacement or software updates. Common issues include incorrect VIN coding, missing feature activation, and module synchronization problems.\n\nWe use factory BMW ISTA tools to ensure proper coding and feature activation.`,
        diagnosticProcess: [
          'Current coding analysis',
          'VIN verification and matching',
          'Module compatibility check',
          'Feature activation programming',
          'System verification testing'
        ],
        resolution: 'Proper module coding and feature activation',
        timeframe: '1-2 hours',
        cost: '$150-$300',
        severity: 'medium'
      },
      {
        id: 'transmission',
        title: 'Transmission Issues',
        symptoms: ['Harsh shifting', 'Transmission fault', 'Limp mode'],
        description: `BMW automatic transmissions (ZF 8HP, 6HP) commonly develop shifting issues, fault codes, and adaptation problems. These require specialized diagnostic procedures and adaptation resets.\n\nOur process includes comprehensive transmission testing and proper adaptation procedures.`,
        diagnosticProcess: [
          'Transmission fault code analysis',
          'Adaptation value inspection',
          'Mechanical component testing',
          'Fluid analysis and replacement',
          'Adaptation reset and programming'
        ],
        resolution: 'Transmission repair with proper adaptation',
        timeframe: '2-6 hours',
        cost: '$200-$1200',
        severity: 'high'
      }
    ],
    mercedes: [
      {
        id: 'sam-module',
        title: 'SAM Module Failure',
        symptoms: ['Electrical issues', 'No start condition', 'Multiple system failures'],
        description: `Mercedes Signal Acquisition Module (SAM) failures cause widespread electrical problems. Common in W204, W212, and W166 models, these modules control critical vehicle functions.\n\nDiagnosis requires STAR system analysis and specialized SAM testing procedures.`,
        diagnosticProcess: [
          'STAR diagnostic system scan',
          'SAM module communication test',
          'Power and ground verification',
          'Internal component analysis',
          'Replacement and coding procedure'
        ],
        resolution: 'SAM module replacement with STAR programming',
        timeframe: '3-5 hours',
        cost: '$400-$1000',
        severity: 'high'
      },
      {
        id: 'airmatic',
        title: 'AIRMATIC Suspension',
        symptoms: ['Suspension warning', 'Vehicle sagging', 'Compressor noise'],
        description: `Mercedes AIRMATIC suspension systems develop leaks, compressor failures, and sensor issues. These require specialized diagnostic equipment and calibration procedures.\n\nOur technicians use STAR diagnostics for comprehensive suspension analysis.`,
        diagnosticProcess: [
          'AIRMATIC system fault analysis',
          'Air spring leak testing',
          'Compressor performance test',
          'Sensor calibration check',
          'System calibration and testing'
        ],
        resolution: 'Component replacement with system calibration',
        timeframe: '2-4 hours',
        cost: '$300-$800',
        severity: 'medium'
      }
    ],
    porsche: [
      {
        id: 'ims-bearing',
        title: 'IMS Bearing Issues',
        symptoms: ['Engine noise', 'Metal shavings in oil', 'Catastrophic engine failure'],
        description: `Intermediate Shaft (IMS) bearing failure is a critical issue in 996/997 Porsche models. Early detection through oil analysis and specialized inspection can prevent catastrophic engine damage.\n\nOur diagnostic process includes comprehensive engine analysis and IMS bearing inspection.`,
        diagnosticProcess: [
          'Oil analysis for metal contamination',
          'Engine noise analysis',
          'Borescope inspection',
          'IMS bearing condition assessment',
          'Preventive replacement recommendation'
        ],
        resolution: 'IMS bearing replacement or monitoring program',
        timeframe: '4-8 hours',
        cost: '$500-$2000',
        severity: 'high'
      },
      {
        id: 'pdk-issues',
        title: 'PDK Transmission',
        symptoms: ['Harsh shifts', 'Clutch slip', 'Transmission warnings'],
        description: `Porsche PDK transmissions require specialized diagnostic procedures for clutch wear analysis, adaptation resets, and software updates.\n\nWe use PIWIS diagnostics for comprehensive PDK analysis and programming.`,
        diagnosticProcess: [
          'PDK fault code analysis',
          'Clutch wear measurement',
          'Adaptation value inspection',
          'Software version verification',
          'Clutch adaptation and programming'
        ],
        resolution: 'PDK service with adaptation reset',
        timeframe: '2-4 hours',
        cost: '$300-$800',
        severity: 'medium'
      }
    ],
    audi: [
      {
        id: 'carbon-buildup',
        title: 'Carbon Buildup (FSI/TFSI)',
        symptoms: ['Rough idle', 'Misfires', 'Reduced power'],
        description: `Audi/VW direct injection engines develop carbon buildup on intake valves, causing performance issues and misfires. This requires specialized cleaning procedures and diagnostic verification.\n\nOur process includes comprehensive engine analysis and carbon cleaning verification.`,
        diagnosticProcess: [
          'Cylinder contribution test',
          'Intake valve inspection',
          'Carbon buildup assessment',
          'Cleaning procedure execution',
          'Performance verification testing'
        ],
        resolution: 'Intake valve carbon cleaning service',
        timeframe: '4-6 hours',
        cost: '$400-$800',
        severity: 'medium'
      },
      {
        id: 'dsg-issues',
        title: 'DSG Transmission',
        symptoms: ['Jerky shifts', 'Clutch judder', 'Transmission fault'],
        description: `VAG DSG transmissions require regular service and specialized diagnostic procedures. Common issues include clutch wear, adaptation problems, and software updates.\n\nWe use VCDS and ODIS for comprehensive DSG analysis and service.`,
        diagnosticProcess: [
          'DSG fault code analysis',
          'Clutch wear measurement',
          'Adaptation value inspection',
          'Fluid condition assessment',
          'Service and adaptation reset'
        ],
        resolution: 'DSG service with adaptation procedures',
        timeframe: '2-3 hours',
        cost: '$250-$600',
        severity: 'medium'
      }
    ]
  };

  const currentIssues = issuesByBrand?.[selectedBrand] || issuesByBrand?.bmw;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Common Issues & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real diagnostic scenarios from our experience with detailed explanations of problems, processes, and resolutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentIssues?.map((issue) => (
            <div
              key={issue?.id}
              className="bg-card border border-brand rounded-xl overflow-hidden hover-lift transition-all duration-300"
            >
              {/* Issue Header */}
              <div className="p-6 border-b border-brand">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {issue?.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(issue?.severity)}`}>
                        {issue?.severity?.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Common Symptoms:</p>
                      <div className="flex flex-wrap gap-2">
                        {issue?.symptoms?.map((symptom, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Timeframe:</span>
                    <span className="ml-2 font-medium text-foreground">{issue?.timeframe}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Cost Range:</span>
                    <span className="ml-2 font-medium text-foreground">{issue?.cost}</span>
                  </div>
                </div>
              </div>

              {/* Issue Details */}
              <div className="p-6">
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Problem Description:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {issue?.description}
                    </p>
                  </div>

                  {/* Diagnostic Process */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Our Diagnostic Process:</h4>
                    <div className="space-y-2">
                      {issue?.diagnosticProcess?.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resolution */}
                  <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>Resolution:</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">{issue?.resolution}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-brand">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    Discuss This Issue
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-12 text-center">
          <div className="bg-card border border-brand rounded-xl p-8">
            <Icon name="HelpCircle" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Don't See Your Issue?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every vehicle is unique. If you're experiencing symptoms not listed here, our certified technicians can diagnose and resolve complex issues using factory-level diagnostic equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Phone"
                iconPosition="left"
                className="btn-primary"
              >
                Call for Consultation
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Diagnostic
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonIssues;