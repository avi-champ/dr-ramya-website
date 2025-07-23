import Link from 'next/link';
import { GraduationCap, Award, Users, Stethoscope, Heart, Calendar, BookOpen, Shield, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">RB</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Dr. R Ramya Bharathi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MBBS, DCH, DNB(PAED) - Dedicated Pediatrician with 15+ years of expertise in comprehensive child healthcare
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">15+ Years Experience</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">NICU Specialist</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">Evidence-Based Medicine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Educational Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">MBBS</h3>
                <p className="text-gray-700 font-medium mb-2">Bachelor of Medicine & Surgery</p>
                <p className="text-sm text-gray-600">Tirunelveli Medical College</p>
                <p className="text-xs text-gray-500 mt-1">Tamil Nadu</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">DCH</h3>
                <p className="text-gray-700 font-medium mb-2">Diploma in Child Health</p>
                <p className="text-sm text-gray-600">Institute of Child Health, Egmore</p>
                <p className="text-xs text-gray-500 mt-1">Chennai</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">DNB</h3>
                <p className="text-gray-700 font-medium mb-2">Diplomate of National Board</p>
                <p className="text-sm text-gray-600">St. Philomena Hospital</p>
                <p className="text-xs text-gray-500 mt-1">Bangalore</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Professional Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">NICU In-Charge</h3>
                    <p className="text-lg text-gray-700 mb-3">Government Hospital, Hosur</p>
                    <p className="text-gray-600 leading-relaxed">
                      Led the Neonatal Intensive Care Unit, managing critical newborn cases and 
                      providing specialized care for premature infants and babies with complex medical conditions. 
                      Developed protocols for optimal patient outcomes and supervised medical teams.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Pediatrician</h3>
                    <p className="text-lg text-gray-700 mb-3">Apollo Hospitals</p>
                    <p className="text-gray-600 leading-relaxed">
                      Extensive corporate healthcare experience providing comprehensive pediatric services 
                      in a multi-specialty hospital setting. Managed complex cases, emergency situations, 
                      and collaborated with multi-disciplinary teams for optimal patient care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Neonatal Intensive Care</h3>
                <p className="text-sm text-gray-600">Specialized care for premature babies and critically ill newborns</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based Medicine</h3>
                <p className="text-sm text-gray-600">Treatment protocols based on latest research and clinical guidelines</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Child Care</h3>
                <p className="text-sm text-gray-600">Complete healthcare management from birth to 18 years</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Stethoscope className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Clinical Diagnosis</h3>
                <p className="text-sm text-gray-600">Accurate diagnosis using clinical expertise and modern investigations</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Antibiotic Stewardship</h3>
                <p className="text-sm text-gray-600">Responsible antibiotic use to prevent resistance and ensure effectiveness</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Heart className="w-8 h-8 text-pink-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Pediatrics</h3>
                <p className="text-sm text-gray-600">Critical care management and emergency interventions</p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4">
                My Medical Philosophy
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Evidence-Based Care</h3>
                <p className="text-gray-600 mb-6">
                  I believe in providing medical care that is firmly grounded in the latest scientific evidence 
                  and clinical research, ensuring every treatment decision is backed by proven protocols.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-3">Responsible Antibiotic Use</h3>
                <p className="text-gray-600">
                  With growing antibiotic resistance, I emphasize judicious use of antibiotics, prescribing 
                  them only when absolutely necessary and educating families about proper usage.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Comprehensive Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Every child receives thorough evaluation considering their unique medical history, 
                  family background, and individual needs for personalized treatment plans.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-3">Family-Centered Approach</h3>
                <p className="text-gray-600">
                  I work closely with families, providing clear explanations and involving parents 
                  in decision-making to ensure the best outcomes for their children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
            Expert Care You Can Trust
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            With extensive experience in NICU care, corporate healthcare, and evidence-based medicine, 
            I&apos;m committed to providing the highest quality pediatric care for your child.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
