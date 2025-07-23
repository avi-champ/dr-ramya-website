import Link from 'next/link';
import { Shield, Users, CheckCircle, ArrowRight, BookOpen, Calendar } from 'lucide-react';

export default function VaccinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Vaccination Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive immunization programs following the latest pediatric guidelines to protect your child from preventable diseases with safe and effective vaccines.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Service Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Age Range</h3>
                <p className="text-gray-600">0-18 years</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Schedules</h3>
                <p className="text-gray-600">IAP & Government protocols</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our vaccination service ensures your child receives timely and appropriate immunizations according to the Indian Academy of Pediatrics (IAP) 
              recommendations and Government of India&apos;s Universal Immunization Program (UIP). We maintain the highest safety standards and provide 
              comprehensive vaccine counseling to parents.
            </p>
          </div>

          {/* Vaccination Programs */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Vaccination Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">IAP Schedule</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete recommended vaccines</li>
                  <li>• Age-appropriate timing</li>
                  <li>• Evidence-based protection</li>
                  <li>• Latest medical guidelines</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Government UIP</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Free essential vaccines</li>
                  <li>• National immunization program</li>
                  <li>• Basic disease protection</li>
                  <li>• Government certified</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Travel Vaccines</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Destination-specific vaccines</li>
                  <li>• International travel safety</li>
                  <li>• Pre-travel consultation</li>
                  <li>• Health certificates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Vaccines */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Key Vaccines We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Birth to 2 Years</h3>
                    <p className="text-gray-600">BCG, Hepatitis B, OPV/IPV, DPT, Hib, PCV, Rotavirus, MMR</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">School Age (5-12 years)</h3>
                    <p className="text-gray-600">DPT boosters, MMR boosters, Varicella, Typhoid</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adolescents (13-18 years)</h3>
                    <p className="text-gray-600">Tdap, HPV, Meningococcal, Hepatitis A & B</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Special Vaccines</h3>
                    <p className="text-gray-600">Influenza (annual), Japanese Encephalitis, Pneumococcal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Travel Specific</h3>
                    <p className="text-gray-600">Yellow Fever, Typhoid, Hepatitis A, Japanese Encephalitis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Catch-up Program</h3>
                    <p className="text-gray-600">Missed vaccines, delayed schedules, customized plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Care */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Our Safety Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Vaccines</h3>
                <p className="text-sm text-gray-600">Only WHO-approved vaccines from trusted manufacturers</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cold Chain</h3>
                <p className="text-sm text-gray-600">Proper storage and temperature maintenance</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Care</h3>
                <p className="text-sm text-gray-600">Trained medical staff for safe administration</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600">Complete vaccination records and certificates</p>
              </div>
            </div>
          </div>

          {/* Related Article */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4">
                Complete Vaccination Guide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn about the importance of vaccines, vaccination schedules, and how to prepare your child for vaccination visits.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                href="/health-articles/vaccination-guidelines"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read: Vaccination Guidelines
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
            Protect Your Child Today
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Schedule your child&apos;s vaccination appointment and ensure they&apos;re protected against preventable diseases.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Vaccination
          </Link>
        </div>
      </section>
    </div>
  );
}
