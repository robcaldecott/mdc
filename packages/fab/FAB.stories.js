import React from "react";
import { FAB } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("FAB", module)
  .addDecorator(withKnobs)
  .add("knobs", () => (
    <FAB
      mini={boolean("mini", false)}
      exited={boolean("exited", false)}
      onClick={action("onClick")}
    >
      favorite
    </FAB>
  ));
