import React from "react";
import { Section } from "react-scroll-section";
import { useMediaQuery } from "react-responsive";
import clock from "../assets/clock.svg";
import address from "../assets/location.svg";
import email from "../assets/mail.svg";
import phone from "../assets/phone-call.svg";
export const Contact = () => {
  const isTablet = useMediaQuery({ query: "(max-device-width: 768px)" });
  return (
    <div>
      <Section className="pages" id="contact">
        {/* <div className='filler'></div> */}
        <h1 className="sectionTitles">Contact</h1>
        <div className="mapAndContact">
          {isTablet ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2785.1029828940123!2d21.2478989!3d45.7290295!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1622796689239!5m2!1sro!2sro"
              width={400}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="googleMap"
            />
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.141260692526!2d21.246429015825935!3d45.728261823805056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455dc2fe699fd7%3A0xebbb4adb2c0d270d!2sStrada%20Boema%203%2C%20Timi%C8%99oara%20307221!5e0!3m2!1sro!2sro!4v1622729551987!5m2!1sro!2sro"
              width={800}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="googleMap"
            />
          )}

          <div id="infoLists">
            <ul>
              <h3 className="headTitles">Contacteaza-ne</h3>
              <li className="contactInfo">
                <img src={phone} alt="" className="listIcons" />
                (+40)-712312399
              </li>

              <li className="contactInfo">
                <img src={email} alt="" className="listIcons" />{" "}
                mircea@yahoo.com
              </li>

              <li className="contactInfo">
                <img src={address} alt="" className="listIcons" /> str.Pirvan
                nr.3
              </li>
            </ul>
            <ul>
              <h3 className="headTitles">Orar</h3>

              <li className="contactInfo">
                <img src={clock} alt="" className="listIcons" /> 9:00-18:00 L-V
              </li>
              <li className="contactInfo">
                <div className="listIcons"></div> 9:00-14:00 S
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};
