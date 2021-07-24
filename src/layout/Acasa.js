import React from 'react';
import { Section } from 'react-scroll-section';
import weldingMask from '../assets/Group 9.svg';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'reactstrap';

export const Acasa = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });
  return (
    <div>
      <Section className='pages' id='acasa'>
        {isDesktopOrLaptop ? (
          <>
            <div className='homeContainer'>
              <div className='leftPart'>
                <h1 className='homeTitle'>AVEM SOLUTIA!</h1>
                <p className='homeParagraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur elementum et felis non commodo. Pellentesque in
                  mollis arcu. Integer nec.Pellentesque in mollis arcu. Integer
                  nec.
                </p>
                <div className='homeButtons'>
                  <Button text='SUNA ACUM!' className='btn-primary-lg' />
                  <Button text='SERVICII' className='btn-secondary-lg' />
                </div>
              </div>
              <div className='rightPart'>
                <img src={weldingMask} alt='' id='weldingMask' />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='homeContainer'>
              <h1 className='homeTitle'>AVEM SOLUTIA!</h1>
              <div className='paragraphContainer'>
                <p className='homeParagraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur elementum et felis non commodo. Pellentesque in
                  mollis arcu. Integer nec.Pellentesque in mollis arcu. Integer
                  nec.
                </p>
              </div>
              <div className='homeButtons'>
                <Button
                  style={{ background: '#ff8900', color: '#333333' }}
                  active
                  href='tel:0773712357'
                  className='btnLarge'
                  size='lg'
                >
                  {/* <a href='tel:0773712357' id='phoneLink'> */}
                  Suna Acum
                  {/* </a> */}
                </Button>
                <a href='#servicii'>
                  <Button
                    outline
                    color='secondary'
                    className='btnLarge'
                    size='lg'
                  >
                    Servicii
                  </Button>
                </a>
              </div>
            </div>
          </>
        )}
      </Section>
    </div>
  );
};
