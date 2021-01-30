import React from 'react'
import { CardColumns, Row } from 'react-bootstrap'
import WeatherList from './weatherList'
import {API_KEY, API_BASE_URL} from '.././apis/config'

// gets an array of string containing city name as input
const FavoritesList = (props) => {
    const {favorites} = props

    return (
        <Row id="favCities">
            {favorites.map( city => {<p>{city}</p>})}
        </Row>
    )
}

export default FavoritesList;