import React from "react";
import { Checkbox } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<Checkbox />)).toMatchSnapshot();
});

it("renders with a label", () => {
  expect(
    renderer.create(
      <Checkbox id="checkbox" defaultChecked>
        Label
      </Checkbox>
    )
  ).toMatchSnapshot();
});
