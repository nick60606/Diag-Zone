import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudies = ({ selectedBrand }) => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudiesByBrand = {
    bmw: [
      {
        id: 'bmw-n54-dme',
        title: '2011 BMW 335i N54 DME Failure',
        vehicle: '2011 BMW 335i (N54 Engine)',
        problem: 'Intermittent no-start condition with multiple fault codes',
        beforeImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        symptoms: [
          'Engine cranks but won\'t start',
          'Multiple DME fault codes',
          'Intermittent limp mode',
          'Check engine light'
        ],
        diagnosticFindings: `Initial ISTA scan revealed multiple DME-related fault codes including communication errors and internal DME faults. Further investigation using BMW ICOM showed corrupted DME software and potential hardware failure.\n\nLive data analysis confirmed irregular DME responses and timing issues. The DME was determined to have both software corruption and hardware component failure.`,
        solution: `Complete DME replacement with new unit, followed by comprehensive programming using BMW ISTA/P. All vehicle-specific coding was transferred, and system integration was verified.\n\nPost-repair testing included road test verification and long-term monitoring to ensure stable operation.`,
        outcome: 'Vehicle restored to full functionality with no recurring issues',
        timeframe: '4 hours',
        cost: '$850',
        clientTestimonial: `"After three other shops couldn't figure out the problem, Diag Zone diagnosed and fixed my 335i in one visit. Their BMW expertise is unmatched."`,
        clientName: 'Michael R.',
        technicalDetails: [
          'DME Part Number: 12 61 7 838 823',
          'Software Version: Updated to latest',
          'Coding: FA/VO coding completed',
          'Testing: 50-mile road test performed'
        ]
      },
      {
        id: 'bmw-f30-coding',
        title: '2015 BMW F30 Feature Activation',
        vehicle: '2015 BMW 328i F30',
        problem: 'Multiple features not working after battery replacement',
        beforeImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
        symptoms: [
          'Auto start/stop not working',
          'Comfort access issues',
          'Navigation system errors',
          'Various warning lights'
        ],
        diagnosticFindings: `After battery replacement at another facility, multiple vehicle systems lost their coding and adaptations. ISTA diagnostic revealed coding mismatches and missing feature activations.\n\nThe vehicle required comprehensive recoding to restore all factory features and eliminate warning messages.`,
        solution: `Complete vehicle recoding using BMW E-Sys and ISTA tools. All modules were properly coded to match the vehicle's FA (Fahrzeugauftrag) and VO (Verkaufsorder) specifications.\n\nFeature activations were restored and system adaptations were reset to factory specifications.`,
        outcome: 'All features restored to original functionality',timeframe: '2.5 hours',cost: '$280',clientTestimonial: `"They fixed everything the dealership messed up. Now my BMW works exactly like it did from the factory."`,clientName: 'Sarah L.',
        technicalDetails: [
          'Modules Coded: 15 different modules','Features Activated: Auto start/stop, comfort access','Adaptations: All systems reset','Verification: Complete system test performed'
        ]
      }
    ],
    mercedes: [
      {
        id: 'mercedes-w204-sam',title: '2012 Mercedes C300 SAM Module Failure',vehicle: '2012 Mercedes-Benz C300 W204',problem: 'Multiple electrical failures and no-start condition',
        beforeImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',afterImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
        symptoms: [
          'No start condition','Multiple electrical failures','Warning lights on dashboard','Intermittent power issues'
        ],
        diagnosticFindings: `STAR diagnostic system revealed SAM module communication failures and internal component damage. The front SAM module showed signs of water damage and corrosion.\n\nDetailed analysis confirmed that the SAM module required replacement due to irreparable hardware damage.`,
        solution: `Complete front SAM module replacement with genuine Mercedes part. Used STAR system for proper coding and adaptation to vehicle VIN.\n\nAll electrical systems were tested and verified for proper operation after SAM replacement.`,
        outcome: 'All electrical systems restored to full functionality',timeframe: '5 hours',cost: '$950',
        clientTestimonial: `"My C300 was completely dead. Diag Zone brought it back to life with their expert Mercedes diagnostics."`,
        clientName: 'David K.',
        technicalDetails: [
          'SAM Part Number: A 204 545 32 32','Coding: VIN-specific programming','Testing: All electrical circuits verified','Warranty: 2-year parts and labor'
        ]
      }
    ],
    porsche: [
      {
        id: 'porsche-997-ims',title: '2006 Porsche 997 IMS Bearing Inspection',vehicle: '2006 Porsche 911 Carrera 997.1',problem: 'Preventive IMS bearing inspection and replacement',
        beforeImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',afterImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
        symptoms: [
          'Preventive maintenance','Oil analysis showing trace metals','Engine noise concerns','Peace of mind inspection'
        ],
        diagnosticFindings: `Oil analysis revealed elevated metal content suggesting early IMS bearing wear. Borescope inspection confirmed bearing deterioration before catastrophic failure.\n\nPIWIS diagnostics showed no current faults, but preventive replacement was recommended based on bearing condition and vehicle age.`,
        solution: `Complete IMS bearing replacement with upgraded LN Engineering bearing. Engine removal and installation performed with precision.\n\nPost-installation testing included comprehensive engine break-in procedures and performance verification.`,
        outcome: 'Engine secured against IMS failure with upgraded bearing',timeframe: '12 hours',cost: '$2,400',
        clientTestimonial: `"They saved my engine before it was too late. The peace of mind is worth every penny."`,
        clientName: 'Robert M.',
        technicalDetails: [
          'Bearing: LN Engineering Pro Series','Installation: Engine removal required','Testing: 500-mile break-in protocol','Warranty: 3-year/36,000-mile coverage'
        ]
      }
    ],
    audi: [
      {
        id: 'audi-b8-carbon',title: '2013 Audi A4 Carbon Cleaning Service',vehicle: '2013 Audi A4 B8.5 2.0T',problem: 'Rough idle and misfires due to carbon buildup',
        beforeImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',afterImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
        symptoms: [
          'Rough idle at startup','Intermittent misfires','Reduced power output','Poor fuel economy'
        ],
        diagnosticFindings: `VCDS diagnostic revealed multiple misfire codes and irregular cylinder contribution values. Borescope inspection confirmed heavy carbon buildup on intake valves.\n\nThe direct injection system had caused significant carbon accumulation affecting engine performance and efficiency.`,
        solution: `Complete intake valve carbon cleaning using walnut shell blasting method. All intake valves were thoroughly cleaned and inspected.\n\nPost-cleaning verification included cylinder contribution testing and performance road test to confirm restoration of proper engine operation.`,
        outcome: 'Engine performance restored to factory specifications',timeframe: '6 hours',cost: '$650',
        clientTestimonial: `"My A4 runs like new again. The difference in performance is incredible after the carbon cleaning."`,
        clientName: 'Jennifer T.',
        technicalDetails: [
          'Method: Walnut shell blasting','Valves Cleaned: All 16 intake valves','Testing: Cylinder contribution verified','Maintenance: 40,000-mile service interval'
        ]
      }
    ]
  };

  const currentCases = caseStudiesByBrand?.[selectedBrand] || caseStudiesByBrand?.bmw;

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Actual diagnostic scenarios from our shop with detailed technical reports and client outcomes.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-muted p-1 rounded-lg">
            {currentCases?.map((caseStudy, index) => (
              <button
                key={caseStudy?.id}
                onClick={() => setSelectedCase(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCase === index
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study */}
        <div className="bg-card border border-brand rounded-xl overflow-hidden">
          {/* Case Header */}
          <div className="p-6 lg:p-8 border-b border-brand">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {currentCases?.[selectedCase]?.title}
                </h3>
                <p className="text-lg text-accent font-medium mb-4">
                  {currentCases?.[selectedCase]?.vehicle}
                </p>
                <p className="text-muted-foreground mb-6">
                  {currentCases?.[selectedCase]?.problem}
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Time Required</p>
                    <p className="font-semibold text-foreground">{currentCases?.[selectedCase]?.timeframe}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Total Cost</p>
                    <p className="font-semibold text-foreground">{currentCases?.[selectedCase]?.cost}</p>
                  </div>
                </div>
              </div>
              
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Before</p>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={currentCases?.[selectedCase]?.beforeImage}
                      alt="Before repair"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">After</p>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={currentCases?.[selectedCase]?.afterImage}
                      alt="After repair"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Details */}
          <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Symptoms */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={20} className="text-warning" />
                    <span>Symptoms Reported</span>
                  </h4>
                  <ul className="space-y-2">
                    {currentCases?.[selectedCase]?.symptoms?.map((symptom, index) => (
                      <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                        <Icon name="Minus" size={16} className="text-accent" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagnostic Findings */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="Search" size={20} className="text-accent" />
                    <span>Diagnostic Findings</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {currentCases?.[selectedCase]?.diagnosticFindings}
                  </p>
                </div>

                {/* Technical Details */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="Settings" size={20} className="text-muted-foreground" />
                    <span>Technical Details</span>
                  </h4>
                  <ul className="space-y-2">
                    {currentCases?.[selectedCase]?.technicalDetails?.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="Wrench" size={20} className="text-success" />
                    <span>Solution Implemented</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {currentCases?.[selectedCase]?.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span>Final Outcome</span>
                  </h4>
                  <p className="text-muted-foreground">{currentCases?.[selectedCase]?.outcome}</p>
                </div>

                {/* Client Testimonial */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="MessageSquare" size={20} className="text-accent" />
                    <span>Client Feedback</span>
                  </h4>
                  <blockquote className="text-muted-foreground italic mb-2">
                    "{currentCases?.[selectedCase]?.clientTestimonial}"
                  </blockquote>
                  <p className="text-sm font-medium text-foreground">
                    - {currentCases?.[selectedCase]?.clientName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-6 lg:p-8 border-t border-brand bg-muted/50">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Experiencing Similar Issues?
              </h4>
              <p className="text-muted-foreground mb-6">
                Our certified technicians can diagnose and resolve your vehicle's problems with the same expertise and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="btn-primary"
                >
                  Schedule Diagnostic
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Discuss Your Issue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;