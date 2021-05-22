import React from "react";

export default function Form() {
  return (
    <div>
      <h2>
        <span id="city">Toronto</span>
        <span className="temperature" id="temperature"></span>
        <span className="temperatureUnits"> {14}°C </span>
        <br />
        <img src="" alt="clear" id="icon" />
        <br />
        <ul className="today-weather">
          <li>
            Windspeed
            <span className="windspeed" id="windspeed">
              {" "}
              {13}
            </span>
            <span class="kilometers-link">Km/h</span>
          </li>
          <li>
            Humidity
            <span class="humidity" id="humidity">
              {" "}
              {20}
            </span>
            <span>%</span>
          </li>
          <li class="weather-description" id="weather-description"></li>
        </ul>
      </h2>
    </div>
  );
}
