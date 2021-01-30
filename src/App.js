import './App.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Col, Row, Container} from 'react-bootstrap'

import CitySelector from './components/citySelector'
import WeatherList from './components/weatherList';
import {API_KEY, API_BASE_URL} from './apis/config'
import UseFetch from './hooks/useFetch';


function App() {
  const {data, error, isLoading, setUrl, favorites, setFavorites} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data} handleFavorites={ (city) => {
      setFavorites([...favorites, city]);
    }} />
  };

  return (
    <Container className="App">
      <Container id="center">
        <Row>
            <Col sm={6} id="searchBar">
              <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)} />
            </Col>
            <Col sm={6}>
              {data && <WeatherList weathers={data} handleFavorites={ (city) => {
                setFavorites([...favorites, city]);
              }} />}
            </Col>
          </Row>
        </Container>
    </Container>
  );
}

export default App;
