import React from 'react';
import About from '../components/About';
import Blog from '../components/Blog';
import { useSeo } from '../hooks/useSeo';

const AboutPage = () => {
  useSeo({
    title: 'About Us | Shoolin Security Services',
    description:
      'Learn about Shoolin Security Services - an ISO 9001:2015 certified, PSARA licensed security agency in Dehradun, Uttarakhand, staffed by trained ex-military personnel.',
    path: '/about',
  });

  return (
    <div className="pt-20">
      <About />
      <Blog />
    </div>
  );
};

export default AboutPage;
