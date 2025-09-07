import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background pt-20 lg:pt-16">
      <div className="container mx-auto px-4 lg:px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 pulse-availability"></div>
                Trusted by Top-100 US Dealerships
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Dealership Expertise,
                <span className="text-accent block">Delivered to You</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Premium automotive diagnostics from certified technicians who service the same dealerships you trust. Complex problems solved with factory-level precision.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span>Available Today</span>
                </div>
                <span>•</span>
                <span>Boston Metro Area</span>
                <span>•</span>
                <span>3 Slots Remaining</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="btn-primary hover-lift text-lg px-8 py-4"
              >
                Book Diagnostic
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MapPin"
                iconPosition="left"
                iconSize={20}
                className="text-lg px-8 py-4"
              >
                Check Service Area
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Diagnostics Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24hr</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1632823469850-1b7d63b7b8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional technician using advanced diagnostic equipment on luxury BMW vehicle"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Diagnostic Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-brand shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-primary">Live Diagnostic</div>
                    <div className="text-xs text-muted-foreground">BMW X5 - Engine Performance</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full pulse-availability"></div>
                    <span className="text-xs text-success font-medium">In Progress</span>
                  </div>
                </div>
                <div className="mt-2 bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Equipment Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-card">
              Factory-Level Tools
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;