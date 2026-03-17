import React from 'react';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import { Shield, Users, AlertTriangle } from 'lucide-react';
import { crisisManagementTeam } from '../data/mock';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <Services />
      
      {/* Crisis Management Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm font-semibold">Rapid Response Unit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {crisisManagementTeam.title}
            </h2>
            <p className="text-xl text-gray-300">
              {crisisManagementTeam.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-amber-500" />
                Team Composition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {crisisManagementTeam.members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 flex items-center space-x-3 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{member}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <p className="text-amber-300 text-center font-semibold">
                  ⚡ Available 24/7 for immediate deployment in emergency situations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Gallery />
    </div>
  );
};

export default ServicesPage;
