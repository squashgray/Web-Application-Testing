import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

test("scoreboards rendered", () => {
  const { getByText } = render(<App />);

  getByText(/strikes/i);
  getByText(/balls/i);
});

test(" buttons rendered", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/strikes_button/i);
  getByTestId(/balls_button/i);
  getByTestId(/fouls_button/i);
  getByTestId(/hits_button/i);
});

test("strike click works", () => {
  const { getByTestId, getByText } = render(<App />);
  fireEvent.click(getByText("Strike"));
  expect(getByTestId("count")).toHaveTextContent("1");
});
