import { useContext } from "react";
import { Card } from "../components/Card";
import { Button } from "reactstrap";
import wrenchIcon from "../assets/wrench.svg";
import bendingIcon from "../assets/bending.svg";
import weldingIcon from "../assets/welding.svg";
import { Section } from "react-scroll-section";
import { SlideContext } from "./Body";

export const Servicii = () => {
  const { setSlideIndex } = useContext(SlideContext);
  const goToSlide = (slide) => {
    setSlideIndex(slide);
  };

  return (
    <Section className="pages" id="servicii">
      <h1 className="sectionTitles">Servicii</h1>
      <div className="cardsDiv">
        <Card
          title="Confectii Metalice"
          svg={weldingIcon}
          text="lorem!"
          actions={
            <a href="#portofoliu">
              <Button
                color="secondary"
                className="hoveredButton"
                onClick={() => goToSlide(0)}
              >
                Portfoliu
              </Button>
            </a>
          }
        />

        <Card
          title="Produse in serie"
          svg={bendingIcon}
          text="Etiam eget varius tortor, in feugiat nulla. Aliquam nec sem mi. Nulla faucibus blandit felis vel pellentesque. Donec id viverra felis."
          actions={
            <a href="#portofoliu">
              <Button
                color="secondary"
                className="hoveredButton"
                onClick={() => goToSlide(11)}
              >
                Portfoliu
              </Button>
            </a>
          }
        />

        <Card
          title="Restaurari"
          svg={wrenchIcon}
          text="lorem!"
          actions={
            <a href="#portofoliu">
              <Button
                color="secondary"
                className="hoveredButton"
                onClick={() => goToSlide(14)}
              >
                Portfoliu
              </Button>
            </a>
          }
        />
      </div>
    </Section>
  );
};
