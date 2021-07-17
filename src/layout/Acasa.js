import React from 'react';
import { Section } from 'react-scroll-section';
import { Button } from '../components/Button';
import weldingMask from '../assets/Group 9.svg';
export const Acasa = () => {
  return (
    <div>
      <Section className='pages' id='acasa'>
        <div className='homeContainer'>
          <div className='leftPart'>
            <h2>AVEM SOLUTIA!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              elementum et felis non commodo. Pellentesque in mollis arcu.
              Integer nec.Pellentesque in mollis arcu. Integer nec.
            </p>
            <div>
              <Button text='SUNA ACUM!' className='btn-primary-lg' />
              <Button text='SERVICII' className='btn-secondary-lg' />
            </div>
          </div>
          <div className='rightPart'>
            <img src={weldingMask} alt='' id='weldingMask' />
          </div>
        </div>
      </Section>
    </div>
  );
};
