import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded,setLoaded] = useState (false);
  let [forecast,setForecast] = useState (null);
  
   useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse (response){
    setForecast(response.data.daily);
    setLoaded(true);
    }

 if (loaded) {
return (
    <div className="weather-forecast" id="forecast">
      <div className="col-2">
      <WeatherForecastDay/>
      </div>
    </div> 
  );
} else {
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "7dd7f2137e6eaf2096f115b990d86b79";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?${latitude}&${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
  return null;
  }
}

