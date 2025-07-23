'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Health Articles', href: '/health-articles' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Health Checkups', href: '/services/checkups' },
      { label: 'Vaccinations', href: '/services/vaccinations' },
      { label: 'Treatment Care', href: '/services/treatment' },
      { label: 'Newborn Care', href: '/services/newborn' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function ResponsiveNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle dropdown hover with delay
  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close mobile menu when route changes
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg md:text-xl">RB</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif font-semibold text-lg md:text-xl text-gray-900">
                  Dr. R Ramya Bharathi
                </div>
                <div className="text-xs md:text-sm text-gray-600 -mt-1">
                  Paediatrician
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 animate-fade-in-down">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Contact Info - Desktop Only */}
              <div className="hidden xl:flex items-center space-x-4 text-sm">
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 XXXX XXXXXX</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <div className="font-serif font-semibold text-lg text-gray-900">
                Dr. R Ramya Bharathi
              </div>
              <div className="text-sm text-gray-600">
                Paediatrician
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 py-6 overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.label} className="px-6 mb-2">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  <span className="text-lg">{item.label}</span>
                  {item.children && (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.children && (
                  <div className="ml-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        onClick={handleLinkClick}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>+91 XXXX XXXXXX</span>
            </a>
            <a 
              href="mailto:drramya@example.com" 
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>drramya@example.com</span>
            </a>
            <div className="flex items-center space-x-3 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Clinic Address, City</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
