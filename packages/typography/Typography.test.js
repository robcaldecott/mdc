import React from "react";
import {
  Typography,
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Subheading2,
  Subheading1,
  Body2,
  Body1,
  Caption,
  Button
} from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Typography element="h1" type="display4" adjustMargin>
        Display4
      </Typography>
    )
  ).toMatchSnapshot();
});

it("renders display4", () => {
  expect(renderer.create(<Display4>Display4</Display4>)).toMatchSnapshot();
});

it("renders display3", () => {
  expect(renderer.create(<Display3>Display3</Display3>)).toMatchSnapshot();
});

it("renders display2", () => {
  expect(renderer.create(<Display2>Display2</Display2>)).toMatchSnapshot();
});

it("renders display1", () => {
  expect(renderer.create(<Display1>Display4</Display1>)).toMatchSnapshot();
});

it("renders headline", () => {
  expect(renderer.create(<Headline>Headline</Headline>)).toMatchSnapshot();
});

it("renders title", () => {
  expect(renderer.create(<Title>Title</Title>)).toMatchSnapshot();
});

it("renders subheading2", () => {
  expect(
    renderer.create(<Subheading2>Subheading2</Subheading2>)
  ).toMatchSnapshot();
});

it("renders subheading1", () => {
  expect(
    renderer.create(<Subheading1>Subheading1</Subheading1>)
  ).toMatchSnapshot();
});

it("renders body2", () => {
  expect(renderer.create(<Body2>Body2</Body2>)).toMatchSnapshot();
});

it("renders body1", () => {
  expect(renderer.create(<Body1>Body1</Body1>)).toMatchSnapshot();
});

it("renders caption", () => {
  expect(renderer.create(<Caption>Caption</Caption>)).toMatchSnapshot();
});

it("renders button", () => {
  expect(renderer.create(<Button>Button</Button>)).toMatchSnapshot();
});
