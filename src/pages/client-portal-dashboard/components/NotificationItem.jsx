import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationItem = ({ notification, onMarkAsRead, onDismiss }) => {
  const getNotificationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'service':
        return 'Wrench';
      case 'appointment':
        return 'Calendar';
      case 'message':
        return 'MessageCircle';
      case 'payment':
        return 'CreditCard';
      case 'reminder':
        return 'Bell';
      case 'update':
        return 'Info';
      default:
        return 'Bell';
    }
  };

  const getNotificationColor = (type, priority) => {
    if (priority === 'high') {
      return 'text-error bg-error/10 border-error/20';
    }
    
    switch (type?.toLowerCase()) {
      case 'service':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'appointment':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'message':
        return 'text-success bg-success/10 border-success/20';
      case 'payment':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'reminder':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'update':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const formatNotificationTime = (timestamp) => {
    const now = new Date();
    const notificationTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - notificationTime) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className={`border rounded-lg p-4 transition-all duration-200 ${notification?.read ? 'bg-background' : 'bg-accent/5'}`}>
      <div className="flex items-start space-x-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationColor(notification?.type, notification?.priority)}`}>
          <Icon name={getNotificationIcon(notification?.type)} size={16} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-sm font-medium text-foreground pr-2">{notification?.title}</h4>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-xs text-muted-foreground">
                {formatNotificationTime(notification?.timestamp)}
              </span>
              {!notification?.read && (
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              )}
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            {notification?.message}
          </p>
          
          {notification?.actionRequired && (
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="AlertCircle" size={14} className="text-warning" />
              <span className="text-xs font-medium text-warning">Action Required</span>
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            {notification?.actionButton && (
              <Button
                variant="outline"
                size="xs"
                iconName={notification?.actionButton?.icon}
                iconPosition="left"
                iconSize={12}
                className="text-xs"
              >
                {notification?.actionButton?.text}
              </Button>
            )}
            
            {!notification?.read && (
              <Button
                variant="ghost"
                size="xs"
                onClick={() => onMarkAsRead(notification?.id)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Mark as read
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="xs"
              onClick={() => onDismiss(notification?.id)}
              className="text-xs text-muted-foreground hover:text-foreground ml-auto"
            >
              <Icon name="X" size={12} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;