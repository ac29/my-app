import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast() {
  
  function handleResponse (response){
console.log(response.data);

  }

  let apiKey = "7dd7f2137e6eaf2096f115b990d86b79";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  
  axios.get(apiUrl).then(handleResponse)

  return (
    <div class="weather-forecast" id="forecast">
      <div class="col-2">
        <div class="weather-forecast-date">Monday</div>
        <img
          src="http://openweathermap.org/img/wn/{forecastDay.weather[0].icon}@2x.png"
          alt=""
          width="36"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> {19}° </span>
          <span class="weather-forecast-temperature-min"> {1}° </span>
        </div>
      </div>
    </div> 
  );
}
