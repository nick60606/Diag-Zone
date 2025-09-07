import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VehicleCard = ({ vehicle }) => {
  const getHealthColor = (health) => {
    switch (health?.toLowerCase()) {
      case 'excellent':
        return 'text-success';
      case 'good':
        return 'text-accent';
      case 'fair':
        return 'text-warning';
      case 'poor':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getHealthIcon = (health) => {
    switch (health?.toLowerCase()) {
      case 'excellent':
        return 'CheckCircle2';
      case 'good':
        return 'CheckCircle';
      case 'fair':
        return 'AlertTriangle';
      case 'poor':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-brand rounded-lg overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={vehicle?.image}
          alt={`${vehicle?.year} ${vehicle?.make} ${vehicle?.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className={`px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium ${getHealthColor(vehicle?.health)}`}>
            <div className="flex items-center space-x-1">
              <Icon name={getHealthIcon(vehicle?.health)} size={12} />
              <span>{vehicle?.health}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-foreground">
            {vehicle?.year} {vehicle?.make} {vehicle?.model}
          </h3>
          <p className="text-sm text-muted-foreground">VIN: {vehicle?.vin}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Mileage:</span>
            <p className="font-medium text-foreground">{vehicle?.mileage?.toLocaleString()} mi</p>
          </div>
          <div>
            <span className="text-muted-foreground">Last Service:</span>
            <p className="font-medium text-foreground">{vehicle?.lastService}</p>
          </div>
        </div>

        {vehicle?.upcomingMaintenance && (
          <div className="mb-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Calendar" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Upcoming Maintenance</span>
            </div>
            <p className="text-sm text-foreground">{vehicle?.upcomingMaintenance}</p>
          </div>
        )}

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="History"
            iconPosition="left"
            iconSize={16}
            className="flex-1"
          >
            Service History
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            iconSize={16}
            className="flex-1 btn-primary"
          >
            Schedule Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;