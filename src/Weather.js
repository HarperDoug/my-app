import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";


function Weather(props){
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        setWeatherData({
            ready: true,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            city: response.data.city,
            description: response.data.condition.description,
            icon: response.data.condition.icon
        });  
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
        let apiURL =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse)
    }
    if (weatherData.ready) {
        return(
            <div className = "Weather">
                <form onSubmit={handleSubmit} className="search-form">
                    <div className = "row">
                        <div className = "col-9">
                            <input type="search" onChange={handleCityChange} placeholder="Enter a city..." autoFocus = "on" required className="form-control"/>
                        </div>
                        <div className = "col-3">
                            <input type="submit" value="Search"className="search-form-button"></input>
                        </div>
                    </div>
                </form>
                <WeatherInfo data = {weatherData} />

            </div>
        );

    } else {
        search();
        return "Loading...";

    }
}
export default Weather;
