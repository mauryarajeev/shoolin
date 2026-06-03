import React from 'react';
import Contact from '../components/Contact';
import { useSeo } from '../hooks/useSeo';

const ContactPage = () => {
  useSeo({
    title: 'Contact Us | Shoolin Security Services',
    description:
      'Contact Shoolin Security Services in Dehradun, Uttarakhand. Call +91-9456302658 or send us a message for a free security consultation and quote.',
    path: '/contact',
  });

  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
};

export default ContactPage;
