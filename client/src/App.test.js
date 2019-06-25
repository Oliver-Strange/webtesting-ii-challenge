import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders "baseball"', () => {
    const { getByText } = render(<App />);
    const text = getByText(/baseball/i);
    expect(text).toBeInTheDocument();
  });
});
