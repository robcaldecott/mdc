import React from "react";
import { Button } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "knobs",
    withInfo({ header: false, inline: true })(() => (
      <Button
        raised={boolean("Raised", false)}
        compact={boolean("Compact", false)}
        dense={boolean("Dense", false)}
        disabled={boolean("Disabled", false)}
        onClick={action("onClick")}
      >
        {text("Label", "Button")}
      </Button>
    ))
  );
