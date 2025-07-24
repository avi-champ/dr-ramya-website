'use client';

import { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Star, Clock, ExternalLink, Users, Award, Calendar, Heart, Shield, Baby, Stethoscope, Share2 } from 'lucide-react';
import Link from 'next/link';

// Optimized for all devices - mobile, tablet, laptop
const services = [
  {
    icon: Shield,
    title: 'Vaccinations',
    desc: 'Complete immunization programs following latest pediatric guidelines',
    features: ['IAP Schedule', 'Government UIP', 'Travel Vaccines'],
    link: '/health-articles/vaccination-guidelines',
  },
  {
    icon: Heart,
    title: 'Treatment Care',
    desc: 'Expert treatment for childhood illnesses and medical conditions',
    features: ['Acute Care', 'Chronic Conditions', 'Emergency Consultation'],
    link: '/health-articles/fever-in-children',
  },
  {
    icon: Baby,
    title: 'Newborn Care',
    desc: 'Specialized care for babies including feeding support and development',
    features: ['Feeding Support', 'Sleep Guidance', 'Development Tracking'],
    link: '/health-articles/newborn-care',
  },
  {
    icon: Stethoscope,
    title: 'Child Developmental Assessment',
    desc: 'Comprehensive monitoring of growth milestones and developmental progress',
    features: ['Growth Tracking', 'Milestone Assessment', 'Behavioral Evaluation'],
    link: '/health-articles/developmental-milestones',
  },
];

const stats = [
  { icon: Users, label: 'Happy Families', value: '100+', color: 'text-blue-600' },
  { icon: Award, label: 'Years Experience', value: '15+', color: 'text-purple-600' },
  { icon: Star, label: 'Patient Rating', value: '4.8/5', color: 'text-orange-600' },
];

const testimonials = [
  {
    name: 'Lakshmi Venkatesh',
    location: 'Shollinganallur, Chennai',
    rating: 5,
    text: 'Dr. Ramya has been exceptional in caring for both my children. Her thorough approach and gentle manner make every visit comfortable.',
    avatar: '👩‍🦰'
  },
  {
    name: 'Karthik Raman',
    location: 'Navalur, Chennai',
    rating: 4,
    text: 'Very good pediatrician with extensive knowledge. The clinic is well-maintained and the staff is helpful. Vaccination schedule was clearly explained.',
    avatar: '👨‍💼'
  },
  {
    name: 'Divya Krishnamurthy',
    location: 'Karapakkam, Chennai',
    rating: 5,
    text: 'Dr. Ramya\'s expertise in newborn care was invaluable during my baby\'s first months. She is very patient and answers all our questions thoroughly.',
    avatar: '👩‍💻'
  },
  {
    name: 'Suresh Murugan',
    location: 'Sholinganallur, Chennai',
    rating: 4,
    text: 'Good experience overall. Dr. Ramya diagnosed my daughter\'s condition correctly and provided effective treatment. Would recommend to other parents.',
    avatar: '👨‍🔬'
  },
  {
    name: 'Meera Balasubramanian',
    location: 'Medavakkam, Chennai',
    rating: 5,
    text: 'Excellent pediatrician! Very caring and professional. My son feels comfortable during visits and Dr. Ramya explains everything in detail to help us understand.',
    avatar: '👩‍🏫'
  },
  {
    name: 'Rajesh Thangaraj',
    location: 'Perumbakkam, Chennai',
    rating: 4,
    text: 'Dr. Ramya is knowledgeable and the treatment provided was effective. The clinic timings are convenient for working parents like us.',
    avatar: '👨‍💻'
  },
];

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  readingTime: number;
  slug: string;
  featured: boolean;
  views?: number;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Common Conditions':
      return 'text-blue-600 bg-blue-50';
    case 'Vaccination':
      return 'text-purple-600 bg-purple-50';
    case 'Emergency Care':
      return 'text-red-600 bg-red-50';
    case 'Development':
      return 'text-green-600 bg-green-50';
    case 'Nutrition':
      return 'text-orange-600 bg-orange-50';
    case 'Prevention':
      return 'text-teal-600 bg-teal-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

