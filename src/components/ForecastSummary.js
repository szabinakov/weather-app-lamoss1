import React from "react";
import "../styles/ForecastSummaries.css";
import "../styles/App.css";
// import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, temperature, onSelect } = props;
  const formattedDate = new Date(date).toDateString();
  // const weatherCode = icon.slice(0, 1) + "00";
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      {formattedDate}
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {/* <img src={iconData[weatherCode]} /> */}
      </div>
      <div className="forecast-summary__temperature">{temperature.max}</div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;
