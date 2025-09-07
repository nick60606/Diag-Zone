import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionCard = ({ action, onClick }) => {
  const getActionColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'primary':
        return 'bg-accent/10 border-accent/20 hover:bg-accent/20';
      case 'secondary':
        return 'bg-primary/10 border-primary/20 hover:bg-primary/20';
      case 'success':
        return 'bg-success/10 border-success/20 hover:bg-success/20';
      case 'warning':
        return 'bg-warning/10 border-warning/20 hover:bg-warning/20';
      default:
        return 'bg-muted border-border hover:bg-muted/80';
    }
  };

  const getIconColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'primary':
        return 'text-accent';
      case 'secondary':
        return 'text-primary';
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover-lift ${getActionColor(action?.type)}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
          <Icon 
            name={action?.icon} 
            size={20} 
            className={getIconColor(action?.type)} 
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">{action?.title}</h3>
          {action?.badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-error/10 text-error mt-1">
              {action?.badge}
            </span>
          )}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
        {action?.description}
      </p>
      <Button
        variant="ghost"
        size="sm"
        iconName="ArrowRight"
        iconPosition="right"
        iconSize={14}
        className="w-full justify-between text-xs p-2 h-8"
      >
        {action?.buttonText}
      </Button>
    </div>
  );
};

export default QuickActionCard;