import React, { useState, useEffect } from 'react';
import { SliderData } from '../utils/SliderData';
import leftArrowEmpty from '../assets/left-arrow-empty.svg';
import rightArrowEmpty from '../assets/right-arrow-empty.svg';

export const ImgSlider = ({ props }) => {
  const [index, setIndex] = useState(1);
  console.log(index);

  return (
    <div className='imgSliderContainer'>
      {index === 0 ? null : (
        <img
          src={leftArrowEmpty}
          alt=''
          onClick={() => {
            setIndex(index - 1);
          }}
          id='leftArrow'
        />
      )}
      <div className='imgContainer'>
        <img src={SliderData[index].img} alt='Image' id='sliderImage' />
      </div>
      {index === SliderData.length - 1 ? null : (
        <img
          src={rightArrowEmpty}
          alt=''
          onClick={() => {
            setIndex(index + 1);
          }}
          id='rightArrow'
        />
      )}
    </div>
  );
};
