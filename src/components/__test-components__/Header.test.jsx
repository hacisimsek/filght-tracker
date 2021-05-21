import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

test("There is icon", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const headerEl = screen.getByTestId("icon-test");
  userEvent.click(headerEl);
  expect(headerEl);
});