// Simple Social Sharing Component
const SocialSharing = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://drramya-paediatrics.vercel.app';
  const shareText = 'Expert pediatric care by Dr. R Ramya Bharathi - 15+ years experience in child healthcare';

  const handleNativeShare = async () => {
    if (typeof window !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title: 'Dr. R Ramya Bharathi - Pediatrician',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to WhatsApp share
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
      window.open(whatsappUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <button
        onClick={handleNativeShare}
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Share this page"
        title="Share"
      >
        <Share2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default function ResponsiveHomePage() {
  const [mounted, setMounted] = useState(false);
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Fetch featured articles
    const fetchFeaturedArticles = async () => {
      try {
        const response = await fetch('/api/articles/featured');
        if (response.ok) {
          const articles = await response.json();
          setFeaturedArticles(articles.slice(0, 3)); // Show only first 3
        }
      } catch (error) {
        console.error('Error fetching featured articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedArticles();
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      
      {/* Simple Social Sharing */}
      <SocialSharing />
      
      {/* Hero Section - Optimized for all devices */}
      <section className="relative min-h-mobile-screen lg:min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" 
               style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-mobile-section md:py-tablet-section lg:py-desktop-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-mobile-content lg:min-h-desktop-content">
            
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="mb-6 lg:mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2 text-blue-600" />
                  15+ Years of Pediatric Excellence
                </div>
                
                <h1 className="text-mobile-h1 sm:text-tablet-h1 lg:text-desktop-h1 xl:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Expert Care for Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Little Ones
                  </span>
                </h1>
                
                <div className="space-y-4 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-justify">
                    Dr. R Ramya Bharathi - MBBS, DCH, DNB(PAED). 
                    Experienced pediatrician with 15+ years of dedicated experience and NICU expertise, 
                    committed to evidence-based medicine for children aged 0-18 years.
                  </p>
                  
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                    Our practice follows the latest <a href="https://www.iapindia.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">pediatric guidelines</a>, 
                    providing comprehensive healthcare including preventive care, developmental assessments, 
                    vaccination programs, and specialized treatments with personalized care plans.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/health-articles"
                  className="group inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Health Articles
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {stats.map((stat) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className={`inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${stat.color} bg-opacity-10 mb-2`}>
                        <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.color}`} />
                      </div>
                      <div className="font-bold text-lg lg:text-xl text-gray-900">{stat.value}</div>
                      <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image/Visual */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right order-first lg:order-last">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl lg:rounded-[3rem] p-8 lg:p-12 shadow-2xl">
                  {/* Doctor Illustration/Photo Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl lg:rounded-[2rem] flex items-center justify-center text-6xl lg:text-8xl">
                    👩‍⚕️
                  </div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 lg:p-4 animate-bounce-gentle">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-800">Safe Care</div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 lg:p-4 animate-bounce-gentle" 
                       style={{ animationDelay: '1s' }}>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-800">15+ Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-mobile-section md:py-tablet-section lg:py-desktop-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-mobile-h2 sm:text-tablet-h2 lg:text-desktop-h2 font-serif font-bold text-gray-900 mb-4">
              Comprehensive Pediatric Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              From specialized care to developmental assessments, we provide complete healthcare solutions for your child&apos;s growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-mobile-section md:py-tablet-section lg:py-desktop-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-mobile-h2 sm:text-tablet-h2 lg:text-desktop-h2 font-serif font-bold text-gray-900 mb-4">
              Latest Health Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Evidence-based health information and parenting guidance from our pediatric experts.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/health-articles/${article.slug}`}
                  className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readingTime} min
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    {article.views && (
                      <span className="text-sm text-gray-500">
                        {article.views.toLocaleString()} views
                      </span>
                    )}
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-10 lg:mt-12">
            <Link
              href="/health-articles"
              className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-white border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Articles
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-mobile-section md:py-tablet-section lg:py-desktop-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-mobile-h2 sm:text-tablet-h2 lg:text-desktop-h2 font-serif font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Trusted by families for exceptional pediatric care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-xl lg:text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic text-justify">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-mobile-section md:py-tablet-section lg:py-desktop-section bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} 
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-mobile-h2 sm:text-tablet-h2 lg:text-desktop-h2 font-serif font-bold mb-6">
            Ready to Give Your Child the Best Care?
          </h2>
          <p className="text-lg lg:text-xl mb-8 lg:mb-10 opacity-90 max-w-3xl mx-auto text-justify">
            Schedule an appointment today and experience compassionate, expert pediatric care 
            that puts your child&apos;s health and happiness first.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment Now
            </Link>
            
            <Link
              href="tel:+919363956784"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              <Stethoscope className="w-5 h-5 mr-2" />
              Call +91 9363956784
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
