import React from "react";
import { Checkbox } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<Checkbox className="custom" />)).toMatchSnapshot();
});

it("renders disabled", () => {
  expect(renderer.create(<Checkbox disabled />)).toMatchSnapshot();
});
