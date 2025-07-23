import Link from 'next/link';
import { Baby, Users, CheckCircle, ArrowRight, BookOpen, Calendar, Heart, Shield } from 'lucide-react';

export default function NewbornCarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Baby className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Newborn Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized care for babies including feeding support, growth monitoring, developmental guidance, and comprehensive support for new parents during this precious time.
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
                <p className="text-gray-600">0-2 years</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Follow-up</h3>
                <p className="text-gray-600">Regular monitoring visits</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our comprehensive newborn care service provides expert support during your baby&apos;s critical early months. 
              We specialize in newborn health, offering evidence-based guidance on feeding, sleep, development, 
              and addressing common concerns that new parents face. We ensure your baby gets the best start in life.
            </p>
          </div>

          {/* Care Areas */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Comprehensive Newborn Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                <Baby className="w-8 h-8 text-pink-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-4">Feeding Support</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Breastfeeding guidance</li>
                  <li>• Formula feeding advice</li>
                  <li>• Feeding schedules</li>
                  <li>• Weight monitoring</li>
                  <li>• Nutritional counseling</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <Heart className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-4">Health Monitoring</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regular checkups</li>
                  <li>• Growth tracking</li>
                  <li>• Milestone assessment</li>
                  <li>• Health screening</li>
                  <li>• Early problem detection</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-4">Parental Support</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Newborn care education</li>
                  <li>• Sleep guidance</li>
                  <li>• Safety advice</li>
                  <li>• Emergency recognition</li>
                  <li>• Parenting confidence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Key Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Breastfeeding Support</h3>
                    <p className="text-gray-600">Guidance on proper latching, positioning, milk supply, and solving common breastfeeding challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sleep Training</h3>
                    <p className="text-gray-600">Safe sleep practices, sleep patterns, and establishing healthy sleep routines</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Growth & Development</h3>
                    <p className="text-gray-600">Regular weight, height, and head circumference monitoring with developmental milestone tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Common Concerns</h3>
                    <p className="text-gray-600">Colic, reflux, rashes, jaundice, and other common newborn issues</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vaccination Schedule</h3>
                    <p className="text-gray-600">Timely immunizations according to recommended schedules starting from birth</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Parental Education</h3>
                    <p className="text-gray-600">Comprehensive guidance on baby care, safety measures, and recognizing warning signs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Postpartum Support</h3>
                    <p className="text-gray-600">Support for mothers recovering from childbirth and adjusting to new parenthood</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Guidance</h3>
                    <p className="text-gray-600">When to call the doctor, emergency signs, and immediate care instructions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Recommended Visit Schedule</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-6 bg-blue-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">First Week (3-5 days)</h3>
                  <p className="text-gray-600">Initial assessment, feeding evaluation, weight check, jaundice screening</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">2-3 Weeks</h3>
                  <p className="text-gray-600">Growth monitoring, feeding progress, development check, parent counseling</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-green-50 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Monthly Visits (2-6 months)</h3>
                  <p className="text-gray-600">Regular checkups, vaccinations, developmental milestones, feeding adjustments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Article */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4">
                Complete Newborn Care Guide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Essential information for new parents on caring for your newborn, feeding, sleep, and what to expect in the first months.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                href="/health-articles/newborn-care"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read: Newborn Care Essentials
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
            Give Your Baby the Best Start
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Schedule your newborn&apos;s first visit and get expert support during this important time.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Newborn Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
