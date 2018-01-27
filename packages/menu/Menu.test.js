import React from "react";
import { Menu, MenuItem, MenuDivider } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Menu open>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuDivider />
        <MenuItem disabled>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu>
    )
  ).toMatchSnapshot();
});
