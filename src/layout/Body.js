import React from 'react';
import { Section } from 'react-scroll-section';

export const Body = () => {
  return (
    <div>
      <Section className='pages' id='acasa'>
        MY HOME
      </Section>
      <Section className='pages' id='servicii'>
        ABOUT ME
      </Section>
      <Section className='pages' id='contact'>
        Call me maybe
      </Section>
    </div>
  );
};

export default Body;
