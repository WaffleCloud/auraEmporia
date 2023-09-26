import { useState } from "react";
import { galleryObj } from "./data";

const Gallery = () =>{
     
    return(

        <div className="gallery-container box">
            <div className="slider-track">
                    {galleryObj.map((image, i) => (
                        <div className="slide">
                        <img
                            key={i}
                            src={image.image}
                            className= 'image'
                            alt={image.alt}
                        />
                        </div>
                    ))}
            </div>
        </div>
    
       
    )
}

export default Gallery;