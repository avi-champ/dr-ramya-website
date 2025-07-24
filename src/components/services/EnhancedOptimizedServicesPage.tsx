'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Heart, Baby, Stethoscope, ArrowRight, Users } from 'lucide-react';

// Service data moved to separate module for better code splitting
const services = [
  {
    icon: Stethoscope,
    title: 'Child Developmental Assessment',
    slug: 'developmental-assessment',
    description: 'Comprehensive monitoring of your child\'s growth milestones and developmental progress with expert evaluation.',
    features: ['Growth Tracking', 'Milestone Assessment', 'Behavioral Evaluation', 'Early Intervention'],
    ageRange: '0-18 years',
    priority: 1
  },
  {
    icon: Shield,
    title: 'Vaccinations',
    slug: 'vaccinations',
    description: 'Complete immunization programs following latest pediatric guidelines to protect your child from preventable diseases.',
    features: ['IAP Schedule', 'Government UIP', 'Travel Vaccines', 'Catch-up Immunization'],
    ageRange: '0-18 years',
    priority: 2
  },
  {
    icon: Heart,
    title: 'Treatment Care',
    slug: 'treatment-care',
    description: 'Expert medical treatment for childhood illnesses and conditions with personalized care plans.',
    features: ['Acute Care', 'Chronic Conditions', 'Emergency Consultation', 'Follow-up Care'],
    ageRange: '0-18 years',
    priority: 3
  },
  {
    icon: Baby,
    title: 'Newborn Care',
    slug: 'newborn-care',
    description: 'Specialized care for babies including feeding support, growth monitoring, and developmental guidance.',
    features: ['Feeding Support', 'Sleep Guidance', 'Development Tracking', 'Parental Education'],
    ageRange: '0-2 years',
    priority: 4
  },
];

interface OptimizedServicesPageProps {
  className?: string;
}

// Optimized Service Card Component with better performance
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const IconComponent = service.icon;
  
  return (
    <article
      className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ 
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'forwards'
      }}
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
        <IconComponent className="w-8 h-8 text-blue-600" aria-hidden="true" />
      </div>
      
      <h3 
        className="text-2xl lg:text-3xl font-serif font-semibold text-gray-900 mb-4"
        itemProp="name"
      >
        {service.title}
      </h3>
      
      <p 
        className="text-gray-600 mb-6 leading-relaxed"
        itemProp="description"
      >
        {service.description}
      </p>

      {/* Service Details */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <Users className="w-4 h-4 mr-2 text-blue-500" aria-hidden="true" />
          <span itemProp="audience">{service.ageRange}</span>
        </div>
      </div>
      
      <ul className="space-y-2 mb-6" itemProp="serviceType">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
};

// Optimized Loading Skeleton
const LoadingSkeleton = () => (
  <div className="animate-pulse" aria-label="Loading services">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100">
          <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-6"></div>
          <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-2 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-1/2 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

export function OptimizedServicesPage({ className = '' }: OptimizedServicesPageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reduce loading time for better LCP
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Early return for faster rendering
  if (!isLoaded) {
    return (
      <div className={`min-h-screen bg-white ${className}`}>
        <HeaderSection />
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LoadingSkeleton />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <HeaderSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}

// Separated components for better code organization and performance
const HeaderSection = () => (
  <header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive pediatric care services designed to support your child&apos;s health and development at every stage.
        </p>
      </div>
    </div>
  </header>
);

const ServicesSection = () => (
  <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/MedicalOrganization">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
        Ready to Schedule an Appointment?
      </h2>
      <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
        Contact us today to discuss your child&apos;s healthcare needs and schedule a consultation.
      </p>
      
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
        aria-label="Book appointment with Dr. Ramya Pediatrics"
      >
        Book Appointment Now
      </Link>
    </div>
  </section>
);

export default OptimizedServicesPage;
