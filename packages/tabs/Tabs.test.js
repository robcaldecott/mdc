import React from "react";
import { TabBar, Tab, TabIcon, TabIconText } from ".";
import renderer from "react-test-renderer";

it("renders text tabs", () => {
  expect(
    renderer.create(
      <TabBar className="custom">
        <Tab active>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabBar>
    )
  ).toMatchSnapshot();
});

it("renders icon tabs", () => {
  expect(
    renderer.create(
      <TabBar icons indicator="primary">
        <Tab active>
          <TabIcon>star</TabIcon>
        </Tab>
        <Tab>
          <TabIcon>favorite</TabIcon>
        </Tab>
        <Tab>
          <TabIcon>bookmark</TabIcon>
        </Tab>
      </TabBar>
    )
  ).toMatchSnapshot();
});

it("renders icon and text tabs", () => {
  expect(
    renderer.create(
      <TabBar iconsWithText indicator="accent">
        <Tab active iconAndText>
          <TabIcon>star</TabIcon>
          <TabIconText>Tab 1</TabIconText>
        </Tab>
        <Tab iconAndText>
          <TabIcon>favorite</TabIcon>
          <TabIconText>Tab 2</TabIconText>
        </Tab>
        <Tab iconAndText>
          <TabIcon>bookmark</TabIcon>
          <TabIconText>Tab 3</TabIconText>
        </Tab>
      </TabBar>
    )
  ).toMatchSnapshot();
});
