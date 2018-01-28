import React from "react";
import { Menu, MenuItem, MenuDivider, MenuAnchor } from ".";
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

it("renders with an anchor", () => {
  expect(
    renderer.create(
      <MenuAnchor
        className="custom"
        menu={
          <Menu open>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuDivider />
            <MenuItem disabled>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
          </Menu>
        }
        menuPosition="bottom-left"
      >
        <button>Button</button>
      </MenuAnchor>
    )
  ).toMatchSnapshot();
});
