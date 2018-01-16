import React from "react";
import { TextField, TextFieldHelperText, TextFieldIcon } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(renderer.create(<TextField />)).toMatchSnapshot();
});

it("renders with a label", () => {
  expect(renderer.create(<TextField label="Label" />)).toMatchSnapshot();
});

it("renders disabled", () => {
  expect(
    renderer.create(<TextField label="Label" disabled />)
  ).toMatchSnapshot();
});

it("renders full width", () => {
  expect(
    renderer.create(<TextField label="Label" fullWidth />)
  ).toMatchSnapshot();
});

it("renders dense", () => {
  expect(renderer.create(<TextField label="Label" dense />)).toMatchSnapshot();
});

it("renders with a box", () => {
  expect(renderer.create(<TextField label="Label" box />)).toMatchSnapshot();
});

it("renders with helper text", () => {
  expect(
    renderer.create(
      <TextField label="Label" helperText={<TextFieldHelperText />} />
    )
  ).toMatchSnapshot();
});

it("renders with persistent helper text", () => {
  expect(
    renderer.create(
      <TextField
        label="Label"
        helperText={<TextFieldHelperText persistent />}
      />
    )
  ).toMatchSnapshot();
});

it("renders with validation helper text", () => {
  expect(
    renderer.create(
      <TextField
        label="Label"
        helperText={<TextFieldHelperText validation />}
      />
    )
  ).toMatchSnapshot();
});

it("renders with a leading icon", () => {
  expect(
    renderer.create(
      <TextField
        label="Label"
        box
        leadingIcon={<TextFieldIcon>event</TextFieldIcon>}
      />
    )
  ).toMatchSnapshot();
});

it("renders with a trailing icon", () => {
  expect(
    renderer.create(
      <TextField
        label="Label"
        box
        trailingIcon={<TextFieldIcon>delete</TextFieldIcon>}
      />
    )
  ).toMatchSnapshot();
});
