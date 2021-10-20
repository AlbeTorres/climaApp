import React from 'react'

const WeatherForm = () => {
    return (
        <div className='card card-body'>
            <form action=''>
                <div className='mb-3'>
                    <input type='text' name='city' placeholder='Nombre de la ciudad' className='form-control' autoFocus />
                </div>
                <div className='mb-3'>
                    <input type='text' name='country' placeholder='Nombre del país' className='form-control' autoFocus />
                </div>
                <div className='d-grid gap-1'>
                <button className='btn btn-success btn-block'>Obtener Clima</button>

                </div>

            </form>
            
        </div>
    )
}

export default WeatherForm;
