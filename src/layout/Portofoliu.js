import React, { useState, useEffect } from 'react';
import { Section } from 'react-scroll-section';
import { CarouselSlider } from '../components/CarouselSlider';
export const Portofoliu = () => {
  const slideData = {};

  return (
    <Section className='pages' id='portofoliu'>
      <h1 className='titles'>Portofoliu</h1>
      <CarouselSlider />
    </Section>
  );
};
