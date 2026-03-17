import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by businesses across Uttarakhand for reliable security solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                index === activeIndex ? 'ring-2 ring-amber-500' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-6 right-6 text-amber-500/10 text-6xl font-serif">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">150+</div>
              <div className="text-gray-400 text-sm">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Team</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">5★</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
