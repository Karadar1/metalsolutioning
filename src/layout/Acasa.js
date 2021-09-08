import { Section } from "react-scroll-section";
import weldingNoLight from "../assets/weldingNoLight.svg";
import { Button } from "reactstrap";

export const Acasa = () => {
  return (
    <div>
      <Section className="pages acasa" id="acasa">
        <div>
          <>
            <div className="homeContainer" id="acasa">
              <div className="leftPart">
                <h1 className="homeTitle">AVEM SOLUTIA!</h1>
                <p className="homeParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur elementum et felis non commodo. Pellentesque in
                  mollis arcu. Integer nec.Pellentesque in mollis arcu. Integer
                  nec.
                </p>
                <div className="homeButtons">
                  <Button
                    style={{
                      padding: "12px",
                      fontSize: "18px",
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
                    <Button
                      outline
                      color="secondary"
                      className="btnLarge"
                      size="lg"
                    >
                      Servicii
                    </Button>
                  </a>
                  {/* <Button
                    text='IMG'
                    onClick={() => {
                      addImgState(setImgState);
                    }}
                  /> */}
                </div>
              </div>
              <div className="rightPart">
                <img src={weldingNoLight} alt="" id="weldingMask" />
              </div>
            </div>
          </>
        </div>
      </Section>
    </div>
  );
};
