import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=69c76a1a8cb99184b6a7fc207e3bea7b&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} className="form" />
      {weatherData && <WeatherResult data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
