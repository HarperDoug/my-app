import React from "react";
import "./App.css";

function Weather() {
  return (
    <div className="Weather">
      <div className = "container">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />
          <input
            type="submit"
            value="Search"
            className="search-form-button"
          ></input>
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city-name">London</h1>
            <p className="weather-app-details">
              <span className="time">15:00</span>,
              <span className="condition"> Cloudy</span>
              <br></br>
              Humidity: <strong>80</strong>
              <strong>%</strong>
              Wind: <strong>10</strong>
              <strong>km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature">
            <div>☀️</div>
            <div className="weather-app-temperature-value">24</div>
            <div className="weather-app-temperature-unit">°C</div>
          </div>
        </div>
      </main>
      <footer>
        Built by{" "}
        <a href="https://github.com/HarperDoug/my-app" target="_blank" rel="noreferrer">Jessica Spies </a>
        and website hosted on
        <a href="https://whimsical-moonbeam-18ec59.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a>
      </footer>
      </div>
    </div>
  );
}

export default Weather;