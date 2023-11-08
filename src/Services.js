import React from 'react';
import { useState } from 'react';
import ArtServices from './ArtServicesModal';
import EventServices from './EventServicesModal';


const Services = () => {

    const [artServicesModal, setArtServicesModal] = useState(false);
    const [eventServicesModal, setEventServicesModal] = useState(false);

    const artServicesClickHandler = () => {
        setArtServicesModal(!artServicesModal)
    }

    const eventServicesClickHandler = () => {
        setEventServicesModal(!eventServicesModal)
    }

    return(
        <div className="services-container">
            <div onClick={artServicesClickHandler}>{artServicesModal && <ArtServices/>}</div>
            <div onClick={eventServicesClickHandler}>{eventServicesModal && <EventServices/>}</div>
            <div className="art-services-container small-box" onClick={artServicesClickHandler}>
               <p style={{fontSize:"20px"}}>Balloons</p>
               <br/>
               <p style={{fontSize:"30px"}}></p> 
                
            </div>
            <div className="event-services-container small-box" onClick={eventServicesClickHandler}>
              <p style={{fontSize:"20px"}}>Fire/LED</p> 
              <br/>  
              <p style={{fontSize:"30px"}}></p>
            </div>
        </div>
    )
}



export default Services;

