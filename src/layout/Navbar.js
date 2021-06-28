import React from 'react';
import { useScrollSection } from 'react-scroll-section';
import logo from '../assets/logo/logo.svg';
export const Navbar = () => {
  const acasaSection = useScrollSection('acasa');
  const contactSection = useScrollSection('contact');
  const serviciiSection = useScrollSection('servicii');
  const portofoliuSection = useScrollSection('portofoliu');

  return (
    <nav>
      <a href='/' className='logo'>
        <img src={logo} alt={logo} id='logo' />
      </a>

      <ul className='nav_links'>
        <li
          onClick={acasaSection.onClick}
          // selected={acasaSection.selected}
          className={`listItem ${
            acasaSection.selected ? 'listItemActive' : ''
          }`}
        >
          acasa
        </li>
        <li
          onClick={serviciiSection.onClick}
          // selected={serviciiSection.selected}
          className={`listItem ${
            serviciiSection.selected ? 'listItemActive' : ''
          }`}
        >
          servicii
        </li>

        <li
          onClick={portofoliuSection.onClick}
          // selected={acasaSection.selected}
          className={`listItem ${
            portofoliuSection.selected ? 'listItemActive' : ''
          }`}
        >
          portofoliu
        </li>

        <li
          onClick={contactSection.onClick}
          // selected={contactSection.selected}
          className={`listItem ${
            contactSection.selected ? 'listItemActive' : ''
          }`}
        >
          contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
