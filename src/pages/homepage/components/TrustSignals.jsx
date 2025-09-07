import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const dealershipPartners = [
    { name: 'BMW of Boston', logo: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Mercedes-Benz of Cambridge', logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Porsche Newton', logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Audi Brookline', logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Lexus of Boston', logo: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Volvo Cars Boston', logo: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      title: "Service Manager",
      company: "BMW of Boston",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `Diag Zone has been our go-to partner for complex diagnostic cases. Their technicians understand BMW systems at a level that matches our own factory-trained staff. When we're at capacity or facing particularly challenging electrical issues, we know we can trust them with our customers' vehicles.`,
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Technical Director",
      company: "Mercedes-Benz of Cambridge",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `The level of expertise Diag Zone brings to Mercedes diagnostics is exceptional. They use the same Xentry software we do and follow our exact procedures. Our customers consistently report positive experiences, and their diagnostic accuracy rate is outstanding.`,
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "David Thompson",
      title: "Lead Technician",
      company: "Porsche Newton",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      content: `Working with Diag Zone feels like having an extension of our own team. They handle PIWIS diagnostics with the same precision we expect in-house. For our customers who prefer mobile service, it's the perfect solution without compromising on quality.`,
      rating: 5,
      verified: true
    }
  ];

  const certifications = [
    { name: 'ASE Master Certified', icon: 'Award' },
    { name: 'BMW Certified', icon: 'Shield' },
    { name: 'Mercedes STAR Certified', icon: 'Star' },
    { name: 'Porsche PIWIS Certified', icon: 'Zap' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} className="mr-2" />
            Trusted by Professionals
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Dealership-Trusted Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The same technicians who service Top-100 US dealerships now bring that expertise directly to you.
          </p>
        </div>

        {/* Dealership Partners */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-primary mb-8">
            Trusted by Leading Dealerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {dealershipPartners?.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted p-2 group-hover:shadow-card transition-all duration-300">
                  <Image
                    src={partner?.logo}
                    alt={`${partner?.name} logo`}
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {partner?.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-xl p-8 lg:p-12 border border-brand shadow-card">
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-warning fill-current"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  What Dealership Professionals Say
                </h3>
              </div>

              <div className="relative">
                {testimonials?.map((testimonial, index) => (
                  <div
                    key={testimonial?.id}
                    className={`transition-all duration-500 ${
                      index === currentTestimonial
                        ? 'opacity-100 transform translate-x-0'
                        : 'opacity-0 transform translate-x-4 absolute inset-0'
                    }`}
                  >
                    <div className="text-center space-y-6">
                      <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic">
                        "{testimonial?.content}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial?.avatar}
                            alt={`${testimonial?.name} avatar`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="flex items-center space-x-2">
                            <div className="font-semibold text-primary">
                              {testimonial?.name}
                            </div>
                            {testimonial?.verified && (
                              <Icon name="CheckCircle" size={16} className="text-success" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial?.title}
                          </div>
                          <div className="text-sm font-medium text-accent">
                            {testimonial?.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-accent' :'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-8">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-surface rounded-lg border border-brand hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name={cert?.icon} size={20} className="text-accent" />
                </div>
                <div className="text-sm font-medium text-primary">
                  {cert?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;