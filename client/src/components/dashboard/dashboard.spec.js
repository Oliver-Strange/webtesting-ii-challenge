import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Display from "../display/Display";
import App from "../../App";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });

  it("displays dashboard", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/dashboard/i);
  });

  it("ball button increments to 3, then resets", () => {
    const { getByText, getByTestId } = render(<App />);
    let button = getByTestId(/ball/i);
    fireEvent.click(button);
    getByText(/balls: 1/i);
    fireEvent.click(button);
    getByText(/balls: 2/i);
    fireEvent.click(button);
    getByText(/balls: 3/i);
    fireEvent.click(button);
    getByText(/balls: 0/i);
  });

  it("strike button increments to 2, and resets at 3", () => {
    const { getByText, getByTestId } = render(<App />);
    let button = getByTestId(/strike/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i);
    fireEvent.click(button);
    getByText(/strikes: 2/i);
    fireEvent.click(button);
    getByText(/strikes: 0/i);
  });

  it("foul button increments strikes to 2, and does not go higher", () => {
    const { getByText, getByTestId } = render(<App />);
    let button = getByTestId(/foul/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i);
    fireEvent.click(button);
    getByText(/strikes: 2/i);
    fireEvent.click(button);
    getByText(/strikes: 2/i);
  });

  it("hit button should reset everything to 0", () => {
    const { getByText, getByTestId } = render(<App />);
    let ballsButton = getByTestId(/ball/i);
    let strikeButton = getByTestId(/strike/i);
    let foulButton = getByTestId(/foul/i);
    let hitButton = getByTestId(/hit/i);
    fireEvent.click(ballsButton);
    getByText(/balls: 1/i);
    fireEvent.click(strikeButton);
    getByText(/strikes: 1/i);
    fireEvent.click(foulButton);
    fireEvent.click(hitButton);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });
});
