import React from "react";

const WeatherResult = ({ data }) => {
  return (
    <div className="weather-container weather-info">
      <h2 className=" weather-info">Current Weather</h2>
      <p className="location ">Location: {data.name}</p>
      <p className="weather-info .temperature">
        Temperature: {data.main.temp}°C
      </p>
      <p className="weather">Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherResult;
