import React from "react";
import { Radio } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<Radio className="custom" />)).toMatchSnapshot();
});

it("renders disabled", () => {
  expect(renderer.create(<Radio disabled />)).toMatchSnapshot();
});
