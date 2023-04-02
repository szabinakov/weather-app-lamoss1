// import React from "react";
// import "../styles/ForecastDetails.css";
// import "../styles/App.css";

// function ForecastDetails({ forecast }) {
//   const { date, humidity, temperature, wind } = forecast;
//   const formattedDate = new Date(date).toDateString();
//   return (
//     <div className="forecast-details">
//       <div className="forecast-details__date">{date}</div>
//       {formattedDate}
//       <div className="forecast-details_humidity">{humidity.max}</div>
//       <div className="forecast-details_temperature_min">{temperature.min}</div>
//       <div className="forecast-details_temperature_max">{temperature.max}</div>
//       <div className="forecast-details__wind">Wind: {wind.speed}mph</div>
//     </div>
//   );
// }

// export default ForecastDetails;

import React from "react";
import getPokemonImageUrl from "../helpers/getPokemonImageUrl";

function ForecastDetails(props) {
  const { date, temperature, description, windSpeed } = props;
  const pokemonImage = getPokemonImageUrl();
  // ...
  <img src={pokemonImage} alt="Pokemon" />;

  return (
    <div className="forecast-details">
      <h2>{new Date(date).toLocaleDateString()}</h2>
      <img src={pokemonImage} alt="Pokemon" />
      <p>
        <strong>Temperature:</strong> {temperature}°C
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Wind Speed:</strong> {windSpeed} mph
      </p>
    </div>
  );
}

export default ForecastDetails;
