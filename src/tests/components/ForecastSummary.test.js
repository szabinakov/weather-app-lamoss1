import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "stub description",
    icon: "200",
    temperature: {
      min: 12,
      max: "22°C",
    },
    onSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(getByText("1111111")).toHaveClass("forecast-summary__date");
    expect(getByText("stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
  });
});
