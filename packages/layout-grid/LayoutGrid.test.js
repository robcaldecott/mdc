import React from "react";
import { LayoutGrid, LayoutGridCell } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <LayoutGrid>
        <LayoutGridCell
          span={1}
          desktop={2}
          tablet={3}
          mobile={4}
          order={2}
          align="middle"
        >
          Cell 1
        </LayoutGridCell>
        <LayoutGridCell>
          <LayoutGrid nested>
            <LayoutGridCell>1</LayoutGridCell>
            <LayoutGridCell>2</LayoutGridCell>
            <LayoutGridCell>3</LayoutGridCell>
          </LayoutGrid>
        </LayoutGridCell>
      </LayoutGrid>
    )
  ).toMatchSnapshot();
});
