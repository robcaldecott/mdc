import React from "react";
import { FAB } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<FAB>favorite</FAB>)).toMatchSnapshot();
});

it("renders mini", () => {
  expect(renderer.create(<FAB mini>favorite</FAB>)).toMatchSnapshot();
});

it("renders exited", () => {
  expect(renderer.create(<FAB exited>favorite</FAB>)).toMatchSnapshot();
});
