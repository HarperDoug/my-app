import React, {useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios"; 
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);    

    function handleResponse(response){
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index < 6) {
                        return (
                        <div className="col" key={index}>

                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                        );
                        }
                    })}
                </div>
            </div>
        );

    } else {
        let apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
        let lat = props.coordinates.latitude; 
        let long = props.coordinates.longitude;
        let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}`;
        axios.get(apiURL).then(handleResponse);
        return "null";

    }

}