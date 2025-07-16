'use client'

import { useState, useEffect } from 'react'

const services = [
  { 
    icon: "🩺", 
    title: "Health Checkups", 
    desc: "Comprehensive monitoring, growth tracking, and developmental assessments"
  },
  { 
    icon: "💉", 
    title: "Vaccinations", 
    desc: "Complete immunization programs following latest pediatric guidelines"
  },
  { 
    icon: "🩹", 
    title: "Treatment Care", 
    desc: "Expert treatment for childhood illnesses and medical conditions"
  },
  { 
    icon: "👶", 
    title: "Newborn Care", 
    desc: "Specialized care for babies including feeding support and development"
  }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="bg-gray-100">
      {/* Navigation */}
      <nav className="header-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="text-dark-900 font-serif font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="font-serif font-semibold text-xl text-dark-900">Dr. R Ramya Bharathi</h1>
                <p className="text-sm text-gray-500 font-sans">Paediatrician</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="nav-item">Services</a>
              <a href="#about" className="nav-item">About</a>
              <a href="#contact" className="nav-item">Contact</a>
              <button className="btn-primary">Book Appointment</button>
            </div>
            
            <button className="md:hidden btn-light">Menu</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="text-accent-gold">✨</span>
              <span className="text-black font-sans text-sm font-medium">Trusted by 1000+ families</span>
            </div>
            
            <h1 className="font-serif text-hero text-white mb-6 animate-fade-in-up">
              Expert Pediatric Care for 
              <span className="text-accent-gold"> Your Child&apos;s</span>
              <br />Bright Future
            </h1>
            
            <p className="text-xl-plus text-gray-300 mb-4 font-sans max-w-2xl animate-fade-in-up">
              Dr. R Ramya Bharathi - MBBS, DCH, DNB(PAED)
            </p>
            <p className="text-lg text-gray-400 mb-12 font-sans max-w-2xl animate-fade-in-up">
              15+ Years of Dedicated Pediatric Care with Evidence-Based Medicine
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <button className="btn-primary">Schedule Consultation</button>
              <button className="btn-light">Emergency Contact</button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent-gold bg-opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-semibold text-dark-900 mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-500 font-sans max-w-3xl mx-auto">
              Modern healthcare solutions designed specifically for your child&apos;s unique developmental needs and overall wellbeing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card" suppressHydrationWarning>
                <div className="service-icon">{service.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-dark-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-sans leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-semibold text-dark-900 mb-6">
                Meet Dr. R Ramya Bharathi
              </h2>
              <p className="text-lg text-gray-500 font-sans mb-6 leading-relaxed">
                With over 15 years of dedicated experience in pediatric medicine, Dr. Ramya Bharathi combines compassionate care with the latest medical advances to ensure your child receives the best possible treatment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span className="text-dark-700 font-sans">MBBS, DCH, DNB(PAED) qualified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span className="text-dark-700 font-sans">15+ years of pediatric experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span className="text-dark-700 font-sans">Evidence-based treatment approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span className="text-dark-700 font-sans">24/7 emergency consultation available</span>
                </div>
              </div>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="bg-gradient-gold rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-dark-900 font-serif font-bold text-3xl">R</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-dark-900 mb-2">Dr. R Ramya Bharathi</h3>
                <p className="text-dark-700 font-sans">MBBS, DCH, DNB(PAED)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-semibold text-dark-900 mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-gray-500 font-sans mb-16 max-w-3xl mx-auto">
            Contact us today for compassionate, expert pediatric care that puts your child&apos;s health and happiness first
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="service-icon mb-6">📞</div>
              <h3 className="font-serif text-xl font-semibold text-dark-900 mb-3">Call Us</h3>
              <p className="text-accent-gold font-sans font-semibold text-lg mb-2">+91-XXXXXXXXXX</p>
              <p className="text-gray-500 font-sans text-sm">Mon-Sat: 9AM-6PM</p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="service-icon mb-6">🚨</div>
              <h3 className="font-serif text-xl font-semibold text-dark-900 mb-3">Emergency</h3>
              <p className="text-red-500 font-sans font-semibold text-lg mb-2">24/7 Available</p>
              <p className="text-gray-500 font-sans text-sm">Urgent care when needed</p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="service-icon mb-6">📍</div>
              <h3 className="font-serif text-xl font-semibold text-dark-900 mb-3">Location</h3>
              <p className="text-dark-700 font-sans font-semibold mb-2">Clinic Address</p>
              <p className="text-gray-500 font-sans text-sm">Easy parking available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="font-serif text-3xl font-semibold mb-4">Dr. R Ramya Bharathi</h3>
              <p className="text-gray-400 font-sans text-lg mb-2">Paediatrician & Child Health Specialist</p>
              <p className="text-accent-gold font-sans font-medium">MBBS, DCH, DNB(PAED) | 15+ Years Experience</p>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 font-sans">
                &copy; {mounted ? new Date().getFullYear() : '2024'} Dr. R Ramya Bharathi. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}