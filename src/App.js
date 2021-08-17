import "./index.css";
import { NavbarEx } from "./layout/NavbarEx";
import Body from "./layout/Body";
import { ScrollingProvider } from "react-scroll-section";

function App() {
  return (
    <div className="App">
      <ScrollingProvider>
        <NavbarEx />
        <Body />
      </ScrollingProvider>
    </div>
  );
}

export default App;
