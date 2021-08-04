import React, { useState, useEffect } from 'react';
import { Slider } from '../components/Carousel';
import { Section } from 'react-scroll-section';
export const Portofoliu = () => {
  const slideData = {};

  return (
    <Section className='pages' id='portofoliu'>
      <h1 className='sectionTitles'>Portofoliu</h1>
      <Slider />
    </Section>
  );
};
