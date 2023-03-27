import React from "react";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{date}</div>
      {formattedDate}
      <div className="forecast-details_humidity">{humidity.max}</div>
      <div className="forecast-details_temperature_min">{temperature.min}</div>
      <div className="forecast-details_temperature_max">{temperature.max}</div>
      <div className="forecast-details__wind">Wind: {wind.speed}mph</div>
    </div>
  );
}

export default ForecastDetails;
