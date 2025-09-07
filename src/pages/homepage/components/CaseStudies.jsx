import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "BMW X5 Intermittent Engine Stalling",
      vehicle: "2019 BMW X5 xDrive40i",
      problem: "Customer experienced random engine stalling at idle and low speeds. Multiple dealership visits resulted in no fault found.",
      beforeImage: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=400",
      diagnosticProcess: [
        "Connected ISTA/D diagnostic system",
        "Performed comprehensive module scan",
        "Analyzed live data during test drive",
        "Discovered intermittent CAN bus communication error",
        "Traced fault to corroded junction box connection",
        "Verified repair with extended road test"
      ],
      solution: "Cleaned and sealed corroded B+ junction box connection. Updated DME software to latest version.",
      outcome: "Complete resolution of stalling issue. Customer reported no further problems after 6 months.",
      timeToResolve: "2.5 hours",
      complexity: "High",
      tools: ["BMW ISTA/D", "Digital Oscilloscope", "CAN Bus Analyzer"],
      cost: "$249"
    },
    {
      id: 2,
      title: "Mercedes E-Class Adaptive Cruise Control Failure",
      vehicle: "2020 Mercedes E350 4MATIC",
      problem: "Adaptive cruise control and collision avoidance systems completely non-functional. Warning lights on dashboard.",
      beforeImage: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=400",
      diagnosticProcess: [
        "Connected Mercedes Xentry diagnostic system",
        "Scanned all ADAS-related modules",
        "Found radar sensor calibration fault codes",
        "Performed radar sensor alignment check",
        "Discovered windshield replacement affected calibration",
        "Completed full ADAS recalibration procedure"
      ],
      solution: "Performed complete ADAS recalibration using Mercedes ADAS calibration frame and targets.",
      outcome: "All safety systems restored to full functionality. Customer extremely satisfied with mobile service.",
      timeToResolve: "3 hours",
      complexity: "Very High",
      tools: ["Mercedes Xentry", "ADAS Calibration Frame", "Alignment Targets"],
      cost: "$349"
    },
    {
      id: 3,
      title: "Porsche 911 Turbo Performance Issues",
      vehicle: "2018 Porsche 911 Turbo S",
      problem: "Significant power loss and poor throttle response. Turbocharger boost pressure below specification.",
      beforeImage: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=400",
      diagnosticProcess: [
        "Connected PIWIS III diagnostic system",
        "Performed comprehensive engine system scan",
        "Analyzed boost pressure data logs",
        "Tested turbocharger wastegate operation",
        "Discovered carbon buildup in intake valves",
        "Recommended walnut shell blasting service"
      ],
      solution: "Coordinated with specialist for walnut shell blasting. Updated engine management software.",
      outcome: "Full power restoration. Customer reported dramatic improvement in performance and throttle response.",
      timeToResolve: "1.5 hours diagnostic + referral",
      complexity: "High",
      tools: ["Porsche PIWIS III", "Boost Pressure Tester", "Endoscope"],
      cost: "$249 + specialist service"
    }
  ];

  const currentCase = caseStudies?.[selectedCase];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Recent Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real diagnostic challenges solved with precision and expertise. See how we tackle complex automotive problems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Case Study Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies?.map((study, index) => (
              <button
                key={study?.id}
                onClick={() => setSelectedCase(index)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  selectedCase === index
                    ? 'border-accent bg-accent/10 text-accent' :'border-brand bg-background text-muted-foreground hover:border-accent/50 hover:text-primary'
                }`}
              >
                <div className="text-sm font-medium">{study?.vehicle?.split(' ')?.[0]} {study?.vehicle?.split(' ')?.[1]}</div>
                <div className="text-xs opacity-80">{study?.title?.split(' ')?.slice(2, 4)?.join(' ')}</div>
              </button>
            ))}
          </div>

          {/* Selected Case Study */}
          <div className="bg-surface rounded-xl border border-brand shadow-card overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{currentCase?.title}</h3>
                  <p className="text-white/90">{currentCase?.vehicle}</p>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{currentCase?.timeToResolve}</div>
                    <div className="text-white/80">Resolution Time</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{currentCase?.complexity}</div>
                    <div className="text-white/80">Complexity</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{currentCase?.cost}</div>
                    <div className="text-white/80">Total Cost</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Problem Description */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <Icon name="AlertTriangle" size={20} className="mr-2 text-warning" />
                  The Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {currentCase?.problem}
                </p>
              </div>

              {/* Before/After Images */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="font-semibold text-primary mb-3">Before Diagnosis</h5>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={currentCase?.beforeImage}
                      alt="Before diagnostic work"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-error/90 text-white px-2 py-1 rounded text-xs font-medium">
                      Problem State
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-3">After Resolution</h5>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={currentCase?.afterImage}
                      alt="After diagnostic work"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-success/90 text-white px-2 py-1 rounded text-xs font-medium">
                      Resolved
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostic Process */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="Search" size={20} className="mr-2 text-accent" />
                  Diagnostic Process
                </h4>
                <div className="space-y-3">
                  {currentCase?.diagnosticProcess?.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution & Tools */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Wrench" size={20} className="mr-2 text-success" />
                    Solution Applied
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase?.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Tool" size={20} className="mr-2 text-muted-foreground" />
                    Tools Used
                  </h4>
                  <div className="space-y-2">
                    {currentCase?.tools?.map((tool, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-muted-foreground text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <Icon name="CheckCircle" size={20} className="mr-2 text-success" />
                  Final Outcome
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {currentCase?.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-surface rounded-xl p-8 border border-brand">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Have a Complex Diagnostic Challenge?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our expert technicians thrive on solving the most challenging automotive problems. 
                Get the same level of expertise that dealerships trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="btn-primary"
                >
                  Book Diagnostic
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Discuss Your Case
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;