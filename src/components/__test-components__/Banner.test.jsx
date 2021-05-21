import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Banner from "../Banner.js";

beforeEach(() => {
  render(
    <MemoryRouter>
      <Banner />
    </MemoryRouter>
  );
});

test("Button work correctly", () => {
  const bannerEL = screen.getByTestId("bannerButton");
  expect(bannerEL).toBeInTheDocument();
});
test("There are some text in the banner", () => {
  const bannerEL = screen.getByText(
    /Book a flight to uncover the hidden gems near you/i
  );
  expect(bannerEL).toBeInTheDocument();
});
test("There are some text", () => {
  const bannerEL = screen.getByText(/Get out and stretch your imagination/i);
  expect(bannerEL).toBeInTheDocument();
});

test("There is icon", () => {
  const bannerEL = screen.getByTestId("bannerButton");
  userEvent.click(bannerEL);
  expect(bannerEL);
});
