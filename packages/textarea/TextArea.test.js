import React from "react";
import { TextArea } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <TextArea
        id="textarea"
        className="custom"
        value="Value"
        label="Label"
        fullWidth
        dense
        disabled
        rows="8"
        cols="40"
      />
    )
  ).toMatchSnapshot();
});
