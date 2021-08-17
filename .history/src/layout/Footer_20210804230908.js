import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footerHeader'>
          <h1>MetalSolutioning</h1>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>

        <div className='footerMainBody'>
          <ul>
            {' '}
            <h5>Despre noi</h5>
            <li>Echipa Noastra</li>
          </ul>
          <ul>
            <h5>Informatii</h5>
            <li>Contact</li>
            <li>Locatie</li>
          </ul>
          <ul>
            {' '}
            <h5>Servicii</h5>
            <li>Restautarari</li>
            <li>Confectii metalice</li>
            <li>Produse in serie</li>
          </ul>
          <ul>
            <h5>Orar</h5>
            <li>9:00-18:00 L-V</li>
            <li>9:00-14:00 S</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
