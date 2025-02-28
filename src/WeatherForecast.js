import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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