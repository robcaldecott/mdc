import React from "react";
import { NavList, NavListItem, NavListDivider } from ".";
import renderer from "react-test-renderer";

it("remders", () => {
  expect(
    renderer.create(
      <NavList className="custom">
        <NavListItem>Item 1</NavListItem>
        <NavListItem>Item 2</NavListItem>
        <NavListDivider />
        <NavListItem>Item 3</NavListItem>
      </NavList>
    )
  ).toMatchSnapshot();
});
