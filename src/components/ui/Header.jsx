import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/homepage', icon: 'Home' },
    { name: 'Services', href: '/services-by-brand', icon: 'Wrench' },
    { name: 'Client Portal', href: '/client-portal-dashboard', icon: 'User' },
  ];

  const secondaryItems = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Help', href: '/help' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-brand shadow-card ${className}`}>
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="var(--color-primary)"
                />
                <path
                  d="M12 20L18 26L28 14"
                  stroke="var(--color-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-sans">
                Diag Zone
              </span>
              <span className="text-xs text-muted-foreground font-mono tracking-wide">
                DIAGNOSTIC EXPERTS
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems?.map((item) => (
            <a
              key={item?.name}
              href={item?.href}
              className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 group"
            >
              <Icon 
                name={item?.icon} 
                size={18} 
                className="text-muted-foreground group-hover:text-accent transition-colors duration-300" 
              />
              <span>{item?.name}</span>
            </a>
          ))}
          
          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300">
              <span>More</span>
              <Icon name="ChevronDown" size={16} />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-brand rounded-lg shadow-card-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                {secondaryItems?.map((item) => (
                  <a
                    key={item?.name}
                    href={item?.href}
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-muted hover:text-accent transition-colors duration-200"
                  >
                    {item?.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            iconSize={16}
            className="text-sm"
          >
            (555) 123-4567
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            iconSize={16}
            className="btn-primary hover-lift"
          >
            Book Diagnostic
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-foreground hover:text-accent"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-brand">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Navigation Items */}
            <div className="space-y-3">
              {navigationItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Secondary Items */}
            <div className="border-t border-brand pt-4 space-y-3">
              {secondaryItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-300 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item?.name}
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="border-t border-brand pt-4 space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
                className="justify-center"
              >
                Call (555) 123-4567
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                iconSize={18}
                className="btn-primary justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Diagnostic
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Availability Indicator */}
      <div className="absolute top-full left-4 lg:left-6 mt-2 hidden lg:flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
        <div className="w-2 h-2 bg-success rounded-full pulse-availability"></div>
        <span>Available Today - 3 Slots Remaining</span>
      </div>
    </header>
  );
};

export default Header;