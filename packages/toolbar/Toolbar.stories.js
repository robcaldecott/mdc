import React from "react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarIcon,
  ToolbarAdjust
} from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("toolbar", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    const fixed = boolean("fixed", false);
    return (
      <div style={{ height: 1000 }}>
        <Toolbar fixed={fixed}>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection shrinkToFit align="end">
              <ToolbarIcon>print</ToolbarIcon>
              <ToolbarIcon
                type="a"
                href="#bookmark"
                onClick={e => e.preventDefault()}
              >
                bookmark
              </ToolbarIcon>
              <ToolbarIcon type="button">file_download</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarAdjust fixed={fixed}>
          <div>Content</div>
        </ToolbarAdjust>
      </div>
    );
  });
