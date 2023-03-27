import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: {
      min: 0,
      max: 100,
    },
    wind: {
      speed: {
        min: 1,
        max: 100,
        direction: "stub",
      },
    },
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
        wind={validProps.wind}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
