import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import getForecast from "../requests/getForecast";

describe("App", () => {
  test("renders App component correctly", () => {
    render(
      <App location={getForecast.location} forecasts={getForecast.forecasts} />
    );
    const h1Element = screen.getByText(/Liverpool, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
