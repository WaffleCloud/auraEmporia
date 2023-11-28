import {useState} from 'react'
import './App.css'
import IntroContainer from './IntroContainer'
import Gallery from './Gallery'
import Contact from './Contact'
import Services from './Services'
import Bg from './Background'
import Modal from './Modal';



const App = () => {
  const[modal, setModal] = useState(false)
  const[picture, setPicture] = useState(null)

  return (
    <div className="container">
      <Gallery
      modal={modal}
      setModal={setModal}
      picture={picture}
      setPicture={setPicture}
      />
      <IntroContainer/>
      <Contact/>
      <Services/>
      <Bg/>
      <Modal
      modal={modal}
      setModal={setModal}
      picture={picture}
      setPicture={setPicture}
      />
    </div>
  );
}

export default App;
