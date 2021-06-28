import './App.css';
import Navbar from './layout/Navbar';
import Body from './layout/Body';
import Footer from './layout/Footer';
import { ScrollingProvider } from 'react-scroll-section';

function App() {
  return (
    <div className='App'>
      <ScrollingProvider>
        <Navbar />
        <Body />
      </ScrollingProvider>
      <Footer />
    </div>
  );
}

export default App;
