import React, { useState } from "react";

const WeatherForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter city or coordinates"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
