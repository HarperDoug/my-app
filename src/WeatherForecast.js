import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios"; 

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }
    let apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
    let lat = props.coordinates.latitude; 
    let long = props.coordinates.longitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className = "WeatherForecast-Day">Thursday</div> 
                    <div className = "WeatherForecast-Icon"><WeatherIcon code="clear-sky-day" size={64} /></div>
                    <div className = "WeatherForecast-Temperatures">
                        <span className = "WeatherForecast-TemperatureMax">19°</span>
                        <span className = "WeatherForecast-TemperatureMin">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}