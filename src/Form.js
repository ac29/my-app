import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import "./Form.css";

export default function Form(props) {
  let [city, setCity] = useState(" ");
  let [temperature, setTemperature] = useState({ready:false});

  function showTemperature(response) {
    setTemperature({
      ready: true,
      coordinates: response.data.coord,
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date (response.data.dt *1000),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7dd7f2137e6eaf2096f115b990d86b79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (temperature.ready) {
    return (
      <div>
        <div className="Date"><FormattedDate date = {temperature.date}/></div>
        <div className="Form">{form}</div>
        <ul className="WeatherDescription">
          <li>{city}</li>
          <span><WeatherTemperature celsius = {temperature.temp}/></span>
          <li>{temperature.description}</li>
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {temperature.wind}km/h</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
        <div> <Forecast coordinates = {temperature.coordinates}/></div>
      </div>
    );
  } else {
    let apiKey = "7dd7f2137e6eaf2096f115b990d86b79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
    return (
      "loading..."
    )
  }
}

