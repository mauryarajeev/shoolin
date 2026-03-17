import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { Award, BadgeCheck, Clock, Settings, FileCheck, MapPin, Building2 } from 'lucide-react';
import { whyChooseUs, governmentClients } from '../data/mock';

const iconMap = {
  Award,
  BadgeCheck,
  Clock,
  Settings,
  FileCheck,
  MapPin
};

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Government & Institutional Clients Section */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              Trusted By
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Government & Institutional Clients
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              We deploy high-quality and advanced security equipment to ensure comprehensive protection across all client sites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {governmentClients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 flex items-center space-x-5"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{client}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Why Choose Shoolin Security Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Trusted by businesses across Uttarakhand for professional security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and customized security solution
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
