import React from "react";
import { FormField } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <FormField>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Label</label>
      </FormField>
    )
  ).toMatchSnapshot();
});

it("renders alignEnd", () => {
  expect(
    renderer.create(
      <FormField alignEnd>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Label</label>
      </FormField>
    )
  ).toMatchSnapshot();
});
