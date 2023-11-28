
import { galleryObj } from "./data";

const Gallery = ({setModal, setPicture, modal, picture}) =>{

    // const divClickHandler = () =>{
    //     setModal(true)
    //     setPicture(image)
    // }
     
    return(

        <div className="gallery-container">
            <div className="slider-track" >
                    {galleryObj.map((image, i) => (
                        <div className="slide" onClick={()=>{setModal(true)
                         setPicture(image.image)}}>
                        <img
                            key={i}
                            src={image.image}
                            className= 'image'
                            alt={image.alt}
                            style={{
                                'height': '15vh',
                                'width': '15vw',
                            }}
                            onClick={()=>{setModal(true)
                                 setPicture(image.image)}}
                        />
                        </div>
                    ))}
            </div>
            <div className="gallery-text">
                Tap image to enlarge
            </div>
        </div>
    
       
    )
}

export default Gallery;