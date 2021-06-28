import React, { useState, useEffect } from 'react';
import { Section } from 'react-scroll-section';
import { SliderData } from '../utils/SliderData';
import { ImgSlider } from '../components/ImgSlider';

export const Portofoliu = () => {
  const slideData = {};

  return (
    <Section className='pages' id='portofoliu'>
      <h1>Portofoliu</h1>
      <ImgSlider photos={SliderData} />
    </Section>
  );
};
