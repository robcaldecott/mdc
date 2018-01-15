import React from "react";
import { IconToggle } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<IconToggle>favorite</IconToggle>)).toMatchSnapshot();
});

it("renders disabled", () => {
  expect(
    renderer.create(<IconToggle disabled>favorite</IconToggle>)
  ).toMatchSnapshot();
});
