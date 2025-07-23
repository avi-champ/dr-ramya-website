import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | Dr. R Ramya Bharathi - Pediatrician',
  description: 'Medical disclaimer for Dr. R Ramya Bharathi\'s pediatric practice, outlining the limitations and proper use of medical information provided.',
};

export default function MedicalDisclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> This website and its content are for informational and educational purposes only. 
                    The information provided does not constitute medical advice and should not be relied upon for making medical decisions.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Information</h2>
              <p className="text-gray-700 mb-4">
                The information provided on this website by Dr. R Ramya Bharathi is intended for general 
                informational and educational purposes only. It is not intended to be a substitute for 
                professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700 mb-4">
                Always seek the advice of your physician or other qualified healthcare provider with any 
                questions you may have regarding a medical condition. Never disregard professional medical 
                advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Doctor-Patient Relationship</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Visiting this website does not create a doctor-patient relationship</li>
                <li>A doctor-patient relationship is established only through in-person consultation</li>
                <li>Online information cannot replace face-to-face medical evaluation</li>
                <li>Individual medical conditions require personalized assessment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accuracy of Information</h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Medical knowledge evolves continuously</li>
                <li>Information may become outdated over time</li>
                <li>Individual cases may vary significantly</li>
                <li>We cannot guarantee the completeness or accuracy of all content</li>
                <li>Always verify information with current medical literature and professionals</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Emergency Situations</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Emergency Warning:</strong> If you are experiencing a medical emergency, 
                      call emergency services immediately (108 in India) or go to the nearest emergency room. 
                      Do not rely on this website for emergency medical guidance.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Emergency Signs in Children</h3>
              <p className="text-gray-700 mb-4">
                Seek immediate medical attention if your child experiences:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Difficulty breathing or shortness of breath</li>
                <li>Severe allergic reactions</li>
                <li>High fever (above 104°F/40°C) or fever in infants under 3 months</li>
                <li>Seizures or loss of consciousness</li>
                <li>Severe dehydration or persistent vomiting</li>
                <li>Signs of severe infection or sepsis</li>
                <li>Any life-threatening symptoms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Medication and Treatment Information</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Medication dosages mentioned are for general reference only</li>
                <li>Always follow prescribed dosages from your healthcare provider</li>
                <li>Do not start, stop, or change medications without medical supervision</li>
                <li>Individual responses to treatments may vary</li>
                <li>Consider allergies, interactions, and contraindications</li>
                <li>Over-the-counter medications also require careful consideration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vaccination Information</h2>
              <p className="text-gray-700 mb-4">
                Vaccination schedules and recommendations provided are based on standard guidelines:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Individual vaccination schedules may vary</li>
                <li>Medical conditions may affect vaccination timing</li>
                <li>Always consult with your pediatrician for personalized schedules</li>
                <li>Vaccine contraindications must be considered</li>
                <li>Follow official government and medical organization guidelines</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Developmental Milestones</h2>
              <p className="text-gray-700 mb-4">
                Developmental milestone information provided:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Represents general guidelines and averages</li>
                <li>Children develop at their own pace</li>
                <li>Variations are often normal</li>
                <li>Consult your pediatrician for concerns about development</li>
                <li>Early intervention services available when needed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. External Links and References</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We may provide links to external websites for additional information</li>
                <li>We are not responsible for the content of external sites</li>
                <li>External content may not reflect our medical opinions</li>
                <li>Always verify information from multiple sources</li>
                <li>Links do not constitute endorsements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Dr. R Ramya Bharathi and this website:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Cannot be held liable for decisions made based on website information</li>
                <li>Do not guarantee specific medical outcomes</li>
                <li>Are not responsible for delays in seeking appropriate medical care</li>
                <li>Cannot replace comprehensive medical evaluation</li>
                <li>Recommend always consulting qualified healthcare professionals</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Professional Qualifications</h2>
              <p className="text-gray-700 mb-4">
                Dr. R Ramya Bharathi is qualified as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>MBBS from Tirunelveli Medical College</li>
                <li>DCH (Diploma in Child Health) from Institute of Child Health, Egmore</li>
                <li>DNB (Diplomate of National Board) in Pediatrics from St. Philomena, Bangalore</li>
                <li>Licensed to practice in Tamil Nadu, India</li>
                <li>Specialized training in NICU care and pediatric medicine</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact for Medical Care</h2>
              <p className="text-gray-700 mb-4">
                For medical consultations and appointments:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Dr. R Ramya Bharathi</strong><br />
                  Newgen Speciality Clinics<br />
                  Plot No 16, Near Reliance Digital<br />
                  Rukumani Nagar, Perumbakkam-600100<br />
                  Phone: +91 9363956784<br />
                  Email: dr.ramyabharathi@gmail.com<br />
                  Hours: Monday-Saturday 5:30 PM - 8:30 PM
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Updates to This Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                This medical disclaimer may be updated periodically to reflect changes in medical 
                practice, legal requirements, or website content. The effective date will be updated 
                accordingly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
