import React from 'react';



import '../assets/styles/App.scss';
import Weatheinfo from '../components/Weatheinfo';
import WeatherForm from '../components/WeatherForm';

const App = () =>(
    <div className='App'>
        <div className='container p-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <WeatherForm/>
                    <Weatheinfo/>

                </div>

            </div>
        </div>
        
    </div>
);

export default App;