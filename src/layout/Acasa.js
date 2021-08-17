import { Section } from "react-scroll-section";
import { useMediaQuery } from "react-responsive";
import { AcasaDesktop } from "./AcasaDesktop";
import { AcasaTablet } from "./AcasaTablet";

export const Acasa = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)"
  });

  return (
    <div>
      <Section className="pages acasa" id="acasa">
        {isDesktopOrLaptop ? <AcasaDesktop /> : <AcasaTablet />}
      </Section>
    </div>
  );
};
