import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const BookingForm = ({ selectedBrand }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: selectedBrand || '',
    vehicleModel: '',
    vin: '',
    mileage: '',
    serviceType: '',
    symptoms: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    urgency: 'normal',
    contactMethod: 'phone',
    agreedToTerms: false,
    marketingConsent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesByBrand = {
    bmw: [
      { value: 'diagnostic', label: 'BMW Diagnostic Scan' },
      { value: 'coding', label: 'BMW Coding & Programming' },
      { value: 'dme-repair', label: 'DME/ECU Repair' },
      { value: 'transmission', label: 'Transmission Diagnostics' },
      { value: 'electrical', label: 'Electrical System Diagnosis' },
      { value: 'maintenance', label: 'Service Reset & Maintenance' }
    ],
    mercedes: [
      { value: 'star-diagnostic', label: 'STAR Diagnostic Scan' },
      { value: 'sam-module', label: 'SAM Module Service' },
      { value: 'airmatic', label: 'AIRMATIC Suspension' },
      { value: 'programming', label: 'Mercedes Programming' },
      { value: 'calibration', label: 'System Calibration' },
      { value: 'electrical', label: 'Electrical Diagnostics' }
    ],
    porsche: [
      { value: 'piwis-diagnostic', label: 'PIWIS Diagnostic Scan' },
      { value: 'ims-inspection', label: 'IMS Bearing Inspection' },
      { value: 'pdk-service', label: 'PDK Transmission Service' },
      { value: 'programming', label: 'Porsche Programming' },
      { value: 'performance', label: 'Performance Diagnostics' },
      { value: 'electrical', label: 'Electrical System Diagnosis' }
    ],
    audi: [
      { value: 'vcds-diagnostic', label: 'VCDS Diagnostic Scan' },
      { value: 'carbon-cleaning', label: 'Carbon Buildup Service' },
      { value: 'dsg-service', label: 'DSG Transmission Service' },
      { value: 'coding', label: 'Audi/VW Coding' },
      { value: 'programming', label: 'ECU Programming' },
      { value: 'electrical', label: 'Electrical Diagnostics' }
    ]
  };

  const yearOptions = Array.from({ length: 30 }, (_, i) => {
    const year = new Date()?.getFullYear() - i;
    return { value: year?.toString(), label: year?.toString() };
  });

  const makeOptions = [
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes-Benz' },
    { value: 'porsche', label: 'Porsche' },
    { value: 'audi', label: 'Audi' },
    { value: 'volkswagen', label: 'Volkswagen' }
  ];

  const timeSlots = [
    { value: '8:00', label: '8:00 AM' },
    { value: '9:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Normal (3-5 days)' },
    { value: 'urgent', label: 'Urgent (1-2 days)' },
    { value: 'emergency', label: 'Emergency (Same day)' }
  ];

  const contactMethods = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'text', label: 'Text Message' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.vehicleYear) newErrors.vehicleYear = 'Vehicle year is required';
    if (!formData?.vehicleMake) newErrors.vehicleMake = 'Vehicle make is required';
    if (!formData?.vehicleModel?.trim()) newErrors.vehicleModel = 'Vehicle model is required';
    if (!formData?.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData?.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData?.location?.trim()) newErrors.location = 'Service location is required';
    if (!formData?.agreedToTerms) newErrors.agreedToTerms = 'You must agree to the terms';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData?.email && !emailRegex?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (formData?.phone && !phoneRegex?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - show confirmation
      alert(`Thank you ${formData?.firstName}! Your ${formData?.vehicleMake?.toUpperCase()} diagnostic appointment has been requested. We'll contact you within 2 hours to confirm your booking.`);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleYear: '',
        vehicleMake: selectedBrand || '',
        vehicleModel: '',
        vin: '',
        mileage: '',
        serviceType: '',
        symptoms: '',
        preferredDate: '',
        preferredTime: '',
        location: '',
        urgency: 'normal',
        contactMethod: 'phone',
        agreedToTerms: false,
        marketingConsent: false
      });
    } catch (error) {
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentServices = servicesByBrand?.[formData?.vehicleMake] || servicesByBrand?.bmw;

  return (
    <div className="bg-muted py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book Your Diagnostic Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your {selectedBrand ? selectedBrand?.toUpperCase() : 'vehicle'} diagnostic appointment with our certified technicians.
          </p>
        </div>

        <div className="bg-card border border-brand rounded-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 lg:p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="User" size={20} className="text-accent" />
                <span>Personal Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData?.firstName}
                  onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                  error={errors?.firstName}
                  required
                />
                
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData?.lastName}
                  onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                  error={errors?.lastName}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  error={errors?.email}
                  required
                />
                
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  error={errors?.phone}
                  required
                />
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Car" size={20} className="text-accent" />
                <span>Vehicle Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Select
                  label="Year"
                  options={yearOptions}
                  value={formData?.vehicleYear}
                  onChange={(value) => handleInputChange('vehicleYear', value)}
                  error={errors?.vehicleYear}
                  placeholder="Select year"
                  required
                />
                
                <Select
                  label="Make"
                  options={makeOptions}
                  value={formData?.vehicleMake}
                  onChange={(value) => handleInputChange('vehicleMake', value)}
                  error={errors?.vehicleMake}
                  placeholder="Select make"
                  required
                />
                
                <Input
                  label="Model"
                  type="text"
                  placeholder="e.g., 335i, C300, 911"
                  value={formData?.vehicleModel}
                  onChange={(e) => handleInputChange('vehicleModel', e?.target?.value)}
                  error={errors?.vehicleModel}
                  required
                />
                
                <Input
                  label="VIN (Optional)"
                  type="text"
                  placeholder="17-character VIN"
                  value={formData?.vin}
                  onChange={(e) => handleInputChange('vin', e?.target?.value)}
                  maxLength={17}
                />
                
                <Input
                  label="Mileage (Optional)"
                  type="number"
                  placeholder="Current mileage"
                  value={formData?.mileage}
                  onChange={(e) => handleInputChange('mileage', e?.target?.value)}
                />
              </div>
            </div>

            {/* Service Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Wrench" size={20} className="text-accent" />
                <span>Service Details</span>
              </h3>
              
              <div className="space-y-6">
                <Select
                  label="Service Type"
                  options={currentServices}
                  value={formData?.serviceType}
                  onChange={(value) => handleInputChange('serviceType', value)}
                  error={errors?.serviceType}
                  placeholder="Select service type"
                  required
                />
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Symptoms or Issues (Optional)
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-brand rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    rows={4}
                    placeholder="Describe any symptoms, warning lights, or specific issues you're experiencing..."
                    value={formData?.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e?.target?.value)}
                  />
                </div>
              </div>
            </div>

            {/* Scheduling */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Calendar" size={20} className="text-accent" />
                <span>Scheduling</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData?.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
                  error={errors?.preferredDate}
                  min={new Date()?.toISOString()?.split('T')?.[0]}
                  required
                />
                
                <Select
                  label="Preferred Time"
                  options={timeSlots}
                  value={formData?.preferredTime}
                  onChange={(value) => handleInputChange('preferredTime', value)}
                  placeholder="Select time slot"
                />
                
                <Input
                  label="Service Location"
                  type="text"
                  placeholder="Your address or preferred location"
                  value={formData?.location}
                  onChange={(e) => handleInputChange('location', e?.target?.value)}
                  error={errors?.location}
                  description="We provide mobile service within 50 miles of Boston"
                  required
                  className="md:col-span-2"
                />
                
                <Select
                  label="Urgency Level"
                  options={urgencyOptions}
                  value={formData?.urgency}
                  onChange={(value) => handleInputChange('urgency', value)}
                />
                
                <Select
                  label="Preferred Contact Method"
                  options={contactMethods}
                  value={formData?.contactMethod}
                  onChange={(value) => handleInputChange('contactMethod', value)}
                />
              </div>
            </div>

            {/* Terms and Consent */}
            <div className="mb-8 space-y-4">
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                checked={formData?.agreedToTerms}
                onChange={(e) => handleInputChange('agreedToTerms', e?.target?.checked)}
                error={errors?.agreedToTerms}
                required
              />
              
              <Checkbox
                label="I would like to receive updates about services and promotions"
                checked={formData?.marketingConsent}
                onChange={(e) => handleInputChange('marketingConsent', e?.target?.checked)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                iconName="Phone"
                iconPosition="left"
              >
                Call Instead: (555) 123-4567
              </Button>
              
              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                iconName="Calendar"
                iconPosition="left"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Request...' : 'Request Appointment'}
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-card border border-brand rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Icon name="Clock" size={20} className="text-accent" />
              <h4 className="font-semibold text-foreground">Quick Response Guarantee</h4>
            </div>
            <p className="text-muted-foreground">
              We'll contact you within 2 hours during business hours to confirm your appointment and discuss any specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;