import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

function Weather(){
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: response.data.time,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            city: response.data.city,
            description: response.data.condition.description,
            iconURL: response.data.condition.icon_url
        });

    }
    if (weatherData.ready) {
        return(
            <div className = "Weather">
                <form className="search-form">
                    <div className = "row">
                        <div className = "col-9">
                            <input type="search" placeholder="Enter a city..." autoFocus = "on" required className="form-control"/>
                        </div>
                        <div className = "col-3">
                            <input type="submit" value="Search"className="search-form-button"></input>
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className = "text-capitalize" >{weatherData.description}</li>
                </ul>
                <div className ="row mt-3">
                    <div className = "col-6">
                        <div className = "clearfix">
                            <img src = {weatherData.iconURL} alt = {weatherData.description} className = "float-left"/>
                            <div className = "float-left">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className = "col-6">
                        <ul>
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        let city = "London";
        const apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
        let apiURL =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);

        return "Loading...";

    }
}
export default Weather;
