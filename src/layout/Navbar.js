import React from 'react';
import { useScrollSection } from 'react-scroll-section';

export const Navbar = () => {
  const acasaSection = useScrollSection('acasa');
  const contactSection = useScrollSection('contact');
  const serviciiSection = useScrollSection('servicii');

  return (
    <nav>
      <a href='/' className='logo'>
        metalsolutioning
      </a>

      <ul className='nav_links'>
        <li onClick={acasaSection.onClick}>acasa</li>
        <li onClick={serviciiSection.onClick}>servicii</li>
        <li onClick={contactSection.onClick}>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
