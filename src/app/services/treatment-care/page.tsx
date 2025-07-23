import Link from 'next/link';
import { Heart, Users, CheckCircle, ArrowRight, BookOpen, Calendar, Stethoscope, AlertCircle } from 'lucide-react';

export default function TreatmentCarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Treatment Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert medical treatment for childhood illnesses and conditions with personalized care plans, evidence-based medicine, and compassionate support for your child&apos;s recovery.
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
                <h3 className="font-semibold text-gray-900 mb-2">Follow-up</h3>
                <p className="text-gray-600">As per treatment plan</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our comprehensive treatment care service provides expert medical management for various childhood illnesses and conditions. 
              We combine clinical expertise with evidence-based medicine to deliver personalized treatment plans that prioritize 
              your child&apos;s comfort, recovery, and long-term health outcomes.
            </p>
          </div>

          {/* Treatment Areas */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Treatment Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
                <AlertCircle className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-4">Acute Care</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Fever management</li>
                  <li>• Respiratory infections</li>
                  <li>• Gastrointestinal issues</li>
                  <li>• Skin conditions</li>
                  <li>• Ear & throat infections</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-4">Chronic Conditions</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Asthma management</li>
                  <li>• Allergies treatment</li>
                  <li>• Growth disorders</li>
                  <li>• Behavioral issues</li>
                  <li>• Nutritional problems</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <Heart className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-4">Preventive Care</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regular health checkups</li>
                  <li>• Health screening</li>
                  <li>• Wellness counseling</li>
                  <li>• Disease prevention</li>
                  <li>• Health education</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Common Conditions We Treat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Respiratory Issues</h3>
                    <p className="text-gray-600">Cough, cold, bronchitis, pneumonia, asthma, and allergic rhinitis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Gastrointestinal Problems</h3>
                    <p className="text-gray-600">Diarrhea, vomiting, constipation, abdominal pain, and feeding issues</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Infectious Diseases</h3>
                    <p className="text-gray-600">Viral fevers, bacterial infections, and communicable diseases</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Skin Conditions</h3>
                    <p className="text-gray-600">Eczema, rashes, fungal infections, and allergic reactions</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Growth & Development</h3>
                    <p className="text-gray-600">Growth delays, developmental concerns, and nutritional deficiencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Allergies & Asthma</h3>
                    <p className="text-gray-600">Food allergies, environmental allergies, and asthma management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Behavioral Issues</h3>
                    <p className="text-gray-600">Sleep problems, attention issues, and behavioral concerns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Care</h3>
                    <p className="text-gray-600">Urgent medical conditions requiring immediate attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Approach */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Our Treatment Approach</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Thorough evaluation of symptoms, medical history, and physical examination</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accurate Diagnosis</h3>
                  <p className="text-gray-600">Evidence-based diagnosis using clinical expertise and appropriate investigations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Treatment</h3>
                  <p className="text-gray-600">Customized treatment plans considering age, condition severity, and family preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Monitoring</h3>
                  <p className="text-gray-600">Regular follow-ups to track progress and adjust treatment as needed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Article */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4">
                Understanding Fever in Children
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn about fever management, when to seek medical attention, and how to care for your child during illness.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                href="/health-articles/fever-in-children"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read: Fever Management Guide
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
            Get Expert Treatment for Your Child
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don&apos;t wait when your child is unwell. Schedule a consultation for prompt, expert medical care.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Treatment Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
