import React from "react";
import { Theme } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Theme text="text-class" background="background-class">
        <p>Child</p>
      </Theme>
    )
  ).toMatchSnapshot();
});
