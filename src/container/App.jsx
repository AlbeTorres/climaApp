import React from 'react';
import Weatheinfo from '../components/Weatheinfo';
import WeatherForm from '../components/WeatherForm';



const getWeather= (e) =>{
    e.preventDefault();

    const {city,country}= e.target.elements;
    const countryValue = country.value;
    const cityValue = city.value;

    console.log(`${cityValue} ${countryValue} `)
}

const App = () =>(
    <div className='App'>
        <div className='container p-4'>
            <div className='row'>
                <div className='col-md-4 mx-auto'>
                    <WeatherForm getWeather={getWeather}/>
                    <Weatheinfo/>

                </div>

            </div>
        </div>
        
    </div>
);

export default App;