import React from 'react';
import { Section } from 'react-scroll-section';
import { Service } from './Service';
import { Acasa } from './Acasa';
import { Contact } from './Contact';
import { Portofoliu } from './Portofoliu';
import Footer from './Footer';

export const Body = () => {
  return (
    <div>
      <div className='Sections'>
        <Acasa />
        <Service />
        <Portofoliu />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
