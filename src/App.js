import './App.css';
import IntroContainer from './IntroContainer';
import Gallery from './Gallery';
import Contact from './Contact';
import Services from './Services';


function App() {
  return (
    <div className="container">
      <IntroContainer/>
      <Contact/>
      <Gallery/>
      <Services/>
    </div>
  );
}

export default App;
