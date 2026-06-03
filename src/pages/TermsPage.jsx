import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { companyInfo } from '../data/mock';

const TermsPage = () => {
  useSeo({
    title: 'Terms of Service | Shoolin Security Services',
    description:
      'Review the terms of service that govern your use of the Shoolin Security Services website and the engagement of our security and housekeeping services.',
    path: '/terms-of-service',
  });

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              These terms govern your use of the Shoolin Security Services website and any services you
              engage us to provide. By using this website you agree to these terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Use of Website</h2>
              <p>
                The content on this website is provided for general information about our security and
                housekeeping services. We may update or change the content at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Services</h2>
              <p>
                All security and housekeeping services are subject to a separate written agreement.
                Service descriptions on this website do not constitute a binding offer. Final scope,
                pricing and terms are confirmed in your service contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
              <p>
                All logos, text and images on this website are the property of Shoolin Security Services
                and may not be reproduced without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p>
                For questions about these terms, contact us at{' '}
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

export default TermsPage;
