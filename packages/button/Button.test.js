import React from "react";
import { Button } from ".";
import renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";

it("renders in the DOM", () => {
  TestUtils.renderIntoDocument(<Button>Button</Button>);
});

it("renders", () => {
  expect(
    renderer.create(
      <Button raised compact dense>
        Button
      </Button>
    )
  ).toMatchSnapshot();
});
