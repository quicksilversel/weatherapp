import React from 'react'
import { CardColumns, Button, Row } from 'react-bootstrap'
import WeatherCard from './weatherCard'
import AddFavorite from './addFavorite'

const WeatherList = (props) => {
        const { dt, main, weather, name } = props.weathers;
    return (
        <div key={dt} >
            <WeatherCard 
            temp_max={main.temp_max} 
            temp_min={main.temp_min} 
            temp = {main.temp}
            dt={dt * 1000} 
            main={weather[0].main} 
            icon={weather[0].icon} 
            name = {name}
            />
        </div>
    )
}
/* <Button onClick={() => props.handleFavorites(name)}>
<AddFavorite/>
</Button> */
export default WeatherList;