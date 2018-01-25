import React from "react";
import { FAB } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("fab", module)
  .addDecorator(withKnobs)
  .add("props", () => (
    <FAB
      mini={boolean("mini", false)}
      exited={boolean("exited", false)}
      onClick={action("onClick")}
    >
      favorite
    </FAB>
  ));
