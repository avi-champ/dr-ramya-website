import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dr. R Ramya Bharathi - Pediatrician',
  description: 'Privacy policy for Dr. R Ramya Bharathi\'s pediatric practice, outlining how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Dr. R Ramya Bharathi (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or receive medical services from our practice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Medical Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Medical history and current health status</li>
                <li>Treatment records and clinical notes</li>
                <li>Vaccination records</li>
                <li>Test results and diagnostic information</li>
                <li>Insurance information</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name, address, phone number, and email address</li>
                <li>Date of birth and emergency contact information</li>
                <li>Guardian/parent information for minors</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Website Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide medical care and treatment</li>
                <li>Communicate about appointments and health matters</li>
                <li>Process payments and insurance claims</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
                <li>Send appointment reminders and health information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>With your explicit consent</li>
                <li>For treatment coordination with other healthcare providers</li>
                <li>To comply with legal obligations</li>
                <li>In case of medical emergencies</li>
                <li>For insurance and payment processing</li>
                <li>With authorized family members or guardians</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Secure storage of physical and electronic records</li>
                <li>Limited access to authorized personnel only</li>
                <li>Regular security updates and monitoring</li>
                <li>Encrypted transmission of sensitive data</li>
                <li>HIPAA-compliant practices and procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access your medical records</li>
                <li>Request corrections to your information</li>
                <li>Request restrictions on information use</li>
                <li>Receive a copy of this privacy notice</li>
                <li>File a complaint about privacy practices</li>
                <li>Revoke consent (where applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Website Analytics</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies to improve user experience and analyze website traffic. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-700 mb-4">
                As a pediatric practice, we collect and maintain information about minors only 
                with parental or guardian consent and in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about this Privacy Policy or to exercise your rights, contact us:
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically. Changes will be posted on our website 
                with the effective date. Your continued use of our services constitutes acceptance of 
                any changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
