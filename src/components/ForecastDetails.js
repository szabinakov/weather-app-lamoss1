import "../styles/ForecastDetails.css";
import "../styles/App.css";
import React from "react";
import getPokemonImageUrl from "../helpers/getPokemonImageUrl";

function ForecastDetails({ forecast }) {
  const { date, temperature, description, wind } = forecast;
  const pokemonImage = getPokemonImageUrl();
  // ...
  <img src={pokemonImage} alt="Pokemon" />;

  return (
    <div className="forecast-details-whole">
      <div className="forecast-details">
        <h2>{new Date(date).toLocaleDateString()}</h2>
        <div className="pokemon-background">
          <img src={pokemonImage} alt="Pokemon" />{" "}
        </div>
        <div className="forecast-details-main">
          <p>
            <strong>Temperature:</strong> {temperature.max}°C
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Wind Speed:</strong> {wind.speed} mph
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForecastDetails;
