import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="weather-forecast" id="forecast">
      <div class="col-2">
        <div class="weather-forecast-date">Monday</div>
        <img
          src="http://openweathermap.org/img/wn/{forecastDay.weather[0].icon}@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> {19}° </span>
          <span class="weather-forecast-temperature-min"> {1}° </span>
        </div>
      </div>
    </div>
    
  );
}
