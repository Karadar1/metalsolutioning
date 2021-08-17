import { createContext, useState } from "react";
import "./style.css";
import { NavbarEx } from "./layout/NavbarEx";
import Body from "./layout/Body";
import { ScrollingProvider } from "react-scroll-section";

export const weldingMaskState = createContext();

function App() {
  const [imgState, setImgState] = useState("firstPosition");

  return (
    <div className="App">
      <ScrollingProvider>
        <weldingMaskState.Provider value={{ imgState, setImgState }}>
          <NavbarEx />
          <Body />
        </weldingMaskState.Provider>
      </ScrollingProvider>
    </div>
  );
}

export default App;
