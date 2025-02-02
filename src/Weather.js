import React from "react";
import "./Weather.css";

function Weather(){
    return(
        <div className = "Weather">
            <form className="search-form">
                <div className = "row">
                    <div className = "col-9">
                        <input type="search" placeholder="Enter a city..." required className="form-control"/>
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
            <div className ="row">
                <div className = "col-6">
                    <img src = "https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt = "Sunny"/>
                    6°C
                </div>
                <div classNme = "col-6">
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
    )
}

export default Weather;