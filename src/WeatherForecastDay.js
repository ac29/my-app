 import React from "react";
 
 export default function WeatherForecastDay (props){
function maxTemperature (){
    let temperature = Math.round (props.data.temp.max);
    return `${temperature}°`;
}
function minTemperature (){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
}

function day () {
    let date = new Date (props.data.dt*1000);
    let day = date.getDay();
     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}

     return (
    <div>
        <div class="weather-forecast-date">{day()}</div>
        <img
          src="http://openweathermap.org/img/wn/{forecastDay.weather[0].icon}@2x.png"
          alt=""
          width="36"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> {maxTemperature()} </span>
          <span class="weather-forecast-temperature-min"> {minTemperature()} </span>
        </div>
    </div>
     );
 }
 