import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Dr. R Ramya Bharathi - Pediatrician',
  description: 'Cookie policy for Dr. R Ramya Bharathi\'s pediatric practice website, explaining how we use cookies and similar technologies.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                This Cookie Policy explains how Dr. R Ramya Bharathi (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) 
                uses cookies and similar technologies on our website. By using our website, you consent to 
                the use of cookies as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit our website. They help us provide you with a better browsing experience 
                by remembering your preferences and understanding how you use our site.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Types of Information Collected</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Website navigation patterns and preferences</li>
                <li>Technical information about your device and browser</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring websites and search terms used</li>
                <li>Geographic location (general region only)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-3">
                These cookies are necessary for the website to function properly:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Session management and security</li>
                <li>Form submission and contact functionality</li>
                <li>Accessibility features and user preferences</li>
                <li>Basic website functionality</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-3">
                These help us understand how visitors use our website:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Website traffic analysis</li>
                <li>Popular content and pages</li>
                <li>User journey and navigation patterns</li>
                <li>Website performance optimization</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Functional Cookies</h3>
              <p className="text-gray-700 mb-3">
                These enhance your browsing experience:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Language and region preferences</li>
                <li>Accessibility settings</li>
                <li>Content personalization</li>
                <li>Remember your choices and settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your device:
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Google Analytics</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provides website usage statistics</li>
                <li>Helps improve user experience</li>
                <li>Anonymous data collection</li>
                <li>Option to opt-out available</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Social Media Plugins</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Facebook, Instagram, Twitter integration</li>
                <li>Social sharing functionality</li>
                <li>Content embedding from social platforms</li>
                <li>Governed by respective platform policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How We Use Cookie Information</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Improve website functionality and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Personalize content and recommendations</li>
                <li>Ensure website security and prevent fraud</li>
                <li>Provide relevant health information</li>
                <li>Optimize website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Duration</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Session Cookies</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Temporary cookies deleted when you close your browser</li>
                <li>Essential for website functionality during your visit</li>
                <li>Do not collect personal information</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Persistent Cookies</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Remain on your device for a set period</li>
                <li>Remember your preferences for future visits</li>
                <li>Typical duration: 30 days to 2 years</li>
                <li>Can be manually deleted at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-3">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Block all cookies</li>
                <li>Allow only essential cookies</li>
                <li>Delete existing cookies</li>
                <li>Set notifications for new cookies</li>
                <li>Manage third-party cookies separately</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Opt-Out Options</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Google Analytics opt-out: Available through Google&apos;s opt-out tools</li>
                <li>Social media cookies: Manage through respective platform settings</li>
                <li>Advertising cookies: Use industry opt-out tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                Disabling cookies may affect your website experience:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Some website features may not work properly</li>
                <li>You may need to re-enter information on each visit</li>
                <li>Personalized content may not be available</li>
                <li>Contact forms may not function correctly</li>
                <li>Website performance may be reduced</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookie Security</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We use secure cookies where appropriate</li>
                <li>No sensitive medical information is stored in cookies</li>
                <li>Regular security reviews and updates</li>
                <li>Compliance with data protection regulations</li>
                <li>Encrypted transmission of cookie data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-700 mb-4">
                As a pediatric practice, we are particularly mindful of children&apos;s privacy:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We do not knowingly collect personal information from children under 13</li>
                <li>Parents can review and delete their child&apos;s information</li>
                <li>Special protections for children&apos;s data</li>
                <li>Compliance with children&apos;s privacy laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy to reflect:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Changes in technology or website functionality</li>
                <li>New legal requirements</li>
                <li>Updated privacy practices</li>
                <li>User feedback and improvements</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We will notify you of significant changes by posting the updated policy on our website 
                with a new effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about our Cookie Policy or to exercise your rights:
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

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> By continuing to use our website, you acknowledge that you have 
                    read and understood this Cookie Policy and consent to our use of cookies as described herein.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
