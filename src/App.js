import './App.css';
import InstaFeeds from './InstaFeeds';
import IntroContainer from './IntroContainer';
import Gallery from './Gallery';
import Contact from './Contact';
import Services from './Services';


function App() {
  return (
    <div className="container">
      <Gallery/>
      <IntroContainer/>
      <InstaFeeds token={process.env.TOKEN} limit={12}/>
      <Contact/>
      <Services/>
    </div>
  );
}

export default App;
