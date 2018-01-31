import React from "react";
import { Slider } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Slider
        className="custom"
        min="1"
        max="100"
        step="1"
        value="50"
        disabled
      />
    )
  ).toMatchSnapshot();
});
