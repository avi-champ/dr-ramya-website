import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dr. R Ramya Bharathi - Pediatrician',
  description: 'Terms of service for Dr. R Ramya Bharathi\'s pediatric practice, outlining the terms and conditions for using our services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing our website, scheduling appointments, or receiving medical services from 
                Dr. R Ramya Bharathi, you agree to be bound by these Terms of Service and all applicable 
                laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Medical Services</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Professional Relationship</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Dr. R Ramya Bharathi provides pediatric medical services</li>
                <li>A doctor-patient relationship is established only after in-person consultation</li>
                <li>Medical advice given online or over phone is for guidance only</li>
                <li>Emergency situations require immediate medical attention at nearest facility</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Scope of Practice</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Pediatric care for children from birth to 18 years</li>
                <li>Preventive care, vaccinations, and health screenings</li>
                <li>Treatment of common childhood illnesses</li>
                <li>Developmental assessments and guidance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Appointments and Consultations</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Scheduling</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Appointments can be scheduled by phone or in person</li>
                <li>We operate Monday-Saturday: 5:30 PM - 8:30 PM</li>
                <li>Emergency consultations available on Sundays</li>
                <li>Please arrive 15 minutes before your appointment time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Patient Responsibilities</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide accurate and complete medical history</li>
                <li>Follow prescribed treatment plans and medication instructions</li>
                <li>Attend scheduled follow-up appointments</li>
                <li>Inform us of any adverse reactions or concerns</li>
                <li>Maintain current contact and insurance information</li>
                <li>Respect clinic staff and other patients</li>
                <li>Pay fees and co-payments as required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment and Insurance</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Payment is due at the time of service</li>
                <li>We accept cash, cards, and digital payments</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Fee Schedule</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Consultation fees are communicated before service</li>
                <li>Additional charges may apply for procedures or tests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Website Use</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Permitted Use</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Educational and informational purposes only</li>
                <li>Accessing health articles and practice information</li>
                <li>Contacting our office for appointments</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Prohibited Activities</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Unauthorized access to secure areas</li>
                <li>Posting false or misleading information</li>
                <li>Sharing login credentials</li>
                <li>Attempting to disrupt website functionality</li>
                <li>Using automated tools to access content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Confidentiality and Privacy</h2>
              <p className="text-gray-700 mb-4">
                We are committed to maintaining the confidentiality of your medical information 
                in accordance with HIPAA and applicable privacy laws. Please refer to our 
                Privacy Policy for detailed information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Services provided according to current medical standards</li>
                <li>No guarantee of specific treatment outcomes</li>
                <li>Website information is for educational purposes only</li>
                <li>Not liable for third-party website content or links</li>
                <li>Emergency care should be sought when appropriate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Dr. R Ramya Bharathi</strong><br />
                  Newgen Speciality Clinics<br />
                  Plot No 16, Near Reliance Digital<br />
                  Rukumani Nagar, Perumbakkam-600100<br />
                  Phone: +91 9363956784<br />
                  Email: dr.ramyabharathi@gmail.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                These terms may be updated periodically. Changes will be posted on our website 
                with the effective date. Your continued use of our services constitutes acceptance 
                of any modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service are governed by the laws of India and the state of Tamil Nadu. 
                Any disputes will be resolved in the appropriate courts of Chennai, Tamil Nadu.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
