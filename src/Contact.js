import cellPhone from './cellPhone.png'
import email from './email.png'

const Contact = () => {
    return(
        <div className="contact-container box">
            <div style={{'font-size':'30px'}}>Book Now</div><br/>
            <div><img style={{'max-height': '20px', 'max-width': '20px'}}src={cellPhone} alt="cell phone"></img> 442-400-0961</div><br/>
            <div><img style={{'max-height': '20px', 'max-width': '20px'}}src={email} alt="email"></img>CiqueDeDelire@gmail.com</div> 
            <iframe 
            title="ig feed"
            src='https://www.juicer.io/api/feeds/cirquededelire/iframe' 
            frameborder='0' 
            width='500' 
            height='500' 
            style={{'display':'flex', 'margin':'30px'}}></iframe>
        </div>
    )
}

export default Contact;