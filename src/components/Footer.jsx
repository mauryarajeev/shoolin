import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Award } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_protect-business/artifacts/5ncztsyy_Shoolin%20Logo%20final.jpeg"
                alt="Shoolin Security Services"
                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                style={{ maxWidth: '150px' }}
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Serving Uttarakhand with professional security solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Security Guard Force
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  VIP Protection
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Mobile Patrols
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Lady Checkers
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Security Equipment
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Housekeeping Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  {companyInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  {companyInfo.address}
                </p>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: Instagram, href: '#' }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>ISO 9001:2015 Certified</span>
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>PSARA Licensed</span>
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>MSME Registered</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Shoolin Security Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
