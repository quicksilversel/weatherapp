import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

const weatherCard = ({temp_max, temp_min, temp, dt, main, icon, name}) => {
    var weatherImage = "";
    const date = new Date(dt);
    // convert icon to custom image 
    switch(icon){
        case "01d": 
        case "01n":
            weatherImage = "/sunny.jpg";
            break;
        case "02d": 
        case "02n": 
        case "03d": 
        case "03n": 
        case "04d": 
        case "04n": 
        case "50d": 
        case "50n":
            weatherImage = "/cloudy.jpg"
            break;
        case "13d": 
        case "13n":
            weatherImage = "/snow.jpg"
            break;
        case "09d": 
        case "09n": 
        case "10d": 
        case "10n":
            weatherImage = "/rain.jpg"
            break;
        case "11d": 
        case "11n":
            weatherImage = "/thunder.jpg"
            break;
        default:
            console.log(`could not retreive ${icon}`)
            break;
    }
    return(
        <Card border="light">
                <Card.Img style={{width: "100%"}} src={weatherImage} />
                <Card.ImgOverlay>
                    <div id="city">
                        <Card.Title style={{fontSize:"2em"}}>{name}</Card.Title>
                        <p style={{fontSize:"1em"}}>
                        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                        </p>
                        <p style={{fontSize:"1em"}}>{main}</p>
                    </div>
                    <div id="temp">
                        <p style={{fontSize:"2em"}}>{temp}℃</p>
                        <p style={{fontSize:"1em"}}>Low: {temp_min}℃ &emsp; High: {temp_max}℃</p>
                    </div>
                </Card.ImgOverlay>
        </Card>
    );
};

export default weatherCard