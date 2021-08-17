import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerHeader">
          <h1>MetalSolutioning</h1>
        </div>

        <div className="footerMainBody">
          <ul>
            {" "}
            <h5>Despre noi</h5>
            <li>
              <a href="#acasa">Echipa noastra</a>
            </li>
          </ul>
          <ul>
            <h5>Informatii</h5>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact">Locatie</a>
            </li>
          </ul>
          <ul>
            {" "}
            <h5>Servicii</h5>
            <li>
              <a href="#servicii">Restautarari</a>
            </li>
            <li>
              <a href="#servicii">Confectii metalice</a>
            </li>
            <li>
              <a href="#servicii">Produse in serie</a>
            </li>
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
