import React, { Fragment } from "react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarTitle,
  ToolbarAdjust
} from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Fragment>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon menu>menu</ToolbarIcon>
            </ToolbarSection>
            <ToolbarSection>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection align="end" shrinkToFit>
              <ToolbarIcon type="a">anchor</ToolbarIcon>
              <ToolbarIcon type="button">button</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarAdjust fixed>
          <div>Content</div>
        </ToolbarAdjust>
      </Fragment>
    )
  ).toMatchSnapshot();
});
