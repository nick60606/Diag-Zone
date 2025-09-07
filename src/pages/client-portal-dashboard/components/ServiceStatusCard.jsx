import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceStatusCard = ({ service }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'in-progress':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'completed':
        return 'text-success bg-success/10 border-success/20';
      case 'scheduled':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'pending':
        return 'text-muted-foreground bg-muted border-border';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'in-progress':
        return 'Clock';
      case 'completed':
        return 'CheckCircle';
      case 'scheduled':
        return 'Calendar';
      case 'pending':
        return 'AlertCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-brand rounded-lg p-6 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Wrench" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{service?.title}</h3>
            <p className="text-sm text-muted-foreground">{service?.vehicle}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(service?.status)}`}>
          <div className="flex items-center space-x-1">
            <Icon name={getStatusIcon(service?.status)} size={12} />
            <span>{service?.status}</span>
          </div>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Service Date:</span>
          <span className="text-foreground font-medium">{service?.date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Technician:</span>
          <span className="text-foreground font-medium">{service?.technician}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Estimated Completion:</span>
          <span className="text-foreground font-medium">{service?.estimatedCompletion}</span>
        </div>
      </div>
      {service?.progress && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{service?.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${service?.progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          iconName="MessageCircle"
          iconPosition="left"
          iconSize={16}
          className="flex-1"
        >
          Message Tech
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Eye"
          iconPosition="left"
          iconSize={16}
          className="flex-1 btn-primary"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ServiceStatusCard;