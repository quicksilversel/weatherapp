import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col, FormControl, Button} from 'react-bootstrap';


const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
        <>
          <Row>
            <Col>
              <h1>Weather Finder</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className="text-center">
              <FormControl
                placeholder="type a city"
                onChange={(event) => setCity(event.target.value)}
                value={city}
              />
            </Col>
            </Row>
          <Row>
            <Col>
                <Button onClick={() => onSearch(city)}>Check Weather</Button>            
            </Col>
          </Row>
        </>
      );
  };
  
  export default CitySelector;