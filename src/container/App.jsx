import React from 'react';
import { useEffect } from 'react';
import Weatheinfo from '../components/Weatheinfo';
import WeatherForm from '../components/WeatherForm';
import { WEATHER_KEY } from '../key';





const App = () =>{
    const API_URL=`http://api.openweathermap.org/data/2.5/weather?q=Cuba&appid=${WEATHER_KEY}`

    const getWeather= (e) =>{
        e.preventDefault();
    
        const {city,country}= e.target.elements;
        const countryValue = country.value;
        const cityValue = city.value;
    
        const API_URL=`http://api.openweathermap.org/data/2.5/weather?q=${countryValue}&appid=${WEATHER_KEY}`
    
        console.log(`${cityValue} ${countryValue} ${API_URL}`)
    }

    useEffect(()=>{
        const fetchWeather =async()=>{

            const response= await fetch(API_URL)
            const data = await response.json()

            console.log(data)
        }

        fetchWeather()
    },[])
    

    return(
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
}
    

export default App;