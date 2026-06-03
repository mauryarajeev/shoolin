import React from 'react';
import Careers from '../components/Careers';
import { useSeo } from '../hooks/useSeo';

const CareersPage = () => {
  useSeo({
    title: 'Careers | Shoolin Security Services',
    description:
      'Join Shoolin Security Services. Explore career opportunities for security professionals and ex-servicemen in Dehradun, Uttarakhand, with training and staff welfare benefits.',
    path: '/careers',
  });

  return (
    <div className="pt-20">
      <Careers />
    </div>
  );
};

export default CareersPage;
