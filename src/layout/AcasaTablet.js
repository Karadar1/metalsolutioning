import React from "react";
import { Button } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import weldingNoLight from "../assets/weldingNoLight.svg";
export const AcasaTablet = () => {
  const isTablet = useMediaQuery({ query: "(min-device-width: 768px)" });

  return (
    <div>
      <>
        <div className="homeContainer" id="acasa">
          <h1 className="homeTitle">AVEM SOLUTIA!</h1>
          <div className="paragraphContainer">
            <p className="homeParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              elementum et felis non commodo. Pellentesque in mollis arcu.
              Integer nec.Pellentesque in mollis arcu. Integer nec.
            </p>
          </div>
          <div className="homeButtons">
            <Button
              style={{
                background: "#ff8900",
                color: "#333333"
              }}
              active
              href="tel:0773712357"
              className="btnLarge"
              size="lg"
            >
              Suna Acum
            </Button>
            <a href="#servicii">
              <Button outline color="secondary" className="btnLarge" size="lg">
                Servicii
              </Button>
            </a>
          </div>
          {isTablet ? (
            <img
              src={weldingNoLight}
              className="weldingMask"
              alt=""
              id="weldingMaskTablet"
            />
          ) : null}
        </div>
      </>
    </div>
  );
};
