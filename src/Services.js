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
            <div className="art-services-container box" onClick={artServicesClickHandler}>
               <p style={{fontSize:"20px"}}>Art Services</p>
               <br/>
               <p style={{fontSize:"30px"}}>Rainbow Aura Emporia</p> 
                
            </div>
            <div className="event-services-container box" onClick={eventServicesClickHandler}>
              <p style={{fontSize:"20px"}}>Event Services</p> 
              <br/>  
              <p style={{fontSize:"30px"}}>Rainbow Aura Party</p>
            </div>
        </div>
    )
}



export default Services;

