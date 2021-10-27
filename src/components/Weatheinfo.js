import React from 'react'

const Weatheinfo = ({weather}) => {
    return (
        <div>


        {
            weather.error && 
            <div className='alert alert-danger'>
            <p>weather.error</p>

            </div>
        }
        <div className='card card-body'>
            <h4>Localización:  {weather.city},{weather.country} </h4>
            <h4>Temperatura:  {weather.temperature}*C </h4>
            <h4>Descripción:  {weather.description} </h4>
            <h4>Humedad:  {weather.humidity} </h4>
            <h4>Vientos:  {weather.wind_speed} </h4>
        </div>


        </div>
    )
}

export default Weatheinfo
