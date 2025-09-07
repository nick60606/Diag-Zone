import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ stat }) => {
  const getStatColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      case 'neutral':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return 'TrendingUp';
      case 'down':
        return 'TrendingDown';
      case 'neutral':
        return 'Minus';
      default:
        return 'Minus';
    }
  };

  return (
    <div className="bg-card border border-brand rounded-lg p-4 hover-lift">
      <div className="flex items-center justify-between mb-2">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name={stat?.icon} size={20} className="text-accent" />
        </div>
        {stat?.trend && (
          <div className={`flex items-center space-x-1 ${getStatColor(stat?.trend)}`}>
            <Icon name={getTrendIcon(stat?.trend)} size={14} />
            <span className="text-xs font-medium">{stat?.change}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-foreground">{stat?.value}</p>
        <p className="text-sm text-muted-foreground">{stat?.label}</p>
        {stat?.subtitle && (
          <p className="text-xs text-muted-foreground">{stat?.subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;