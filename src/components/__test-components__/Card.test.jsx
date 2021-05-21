import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Card from "../Card";

beforeEach(() => {
  render(
    <Card
      src="https://i.pinimg.com/originals/62/d6/1d/62d61d24f5ab69b4673954fcdafd9c88.jpg"
      title="New York, USA"
      description="There are many fun activities to do in the beautiful New York City"
    />
  );
});

test("There are some images", () => {
  const cardEl = screen.getByTestId("img-test");
  expect(cardEl).toBeInTheDocument();
});
test("renders with or without a image", () => {
  const cardEl = screen.getByTestId("img-test");
  expect(cardEl).toBeInTheDocument(
    "https://i.pinimg.com/originals/62/d6/1d/62d61d24f5ab69b4673954fcdafd9c88.jpg"
  );
});

test("renders with or without a title", () => {
  const cardEl = screen.getByTestId("h2-test");
  expect(cardEl).toBeInTheDocument(/New York, USA/i);
});

test("renders with or without a description", () => {
  const cardEl = screen.getByTestId("h4-test");
  expect(cardEl).toBeInTheDocument(
    /There are many fun activities to do in the beautiful New York City/i
  );
});
