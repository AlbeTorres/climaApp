import React from 'react'

const Weatheinfo = ({weather}) => {
    return (
        <div>


        {
            weather.error && 
            <div className='alert alert-danger'>
            <p>{weather.error}</p>

            </div>
        }
        
        {
            weather.temperature ?
            <div className='card card-body'>
                <h6>Localización:  {weather.city},{weather.country} </h6>
                <h6>Temperatura:  {weather.temperature}*C </h6>
                <h6>Descripción:  {weather.description} </h6>
                <h6>Humedad:  {weather.humidity} </h6>
                <h6>Vientos:  {weather.wind_speed} </h6>
            </div>
            :
            <div className='card card-body'>
                <h6>Not request yet</h6>

            </div>
        }


        </div>
    )
}

export default Weatheinfo
