import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, GraduationCap, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { careerBenefits } from '../data/mock';

const iconMap = {
  DollarSign,
  GraduationCap,
  TrendingUp,
  Heart
};

const Careers = () => {
  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Careers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Elite Team
          </h2>
          <p className="text-lg text-gray-600">
            We're always looking for dedicated professionals to join our security family
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://customer-assets.emergentagent.com/job_protect-business/artifacts/cibr2kch_Shoolin%20image%202.jpeg"
              alt="Career Opportunities"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Build Your Career with Us
              </h3>
              <p className="text-gray-200">
                Join a team that values discipline, dedication, and professional excellence
              </p>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Work With Us
            </h3>
            <p className="text-gray-600 mb-8">
              Shoolin Security Services offers more than just a job – we provide a career path 
              with growth opportunities, comprehensive training, and a supportive work environment.
            </p>

            <div className="space-y-4">
              {careerBenefits.map((benefit) => {
                const IconComponent = iconMap[benefit.icon];
                return (
                  <div
                    key={benefit.id}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-slate-900 rounded-2xl p-12">
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl font-bold mb-4">Current Openings</h3>
            <p className="text-gray-400">
              We're hiring for multiple positions. Apply now to join our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Security Guard',
                type: 'Full-time',
                location: 'Dehradun',
                requirements: 'Ex-military background preferred'
              },
              {
                title: 'Security Supervisor',
                type: 'Full-time',
                location: 'Dehradun',
                requirements: '3+ years experience required'
              },
              {
                title: 'Lady Security Checker',
                type: 'Full-time',
                location: 'Multiple Locations',
                requirements: 'Female candidates only'
              },
              {
                title: 'Mobile Patrol Officer',
                type: 'Full-time',
                location: 'Uttarakhand',
                requirements: 'Valid driving license required'
              }
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{job.requirements}</p>
                <a 
                  href={`mailto:shoolinss1965@gmail.com?subject=Job Application - ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you.`}
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Don't see the right position? Send us your resume anyway!
            </p>
            <a 
              href="mailto:shoolinss1965@gmail.com?subject=Job Application - Resume Submission&body=Dear Hiring Team,%0D%0A%0D%0APlease find my resume attached for your consideration.%0D%0A%0D%0AThank you."
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8">
                Submit Your Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
