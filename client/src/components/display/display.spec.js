import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";
import "jest-dom/extend-expect";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });

  it("displays display", () => {
    const { getByText } = render(<Display />);
    getByText(/display/i);
  });

  it("displays ball count", () => {
    const { getByText } = render(<Display balls="0" />);
    getByText(/balls: 0/i);
  });

  it("displays strike count", () => {
    const { getByText } = render(<Display strikes="0" />);
    getByText(/strikes: 0/i);
  });

  it("displays foul count", () => {
    const { getByText } = render(<Display fouls="0" />);
    getByText(/fouls: 0/i);
  });
});
