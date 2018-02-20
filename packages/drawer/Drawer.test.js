import React from "react";
import {
  PermanentDrawer,
  DrawerToolbarSpacer,
  DrawerContent,
  PersistentDrawer,
  DrawerHeader,
  DrawerHeaderContent,
  TemporaryDrawer
} from ".";
import { NavList, NavListItem } from "@mdc/list";
import renderer from "react-test-renderer";

it("renders a permanent drawer", () => {
  expect(
    renderer.create(
      <PermanentDrawer>
        <DrawerToolbarSpacer />
        <DrawerContent>
          <NavList>
            <NavListItem>Item 1</NavListItem>
            <NavListItem>Item 2</NavListItem>
          </NavList>
        </DrawerContent>
      </PermanentDrawer>
    )
  ).toMatchSnapshot();
});

it("renders a persistent drawer", () => {
  expect(
    renderer.create(
      <PersistentDrawer open>
        <DrawerHeader>
          <DrawerHeaderContent>Header</DrawerHeaderContent>
        </DrawerHeader>
        <DrawerContent>
          <NavList>
            <NavListItem>Item 1</NavListItem>
            <NavListItem>Item 2</NavListItem>
          </NavList>
        </DrawerContent>
      </PersistentDrawer>
    )
  ).toMatchSnapshot();
});

it("renders a temporary drawer", () => {
  expect(
    renderer.create(
      <TemporaryDrawer open>
        <DrawerHeader>
          <DrawerHeaderContent>Header</DrawerHeaderContent>
        </DrawerHeader>
        <DrawerContent>
          <NavList>
            <NavListItem>Item 1</NavListItem>
            <NavListItem>Item 2</NavListItem>
          </NavList>
        </DrawerContent>
      </TemporaryDrawer>
    )
  ).toMatchSnapshot();
});
