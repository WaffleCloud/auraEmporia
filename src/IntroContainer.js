import './App.css';

const IntroContainer = () => {
    return(
        <div className="intro-container box">
            <p style={{
                'font-size': '60px', 
                'fontFamily':'Aladin, cursive', 
                'color':'rgb(199,21,133)',
                '-webkit-text-stroke-width': '3px',
                '-webkit-text-stroke-color': 'rgb(64,224,208)',
                 }}>Cirque De Délire</p>
            Balloon Art  -  LED Gogo   -   Fire Dancing<br/>
            by<br/>
            <p style={{'font-size':'30px'}}>Rilo DeAnn</p>
        </div>
    )
}

export default IntroContainer;