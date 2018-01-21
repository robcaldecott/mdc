import React from "react";
import "typeface-roboto";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "material-components-web/dist/material-components-web.css";
import { configure, addDecorator } from "@storybook/react";

const loadStories = () => {
  require("glob-loader!./stories.pattern");
};

addDecorator(story => <div className="mdc-typography">{story()}</div>);

configure(loadStories, module);
