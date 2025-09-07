import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceStatusCard from './components/ServiceStatusCard';
import VehicleCard from './components/VehicleCard';
import RecentActivityItem from './components/RecentActivityItem';
import QuickActionCard from './components/QuickActionCard';
import NotificationItem from './components/NotificationItem';
import StatsCard from './components/StatsCard';

const ClientPortalDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);

  // Mock user data
  const userData = {
    name: "Michael Rodriguez",
    email: "michael.rodriguez@email.com",
    phone: "(555) 123-4567",
    memberSince: "March 2023",
    totalServices: 12,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  };

  // Mock active services
  const activeServices = [
    {
      id: 1,
      title: "Comprehensive Diagnostic",
      vehicle: "2022 BMW X5 M50i",
      status: "In-Progress",
      date: "Dec 7, 2024",
      technician: "Sarah Chen",
      estimatedCompletion: "Dec 8, 2024 2:00 PM",
      progress: 65
    },
    {
      id: 2,
      title: "Annual Maintenance Check",
      vehicle: "2021 Porsche 911 Turbo S",
      status: "Scheduled",
      date: "Dec 10, 2024",
      technician: "Marcus Thompson",
      estimatedCompletion: "Dec 10, 2024 4:00 PM",
      progress: 0
    }
  ];

  // Mock vehicles
  const vehicles = [
    {
      id: 1,
      year: 2022,
      make: "BMW",
      model: "X5 M50i",
      vin: "WBAJB1C59NCG12345",
      mileage: 15420,
      lastService: "Nov 15, 2024",
      health: "Good",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      upcomingMaintenance: "Oil change due in 2,580 miles"
    },
    {
      id: 2,
      year: 2021,
      make: "Porsche",
      model: "911 Turbo S",
      vin: "WP0AB2A99MS123456",
      mileage: 8750,
      lastService: "Oct 22, 2024",
      health: "Excellent",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      upcomingMaintenance: "Annual inspection due Dec 10, 2024"
    },
    {
      id: 3,
      year: 2020,
      make: "Mercedes-Benz",
      model: "AMG GT 63 S",
      vin: "WDDYJ7JA5LA123789",
      mileage: 22100,
      lastService: "Sep 8, 2024",
      health: "Fair",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
      upcomingMaintenance: "Brake service recommended"
    }
  ];

  // Mock recent activity
  const recentActivity = [
    {
      id: 1,
      type: "diagnostic",
      title: "Diagnostic Started",
      description: "Comprehensive diagnostic initiated for BMW X5",
      vehicle: "2022 BMW X5 M50i",
      timestamp: new Date(Date.now() - 1800000) // 30 minutes ago
    },
    {
      id: 2,
      type: "message",
      title: "Message from Technician",
      description: "Sarah sent photos of diagnostic progress",
      vehicle: "2022 BMW X5 M50i",
      timestamp: new Date(Date.now() - 3600000) // 1 hour ago
    },
    {
      id: 3,
      type: "appointment",
      title: "Appointment Confirmed",
      description: "Annual maintenance scheduled for Porsche 911",
      vehicle: "2021 Porsche 911 Turbo S",
      timestamp: new Date(Date.now() - 7200000) // 2 hours ago
    },
    {
      id: 4,
      type: "payment",
      title: "Payment Processed",
      description: "Invoice #INV-2024-1205 paid successfully",
      vehicle: "2020 Mercedes-Benz AMG GT 63 S",
      timestamp: new Date(Date.now() - 86400000) // 1 day ago
    },
    {
      id: 5,
      type: "maintenance",
      title: "Service Completed",
      description: "Oil change and filter replacement completed",
      vehicle: "2022 BMW X5 M50i",
      timestamp: new Date(Date.now() - 172800000) // 2 days ago
    }
  ];

  // Mock quick actions
  const quickActions = [
    {
      id: 1,
      title: "Schedule Service",
      description: "Book your next diagnostic or maintenance appointment",
      icon: "Calendar",
      type: "primary",
      buttonText: "Book Now"
    },
    {
      id: 2,
      title: "Emergency Support",
      description: "24/7 roadside diagnostic assistance available",
      icon: "Phone",
      type: "warning",
      badge: "24/7",
      buttonText: "Call Now"
    },
    {
      id: 3,
      title: "Service History",
      description: "View detailed reports and recommendations",
      icon: "FileText",
      type: "secondary",
      buttonText: "View Reports"
    },
    {
      id: 4,
      title: "Refer & Earn",
      description: "Get $50 credit for each successful referral",
      icon: "Gift",
      type: "success",
      buttonText: "Share Link"
    }
  ];

  // Mock notifications
  const mockNotifications = [
    {
      id: 1,
      type: "service",
      title: "Diagnostic Update Available",
      message: "Your BMW X5 diagnostic has new findings. Review the updated report and technician recommendations.",
      timestamp: new Date(Date.now() - 900000), // 15 minutes ago
      read: false,
      priority: "high",
      actionRequired: true,
      actionButton: {
        text: "View Report",
        icon: "FileText"
      }
    },
    {
      id: 2,
      type: "appointment",
      title: "Upcoming Appointment Reminder",
      message: "Your Porsche 911 annual maintenance is scheduled for tomorrow at 2:00 PM with Marcus Thompson.",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false,
      priority: "medium",
      actionRequired: false,
      actionButton: {
        text: "Reschedule",
        icon: "Calendar"
      }
    },
    {
      id: 3,
      type: "message",
      title: "New Message from Sarah Chen",
      message: "I\'ve uploaded diagnostic photos to your portal. The initial scan shows everything looks good so far.",
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      read: true,
      priority: "low",
      actionRequired: false,
      actionButton: {
        text: "Reply",
        icon: "MessageCircle"
      }
    },
    {
      id: 4,
      type: "payment",
      title: "Invoice Ready for Review",
      message: "Your service invoice #INV-2024-1207 is ready. Total amount: $285.00",
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      read: true,
      priority: "medium",
      actionRequired: false,
      actionButton: {
        text: "Pay Now",
        icon: "CreditCard"
      }
    }
  ];

  // Mock stats
  const stats = [
    {
      id: 1,
      label: "Total Services",
      value: "12",
      icon: "Wrench",
      trend: "up",
      change: "+2 this month",
      subtitle: "Since March 2023"
    },
    {
      id: 2,
      label: "Active Vehicles",
      value: "3",
      icon: "Car",
      trend: "neutral",
      change: "No change",
      subtitle: "All registered"
    },
    {
      id: 3,
      label: "Avg Response Time",
      value: "< 2hrs",
      icon: "Clock",
      trend: "up",
      change: "15% faster",
      subtitle: "Emergency support"
    },
    {
      id: 4,
      label: "Satisfaction Score",
      value: "4.9/5",
      icon: "Star",
      trend: "up",
      change: "+0.2 points",
      subtitle: "Based on reviews"
    }
  ];

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev => 
      prev?.map(notification => 
        notification?.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleDismissNotification = (notificationId) => {
    setNotifications(prev => 
      prev?.filter(notification => notification?.id !== notificationId)
    );
  };

  const handleQuickAction = (actionId) => {
    console.log(`Quick action ${actionId} clicked`);
  };

  const unreadNotifications = notifications?.filter(n => !n?.read)?.length;

  const tabItems = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'services', label: 'Active Services', icon: 'Wrench' },
    { id: 'vehicles', label: 'My Vehicles', icon: 'Car' },
    { id: 'history', label: 'Service History', icon: 'History' },
    { id: 'messages', label: 'Messages', icon: 'MessageCircle' },
    { id: 'billing', label: 'Billing', icon: 'CreditCard' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <img 
                    src={userData?.avatar} 
                    alt={userData?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Welcome back, {userData?.name?.split(' ')?.[0]}
                  </h1>
                  <p className="text-muted-foreground">
                    Member since {userData?.memberSince} • {userData?.totalServices} services completed
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  iconName="Bell"
                  iconPosition="left"
                  iconSize={16}
                  className="relative"
                >
                  Notifications
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </Button>
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                  className="btn-primary"
                >
                  Book Service
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats?.map((stat) => (
                <StatsCard key={stat?.id} stat={stat} />
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-brand mb-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabItems?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab?.id
                      ? 'border-accent text-accent' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Active Services Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Active Services</h2>
                  <Button
                    variant="ghost"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                    onClick={() => setActiveTab('services')}
                  >
                    View All
                  </Button>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  {activeServices?.slice(0, 2)?.map((service) => (
                    <ServiceStatusCard key={service?.id} service={service} />
                  ))}
                </div>
              </section>

              {/* Quick Actions */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions?.map((action) => (
                    <QuickActionCard
                      key={action?.id}
                      action={action}
                      onClick={() => handleQuickAction(action?.id)}
                    />
                  ))}
                </div>
              </section>

              {/* Recent Activity & Notifications */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h2>
                  <div className="bg-card border border-brand rounded-lg">
                    <div className="p-4 border-b border-brand">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-foreground">Latest Updates</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="MoreHorizontal"
                          iconSize={16}
                        />
                      </div>
                    </div>
                    <div className="divide-y divide-border">
                      {recentActivity?.slice(0, 5)?.map((activity) => (
                        <RecentActivityItem key={activity?.id} activity={activity} />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Notifications */}
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Notifications
                    {unreadNotifications > 0 && (
                      <span className="ml-2 px-2 py-1 bg-error/10 text-error text-xs rounded-full">
                        {unreadNotifications} new
                      </span>
                    )}
                  </h2>
                  <div className="space-y-4">
                    {notifications?.slice(0, 4)?.map((notification) => (
                      <NotificationItem
                        key={notification?.id}
                        notification={notification}
                        onMarkAsRead={handleMarkAsRead}
                        onDismiss={handleDismissNotification}
                      />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">Active Services</h2>
                <Button
                  variant="default"
                  iconName="Plus"
                  iconPosition="left"
                  iconSize={16}
                  className="btn-primary"
                >
                  Schedule New Service
                </Button>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {activeServices?.map((service) => (
                  <ServiceStatusCard key={service?.id} service={service} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vehicles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">My Vehicles</h2>
                <Button
                  variant="default"
                  iconName="Plus"
                  iconPosition="left"
                  iconSize={16}
                  className="btn-primary"
                >
                  Add Vehicle
                </Button>
              </div>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {vehicles?.map((vehicle) => (
                  <VehicleCard key={vehicle?.id} vehicle={vehicle} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Service History</h2>
              <div className="bg-card border border-brand rounded-lg p-8 text-center">
                <Icon name="History" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Service History</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed service history and reports will be displayed here
                </p>
                <Button variant="outline">View All Reports</Button>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Messages</h2>
              <div className="bg-card border border-brand rounded-lg p-8 text-center">
                <Icon name="MessageCircle" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Message Center</h3>
                <p className="text-muted-foreground mb-4">
                  Direct communication with technicians and support team
                </p>
                <Button variant="outline">Start Conversation</Button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Billing & Invoices</h2>
              <div className="bg-card border border-brand rounded-lg p-8 text-center">
                <Icon name="CreditCard" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Billing Center</h3>
                <p className="text-muted-foreground mb-4">
                  View invoices, payment history, and manage payment methods
                </p>
                <Button variant="outline">View Invoices</Button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Account Settings</h2>
              <div className="bg-card border border-brand rounded-lg p-8 text-center">
                <Icon name="Settings" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Settings & Preferences</h3>
                <p className="text-muted-foreground mb-4">
                  Manage your account, notifications, and service preferences
                </p>
                <Button variant="outline">Update Settings</Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientPortalDashboard;