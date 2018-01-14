import React from "react";
import { Radio } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<Radio />)).toMatchSnapshot();
});

it("renders disabled", () => {
  expect(renderer.create(<Radio disabled />)).toMatchSnapshot();
});

it("renders with a label", () => {
  expect(renderer.create(<Radio id="radio">Label</Radio>)).toMatchSnapshot();
});

it("renders alignEnd", () => {
  expect(
    renderer.create(
      <Radio id="radio" alignEnd>
        Label
      </Radio>
    )
  ).toMatchSnapshot();
});
