import './App.css';
import IntroContainer from './IntroContainer';
import Gallery from './Gallery';
import Contact from './Contact';
import Services from './Services';
import Bg from './Background';


function App() {
  return (
    <div className="container">
      <Gallery/>
      <IntroContainer/>
      <Contact/>
      <Services/>
      <Bg/>
    </div>
  );
}

export default App;
