'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const footerLinks = {
  services: [
    { label: 'Health Checkups', href: '/services/checkups' },
    { label: 'Vaccinations', href: '/services/vaccinations' },
    { label: 'Treatment Care', href: '/services/treatment' },
    { label: 'Newborn Care', href: '/services/newborn' },
  ],
  resources: [
    { label: 'Health Articles', href: '/health-articles' },
    { label: 'Vaccination Guide', href: '/health-articles/pediatric-vaccination-guidelines' },
    { label: 'Emergency Care', href: '/health-articles/pediatric-emergency-poisoning-guide' },
    { label: 'Child Development', href: '/health-articles/developmental-milestones-guide' },
  ],
  about: [
    { label: 'About Dr. Ramya', href: '/about' },
    { label: 'Clinic Information', href: '/contact' },
    { label: 'Appointment Booking', href: '/contact' },
    { label: 'Insurance & Billing', href: '/insurance' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Medical Disclaimer', href: '/disclaimer' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function ResponsiveFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} 
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Clinic Information */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">RB</span>
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-lg">
                      Dr. R Ramya Bharathi
                    </div>
                    <div className="text-sm text-gray-400">
                      MBBS, DCH, DNB(PAED)
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  15+ years of dedicated pediatric care with sophisticated, evidence-based medicine. 
                  Expert healthcare for children 0-18 years.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91 XXXX XXXXXX</span>
                </a>
                
                <a 
                  href="mailto:drramya@example.com" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">drramya@example.com</span>
                </a>
                
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <div>Clinic Address Line 1</div>
                    <div>City, State - 000000</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                    <div className="text-gray-400">Sun: Emergency Only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mobile:mt-8 lg:mt-0">
              <h3 className="font-serif font-semibold text-lg mb-6 text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="mobile:mt-8 lg:mt-0">
              <h3 className="font-serif font-semibold text-lg mb-6 text-white">
                Health Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About & Legal */}
            <div className="mobile:mt-8 lg:mt-0">
              <h3 className="font-serif font-semibold text-lg mb-6 text-white">
                Information
              </h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="font-medium text-white mb-4 text-sm">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Dr. R Ramya Bharathi. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Medical information is for educational purposes only. Always consult your physician.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-xs">
                {footerLinks.legal.map((link, index) => (
                  <span key={link.label} className="flex items-center">
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                    {index < footerLinks.legal.length - 1 && (
                      <span className="text-gray-600 ml-6">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}
    </footer>
  );
}
