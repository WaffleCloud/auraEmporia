import cellPhone from './cellPhone.png'
import email from './email.png'

const Contact = () => {
    return(
        <div className="contact-container box" style={{'font-size':'30px'}}>
            <div>Book Now</div><br/>
            <div><img style={{'max-height': '20px', 'max-width': '20px'}}src={cellPhone} alt="cell phone"></img> 442-400-0961</div>
            <div><img style={{'max-height': '20px', 'max-width': '20px'}}src={email} alt="email"></img>CirqueDeDelire@gmail.com</div> 
            <div>Instagram</div>
            <iframe 
            title='ig feed'
            src='https://www.juicer.io/api/feeds/cirquededelire/iframe' 
            frameborder='0' 
            width='300' 
            height='500' 
            style={{
                'display':'block',
                'margin':'0 auto;'}}>
            </iframe>
            {/* <iframe 
            title='ig feed'
            src='https://www.juicer.io/api/feeds/cirquededelire/iframe' 
            frameborder='0' 
            width='700' 
            height='700' 
            style={{
                'display':'flex',
                'margin':'30px',
                'overflow-y': 'scroll'
                }}></iframe> */}
        </div>
    )
}

export default Contact;