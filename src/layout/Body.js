import React, { useState } from "react";
import { Servicii } from "./Servicii";
import { Acasa } from "./Acasa";
import { Contact } from "./Contact";
import { Portofoliu } from "./Portofoliu";
import Footer from "./Footer";
export const SlideContext = React.createContext();

export const Body = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div>
      <div className="Sections">
        <Acasa />
        <SlideContext.Provider value={{ slideIndex, setSlideIndex }}>
          <Servicii />
          <Portofoliu />
        </SlideContext.Provider>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
