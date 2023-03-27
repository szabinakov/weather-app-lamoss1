import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  xit("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Sydney" country="Australia" />
    );

    expect(getByText("Sydney, Australia")).toBeInstanceOf(HTMLHeadingElement);
  });
});
