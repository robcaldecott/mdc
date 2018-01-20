import React from "react";
import { Switch } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<Switch defaultChecked />)).toMatchSnapshot();
});
