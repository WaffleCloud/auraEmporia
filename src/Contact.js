import cellPhone from './cellPhone.png'
import email from './email.png'

const Contact = () => {
    return(
        <div className="contact-container box">
            <div style={{'font-size':'30px'}}>Book Now</div><br/>
            <div><img style={{'max-height': '20px', 'max-width': '20px'}}src={cellPhone} alt="cell phone"></img> 442-234-8030</div><br/>
            <div><img style={{'max-height': '20px', 'max-width': '20px'}}src={email} alt="email"></img> Marisol@art.com</div> 

        </div>
    )
}

export default Contact;