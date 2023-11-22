import './App.css';
import IntroContainer from './IntroContainer';
import Gallery from './Gallery';
import Contact from './Contact';
import Services from './Services';


function App() {
  return (
    <div className="container">
      <Gallery/>
      <IntroContainer/>
      <Contact/>
      <Services/>
    </div>
  );
}

export default App;
