import React from "react";
import { Elevation } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Elevation z={4} transition>
        Elevation
      </Elevation>
    )
  ).toMatchSnapshot();
});
