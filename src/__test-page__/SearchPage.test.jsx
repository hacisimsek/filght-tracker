import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import SearhPage from "../SearchPage";

beforeEach(() => {
  render(<SearhPage />);
});

test("there is a form", () => {
  const searhPageEl = screen.getByTestId("form-test");
  expect(searhPageEl).toBeInTheDocument();
});

test("initial value of from ", () => {
  const searhPageEl = screen.getByTestId("form-test");
  expect(searhPageEl).not.toHaveValue("");
});

// test("initial value of from a ", () => {
//   const searhPageEl = screen.getByTestId("form-test");
//   expect(searhPageEl).toHaveValue("");
//   userEvent.click(searhPageEl);
//   expect(searhPageEl).toHaveValue("İstanbul");
// });

test("there is a to", () => {
  const searhPageEl = screen.getByTestId("to-test");
  expect(searhPageEl).toBeInTheDocument();
});

test("initial value of to ", () => {
  const searhPageEl = screen.getByTestId("to-test");
  expect(searhPageEl).not.toHaveValue("");
});
