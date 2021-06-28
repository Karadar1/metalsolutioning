import React from 'react';
import { Section } from 'react-scroll-section';
import { Service } from './Service';
import { Acasa } from './Acasa';
import { Contact } from './Contact';
import { Portofoliu } from './Portofoliu';

export const Body = () => {
  return (
    <div>
      <div className='Sections'>
        <Acasa />
        <Service />
        <Portofoliu />
        <Contact />
      </div>
    </div>
  );
};

export default Body;
