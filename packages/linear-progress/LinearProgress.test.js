import React from "react";
import { LinearProgress } from ".";
import renderer from "react-test-renderer";

it("renders indeterminate", () => {
  expect(renderer.create(<LinearProgress indeterminate />)).toMatchSnapshot();
});

it("renders indeterminate reversed", () => {
  expect(
    renderer.create(<LinearProgress indeterminate reversed />)
  ).toMatchSnapshot();
});

it("renders determinate", () => {
  expect(
    renderer.create(<LinearProgress progress={0.25} buffer={0.25} />)
  ).toMatchSnapshot();
});

it("renders determinate reversed", () => {
  expect(
    renderer.create(<LinearProgress progress={0.25} buffer={0.25} reverseed />)
  ).toMatchSnapshot();
});

it("renders closed", () => {
  expect(renderer.create(<LinearProgress closed />)).toMatchSnapshot();
});

it("renders with a custom class", () => {
  expect(
    renderer.create(<LinearProgress className="custom" />)
  ).toMatchSnapshot();
});
