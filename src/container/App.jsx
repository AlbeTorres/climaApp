import React,{useState, useEffect} from 'react';
import Weatheinfo from '../components/Weatheinfo';
import WeatherForm from '../components/WeatherForm';
import { WEATHER_KEY } from '../key';






const App = () =>{

    const [ weather, setWeather ] = useState(
                                            {  
                                                temperature:'',
                                                description:'',
                                                humidity:'',
                                                wind_speed:'',
                                                city:'',
                                                country:'',
                                                error:''   
                                            }
                                            );


    const getWeather= async (e) =>{

        e.preventDefault();
    
        const {city,country}= e.target.elements;
        const countryValue = country.value;
        const cityValue = city.value;

        if(cityValue){

            const API_URL=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
        
            console.log(`${cityValue} ${countryValue} ${API_URL}`);
    
            const newWeather= await fetchWeather(API_URL);
            
            setWeather(newWeather);

        }else{

            setWeather({error:'Por favor inserte una ciudad válida'})
        }
    

        
        
        
    }

    const fetchWeather =async(API_URL)=>{

        const response= await fetch(API_URL)
        const data = await response.json()

        
        const axuWeather=  {
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            }

            

        return axuWeather;
        
    }

    
    return(
        <div className='App'>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <WeatherForm getWeather={getWeather}/>
                        <Weatheinfo weather={weather}/>
    
                    </div>
    
                </div>
            </div>
            
        </div>
    );
}
    

export default App;