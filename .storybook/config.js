import "typeface-roboto";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "material-components-web/dist/material-components-web.css";
import { configure } from "@storybook/react";

function loadStories() {
  require("glob-loader!./stories.pattern");
}

configure(loadStories, module);
