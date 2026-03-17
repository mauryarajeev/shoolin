import React from 'react';
import { Award, BadgeCheck, Clock, Settings, FileCheck, MapPin } from 'lucide-react';
import { companyInfo, certifications, whyChooseUs } from '../data/mock';

const iconMap = {
  Award,
  BadgeCheck,
  Clock,
  Settings,
  FileCheck,
  MapPin
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Security Partner Since 1965
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {companyInfo.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_protect-business/artifacts/3neo5jlp_Shoolin%20image%203.jpeg"
                alt="Security Professional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">6+ Years</div>
                    <div className="text-sm text-gray-600">Of Excellence in Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Security Provider in Uttarakhand
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Shoolin Security Services has been at the forefront of providing professional security 
              and housekeeping services to businesses across Uttarakhand. Our commitment to excellence 
              and client safety has made us the preferred choice for organizations seeking reliable 
              protection.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700 italic">
                "{companyInfo.mission}"
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BadgeCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Ex-Military Personnel</h5>
                  <p className="text-gray-600 text-sm">
                    Our team comprises trained professionals from Indian Armed Forces
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BadgeCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Quality Certified</h5>
                  <p className="text-gray-600 text-sm">
                    ISO 9001:2015 certified with PSARA compliance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BadgeCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Customized Solutions</h5>
                  <p className="text-gray-600 text-sm">
                    Tailored security plans designed for your specific requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Shoolin Security Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
                <p className="text-amber-400 text-xs font-mono">{cert.number}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
