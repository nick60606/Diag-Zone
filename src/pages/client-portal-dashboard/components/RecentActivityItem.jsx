import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivityItem = ({ activity }) => {
  const getActivityIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'diagnostic':
        return 'Search';
      case 'repair':
        return 'Wrench';
      case 'maintenance':
        return 'Settings';
      case 'message':
        return 'MessageCircle';
      case 'payment':
        return 'CreditCard';
      case 'appointment':
        return 'Calendar';
      default:
        return 'Circle';
    }
  };

  const getActivityColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'diagnostic':
        return 'text-accent bg-accent/10';
      case 'repair':
        return 'text-warning bg-warning/10';
      case 'maintenance':
        return 'text-success bg-success/10';
      case 'message':
        return 'text-primary bg-primary/10';
      case 'payment':
        return 'text-success bg-success/10';
      case 'appointment':
        return 'text-accent bg-accent/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - activityTime) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors duration-200">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity?.type)}`}>
        <Icon name={getActivityIcon(activity?.type)} size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground font-medium">{activity?.title}</p>
        <p className="text-xs text-muted-foreground mt-1">{activity?.description}</p>
        {activity?.vehicle && (
          <p className="text-xs text-muted-foreground mt-1">
            <Icon name="Car" size={12} className="inline mr-1" />
            {activity?.vehicle}
          </p>
        )}
      </div>
      <div className="text-xs text-muted-foreground whitespace-nowrap">
        {formatTimeAgo(activity?.timestamp)}
      </div>
    </div>
  );
};

export default RecentActivityItem;