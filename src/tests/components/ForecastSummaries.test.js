import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1525046400000,
        temperature: {
          max: 11,
          min: 4,
        },
        description: "Clear",
        icon: 800,
      },
      {
        date: 1525132800000,
        temperature: {
          max: 13,
          min: 8,
        },
        description: "Stormy",
        icon: 211,
      },
      {
        date: 1525219200000,
        temperature: {
          max: 1,
          min: -2,
        },
        description: "Heavy Snow",
        icon: 602,
      },
      {
        date: 1525305600000,
        temperature: {
          max: 20,
          min: 4,
        },
        description: "Tornado",
        icon: 781,
      },
      {
        date: 1525392000000,
        temperature: {
          max: 25,
          min: 18,
        },
        description: "Hazy",
        icon: 721,
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(5);
  });
});
