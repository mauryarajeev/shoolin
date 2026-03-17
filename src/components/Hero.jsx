import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80 z-10"></div>
        <img
          src="https://customer-assets.emergentagent.com/job_protect-business/artifacts/venej49n_Shoolin%20image%201.jpeg"
          alt="Professional Security Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">ISO 9001:2015 Certified | PSARA Licensed</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            PROTECTED
            <span className="block text-amber-500 mt-2">YOU FEEL</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
            The Leading Security and Housekeeping Service Provider in Uttarakhand
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Professional security solutions with ex-military personnel. Trusted by businesses across Uttarakhand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-10 py-7 text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 group">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-10 py-7 text-lg backdrop-blur-sm transition-all duration-300"
              >
                Our Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/20">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-3">6+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-3">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Support Available</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-3">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Trained Personnel</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-3">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
