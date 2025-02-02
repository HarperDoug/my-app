import React from "react";
import "./Weather.css";
import axios from "axios";

function Weather(){
    let city = "London";
    const apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
    let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className ="row mt-3">
                <div className = "col-6">
                    <div className = "clearfix">
                        <img src = "https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt = "Sunny" className = "float-left"/>
                        <div className = "float-left">
                            <span className="temperature">6</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className = "col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 20%
                        </li>
                        <li>
                            Wind: 12km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Weather;