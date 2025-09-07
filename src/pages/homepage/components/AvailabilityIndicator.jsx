import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityIndicator = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const todaySlots = [
    { time: '2:00 PM', available: false, technician: 'Mike R.' },
    { time: '3:30 PM', available: true, technician: 'Sarah L.' },
    { time: '5:00 PM', available: true, technician: 'David K.' },
    { time: '6:30 PM', available: true, technician: 'Mike R.' }
  ];

  const tomorrowSlots = [
    { time: '9:00 AM', available: true, technician: 'Sarah L.' },
    { time: '10:30 AM', available: true, technician: 'David K.' },
    { time: '12:00 PM', available: true, technician: 'Mike R.' },
    { time: '2:00 PM', available: true, technician: 'Sarah L.' }
  ];

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-success rounded-full mr-2 pulse-availability"></div>
              Real-Time Availability
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Book Your Diagnostic Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Live availability in the Boston Metro Area. Updated every 5 minutes.
            </p>
          </div>

          <div className="bg-surface rounded-xl p-8 border border-brand shadow-card">
            {/* Current Status */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-brand">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-success" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-primary">
                    {availableSlots} Slots Available Today
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Last updated: {formatTime(currentTime)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Service Area</div>
                <div className="font-medium text-primary">Boston Metro</div>
                <div className="text-sm text-muted-foreground">Within 25 miles</div>
              </div>
            </div>

            {/* Today's Availability */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2" />
                Today - {formatDate(currentTime)}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {todaySlots?.map((slot, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      slot?.available
                        ? 'border-success/30 bg-success/5 hover:border-success hover:shadow-card cursor-pointer'
                        : 'border-border bg-muted/50 opacity-60'
                    }`}
                  >
                    <div className="text-center space-y-2">
                      <div className={`text-lg font-semibold ${
                        slot?.available ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {slot?.time}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {slot?.technician}
                      </div>
                      <div className={`text-xs font-medium ${
                        slot?.available ? 'text-success' : 'text-error'
                      }`}>
                        {slot?.available ? 'Available' : 'Booked'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tomorrow's Preview */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2" />
                Tomorrow - {formatDate(new Date(currentTime.getTime() + 24 * 60 * 60 * 1000))}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tomorrowSlots?.slice(0, 4)?.map((slot, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-accent/30 bg-accent/5 hover:border-accent hover:shadow-card cursor-pointer transition-all duration-300"
                  >
                    <div className="text-center space-y-2">
                      <div className="text-lg font-semibold text-primary">
                        {slot?.time}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {slot?.technician}
                      </div>
                      <div className="text-xs font-medium text-accent">
                        Available
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-background rounded-lg p-6 border border-brand mb-6">
              <h4 className="font-semibold text-primary mb-4 flex items-center">
                <Icon name="MapPin" size={18} className="mr-2" />
                Current Service Areas
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Downtown Boston</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Cambridge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Brookline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Newton</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-muted-foreground">Quincy (Limited)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-muted-foreground">Somerville (Limited)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="btn-primary flex-1"
              >
                Book Available Slot
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Bell"
                iconPosition="left"
                className="flex-1"
              >
                Notify When Available
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityIndicator;