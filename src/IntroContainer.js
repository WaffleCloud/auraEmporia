import './App.scss';

const introContainer = () => {
    return(
        <div className="intro-container box">
            <p style={{
                'font-size': '60px', 
                'fontFamily':'Aladin, cursive', 
                'color':'white',
                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': 'red'
                 }}>Cirque De Délire</p>
            Balloon Art  -  LED Gogo   -   Fire Dancing<br/>
            by<br/>
            <p style={{'font-size':'30px'}}>Rilo DeAnn</p>
        </div>
    )
}

export default introContainer;