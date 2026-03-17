import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Truck, 
  UserCheck, 
  Users, 
  Camera, 
  Radio, 
  Sparkles, 
  Car 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../data/mock';

const iconMap = {
  Shield,
  Truck,
  UserCheck,
  Users,
  Camera,
  Radio,
  Sparkles,
  Car
};

const Services = () => {
  return (
    <section id="services" className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive Security Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From security personnel to advanced equipment, we provide complete protection tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-gray-200 hover:border-amber-500 bg-white overflow-hidden h-full"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need a customized security solution for your organization?
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
