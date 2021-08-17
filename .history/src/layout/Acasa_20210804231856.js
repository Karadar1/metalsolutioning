import { useEffect, useState, useContext } from "react";
import { Section } from "react-scroll-section";
import weldingMask from "../assets/Group 9.svg";
import { useMediaQuery } from "react-responsive";
import { Button } from "reactstrap";
import { addImgState } from "../utils/AcasaAnimations";
import { wedlingMaskState } from "../App";

export const Acasa = () => {
    const { imgState, setImgState } = useContext(wedlingMaskState);
    // const [imgState, setImgState] = useState('firstPosition');
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)"
    });

    const weldingAnimation = () => {
        addImgState(setImgState);
    };

    useEffect(() => {
        weldingAnimation();
    }, []);

    return (
        <div>
            <Section className="pages acasa" id="acasa">
                {isDesktopOrLaptop ? (
                    <>
                        <div className="homeContainer">
                            <div className="leftPart">
                                <h1 className="homeTitle">AVEM SOLUTIA!</h1>
                                <p className="homeParagraph">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur elementum et
                                    felis non commodo. Pellentesque in mollis
                                    arcu. Integer nec.Pellentesque in mollis
                                    arcu. Integer nec.
                                </p>
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
                                <img
                                    src={weldingMask}
                                    className={imgState}
                                    alt=""
                                    id="weldingMask"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="homeContainer">
                            <h1 className="homeTitle">AVEM SOLUTIA!</h1>
                            <div className="paragraphContainer">
                                <p className="homeParagraph">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur elementum et
                                    felis non commodo. Pellentesque in mollis
                                    arcu. Integer nec.Pellentesque in mollis
                                    arcu. Integer nec.
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
                                    <Button
                                        outline
                                        color="secondary"
                                        className="btnLarge"
                                        size="lg"
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
