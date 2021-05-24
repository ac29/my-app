import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let [city, setCity] = useState(" ");
  let [temperature, setTemperature] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature({
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
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

  if (loaded) {
    return (
      <div>
        <div className="Form">{form}</div>
        <ul className="WeatherDescription">
          <li>Temperature: {temperature.temp}°C</li>
          <li>Description: {temperature.description}</li>
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {temperature.wind}km/h</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

