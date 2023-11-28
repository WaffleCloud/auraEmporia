
import { galleryObj } from "./data";

const Gallery = () =>{
     
    return(

        <div className="gallery-container">
            <div className="slider-track">
                    {galleryObj.map((image, i) => (
                        <div className="slide">
                        <img
                            key={i}
                            src={image.image}
                            className= 'image'
                            alt={image.alt}
                            style={{
                                'height': '15vh',
                                'width': '15vw',
                                'margin': '1rem',
                            }}
                        />
                        </div>
                    ))}
            </div>
        </div>
    
       
    )
}

export default Gallery;