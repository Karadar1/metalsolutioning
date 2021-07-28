import { createContext, useState } from 'react';
import './style.css';
import Navbar from './layout/Navbar';
import { NavbarEx } from './layout/NavbarEx';
import Body from './layout/Body';
import { ScrollingProvider } from 'react-scroll-section';

export const wedlingMaskState = createContext();

function App() {
  const [imgState, setImgState] = useState('firstPosition');

  return (
    <div className='App'>
      <ScrollingProvider>
        <wedlingMaskState.Provider value={{ imgState, setImgState }}>
          <NavbarEx />
          <Body />
        </wedlingMaskState.Provider>
      </ScrollingProvider>
    </div>
  );
}

export default App;
