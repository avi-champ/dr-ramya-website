'use client';

import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import ContactPageSchema from '@/components/seo/ContactPageSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        appointmentType: ''
      });
    }, 3000);
  };

  const appointmentTypes = [
    'General Consultation',
    'Child Developmental Assessment',
    'Vaccinations',
    'Newborn Care',
    'Treatment Care',
    'Emergency Consultation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <ContactPageSchema />
      <Breadcrumbs items={[{ label: 'Contact Dr. Ramya Bharathi - Pediatrician in Perumbakkam' }]} />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Dr. Ramya Bharathi R
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Serving families in Perumbakkam, Sholinganallur, OMR, and surrounding Chennai areas with expert pediatric care
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch - Conveniently Located in Perumbakkam
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re here to provide the best pediatric care for your child in Perumbakkam, Sholinganallur, OMR corridor, and nearby Chennai neighborhoods. Easily accessible from Navalur, Kelambakkam, Siruseri, and IT Corridor areas. Reach out to us for appointments, consultations, or any questions you may have.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a 
                    href="tel:+919363956784" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg font-medium"
                  >
                    +91 9363956784
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Call for immediate assistance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a 
                    href="mailto:dr.ramyabharathi@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg font-medium"
                  >
                    dr.ramyabharathi@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Send us your queries</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Clinic Address - Perumbakkam</h3>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    NewGen Multi Speciality Clinics<br />
                    A Block, 1A2, 363, Nookampalayam Rd<br />
                    Arasankalani, Perumbakkam<br />
                    Chennai, Tamil Nadu 600126<br />
                    <span className="text-sm text-blue-600 font-medium">
                      Near OMR | Close to Sholinganallur Metro
                    </span>
                  </address>
                  <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <div><span className="font-medium">Nearby Landmarks:</span> Phoenix MarketCity, SRM University, Navalur Metro</div>
                    <div><span className="font-medium">Easy Access From:</span> Kelambakkam, Siruseri, IT Corridor, Navalur</div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=NewGen+Multi+Speciality+Clinics+A+Block+1A2+363+Nookampalayam+Rd+Arasankalani+Perumbakkam+Chennai+600126" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Clinic Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-blue-600">Clinic Hours:</span>
                        <span className="font-medium">Open until 9:00 PM</span>
                      </div>
                      <div className="text-sm text-gray-600">Monday - Sunday</div>
                    </div>
                    
                    <div className="border-t pt-2">
                      <div className="font-medium text-purple-600 mb-1">Dr. Ramya Bharathi Available:</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span className="font-medium">5:30 PM - 8:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium text-red-600">Emergency Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <span className="font-medium">Emergency consultations available 24/7</span><br />
                    Book appointments during Dr. Ramya&apos;s available hours for guaranteed consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Booking Button */}
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Quick Appointment Booking</h3>
              </div>
              <p className="mb-4 text-blue-100">
                Book your appointment directly through WhatsApp for faster service during Dr. Ramya&apos;s available hours. Serving Perumbakkam, Sholinganallur, OMR, and nearby areas.
              </p>
              <a 
                href="https://wa.me/919363956784?text=Hi%20Dr.%20Ramya%20Bharathi,%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20child." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                <span>Book via WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Type
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select appointment type</option>
                    {appointmentTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Tell us about your child's needs or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We&apos;ll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Find Our Clinic in Perumbakkam</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Conveniently located on Nookampalayam Road, easily accessible from OMR, Sholinganallur Metro, 
            and major Chennai IT Corridor areas including Navalur, Kelambakkam, and Siruseri.
          </p>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.0!2d80.2234567!3d12.8849434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNewGen%20Multi%20Speciality%20Clinics!5e0!3m2!1sen!2sin!4v1674567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NewGen Multi Speciality Clinics Location - Perumbakkam, Chennai"
              />
            </div>
            
            {/* Map Controls */}
            <div className="p-6 bg-gray-50 border-t">
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://maps.google.com/?q=NewGen+Multi+Speciality+Clinics+A+Block+1A2+363+Nookampalayam+Rd+Arasankalani+Perumbakkam+Chennai+600126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Open in Google Maps</span>
                </a>
                <a 
                  href="https://maps.google.com/maps/dir//NewGen+Multi+Speciality+Clinics+A+Block+1A2+363+Nookampalayam+Rd+Arasankalani+Perumbakkam+Chennai+600126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Located on Nookampalayam Road, Perumbakkam - easily accessible from OMR, Sholinganallur Metro, 
                Phoenix MarketCity, and major IT Corridor companies in Navalur, Kelambakkam, and Siruseri areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
