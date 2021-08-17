import { Card } from "../components/Card";
import { Button } from "reactstrap";
import wrenchIcon from "../assets/wrench.svg";
import bendingIcon from "../assets/bending.svg";
import weldingIcon from "../assets/welding.svg";
import { Section } from "react-scroll-section";

export const Service = () => {
  return (
    <Section className="pages" id="servicii">
      <h1 className="sectionTitles">Servicii</h1>
      <div className="cardsDiv">
        <Card
          title="Restaurari"
          svg={wrenchIcon}
          text="lorem!"
          actions={
            <Button color="secondary" className="hoveredButton">
              Portfoliu
            </Button>
          }
        />
        <Card
          title="Confectii Metalice"
          svg={weldingIcon}
          text="lorem!"
          actions={
            <Button color="secondary" className="hoveredButton">
              Portfoliu
            </Button>
          }
        />
        <Card
          title="Produse in serie"
          svg={bendingIcon}
          text="Etiam eget varius tortor, in feugiat nulla. Aliquam nec sem mi. Nulla faucibus blandit felis vel pellentesque. Donec id viverra felis."
          actions={
            <>
              <div className="cardDoubleButtons">
                <Button color="secondary" className="hoveredButton">
                  Portfoliu
                </Button>

                {/* <Button text='Galerie' className='btn-primary-sm' />{' '}
                <Button text='Parteneri' className='btn-secondary-sm' /> */}
              </div>
            </>
          }
        />
      </div>
    </Section>
  );
};
