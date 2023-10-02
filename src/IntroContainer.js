import './App.css';

const introContainer = () => {
    return(
        <div className="intro-container box">
            <p style={{
                'font-size': '60px', 
                'fontFamily':'Aladin, cursive', 
                'color':'white',
                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': 'red'
                 }}>Aura Emporia</p>
            Handcrafted Art Services<br/>
            by<br/>
            <p style={{'font-size':'30px'}}>Marisol Israeli Gomez</p>
        </div>
    )
}

export default introContainer;