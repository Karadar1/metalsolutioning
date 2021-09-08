import React from "react";
import { Section } from "react-scroll-section";
import clock from "../assets/clock.svg";
import address from "../assets/location.svg";
import email from "../assets/mail.svg";
import phone from "../assets/phone-call.svg";
export const Contact = () => {
  return (
    <div>
      <Section className="pages" id="contact">
        <h1 className="sectionTitles">Contact</h1>
        <div className="mapAndContact">
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5570.341728577532!2d21.23179527440398!3d45.7276681052471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455dba29b2cce5%3A0x2f7f224068e4db6b!2sStrada%20Ludwig%20von%20Ybl%2C%20Timi%C8%99oara!5e0!3m2!1sro!2sro!4v1629558048245!5m2!1sro!2sro"
            width={400}
            height={300}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="googleMap"
          />

          <div id="infoLists">
            <ul>
              <h3 className="headTitles">Contacteaza-ne</h3>
              <li className="contactInfo">
                <img src={email} alt="" className="listIcons" />{" "}
                lazocmsi@gmail.com
              </li>

              <li className="contactInfo">
                <img src={phone} alt="" className="listIcons" />
                0746190157
              </li>

              <li className="contactInfo">
                <img src={address} alt="" className="listIcons" /> str. Ludwig
                von Ybl nr.37
              </li>
            </ul>
            <ul>
              <h3 className="headTitles">Orar</h3>

              <li className="contactInfo">
                <img src={clock} alt="" className="listIcons" /> 8:00-16:00 L-V
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};
