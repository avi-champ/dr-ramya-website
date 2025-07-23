import Link from 'next/link';
import { Stethoscope, Users, CheckCircle, ArrowRight, BookOpen, Calendar } from 'lucide-react';

export default function DevelopmentalAssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Stethoscope className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Child Developmental Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of your child&apos;s growth, milestones, and developmental progress with expert guidance and early intervention strategies.
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
                <p className="text-gray-600">Recommended as needed</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our child developmental assessment service provides a thorough evaluation of your child&apos;s physical, cognitive, emotional, and social development. 
              We use evidence-based assessment tools and clinical expertise to identify any developmental delays or concerns early, 
              ensuring timely intervention and support for optimal growth.
            </p>
          </div>

          {/* What We Assess */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">What We Assess</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Physical Development</h3>
                    <p className="text-gray-600">Growth patterns, motor skills, and physical milestones appropriate for age</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cognitive Development</h3>
                    <p className="text-gray-600">Learning abilities, problem-solving skills, and intellectual development</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Language & Communication</h3>
                    <p className="text-gray-600">Speech development, language comprehension, and communication skills</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social & Emotional</h3>
                    <p className="text-gray-600">Social interaction skills, emotional regulation, and behavioral patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adaptive Skills</h3>
                    <p className="text-gray-600">Daily living skills, independence, and self-care abilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Behavioral Assessment</h3>
                    <p className="text-gray-600">Attention, hyperactivity, and other behavioral concerns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">Assessment Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">Detailed discussion about your child&apos;s development, concerns, and medical history</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Age-appropriate developmental screening tools and clinical observations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Results & Recommendations</h3>
                  <p className="text-gray-600">Detailed report with findings, recommendations, and next steps for your child&apos;s development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Follow-up Support</h3>
                  <p className="text-gray-600">Ongoing monitoring and guidance to track progress and address any concerns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Article */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4">
                Learn More About Child Development
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read our comprehensive guide on developmental milestones to better understand your child&apos;s growth and development journey.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                href="/health-articles/developmental-milestones"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read: Developmental Milestones Guide
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
            Schedule Your Child&apos;s Assessment
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Early identification and intervention can make a significant difference in your child&apos;s development. Book an appointment today.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Assessment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
