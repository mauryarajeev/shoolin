import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { companyInfo } from '../data/mock';

const PrivacyPolicyPage = () => {
  useSeo({
    title: 'Privacy Policy | Shoolin Security Services',
    description:
      'Read the privacy policy of Shoolin Security Services covering how we collect, use and protect the personal information you share with us.',
    path: '/privacy-policy',
  });

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              Shoolin Security Services ("we", "us", "our") is committed to protecting the privacy of
              visitors to {' '}
              <a href="https://www.shoolinsecurityservices.com" className="text-amber-600 hover:underline">
                www.shoolinsecurityservices.com
              </a>
              . This policy explains what information we collect and how we use it.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p>
                When you submit our contact form we collect the details you provide — your name, email
                address, phone number, inquiry type and message — solely to respond to your enquiry. We
                also collect anonymous usage analytics to help us improve the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>
                Your information is used to respond to enquiries, provide quotations, and improve our
                services. We do not sell or rent your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies & Analytics</h2>
              <p>
                We use cookies and analytics tools (such as Google Analytics) to understand how
                visitors use our site. You can disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p>
                For any questions about this privacy policy, contact us at{' '}
                <a href={`mailto:${companyInfo.email}`} className="text-amber-600 hover:underline">
                  {companyInfo.email}
                </a>{' '}
                or call {companyInfo.phones[0]}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
