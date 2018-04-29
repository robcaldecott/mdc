import React from "react";
import { Button } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

storiesOf("button", module)
  .addDecorator(withKnobs)
  .add(
    "props",
    withInfo({ header: false, inline: true })(() => (
      <Button
        raised={boolean("raised", false)}
        dense={boolean("dense", false)}
        unelevated={boolean("unelevated", false)}
        outlined={boolean("outlined", false)}
        disabled={boolean("disabled", false)}
        icon={boolean("icon", false) ? "star" : ""}
        {...(boolean("Custom")
          ? { style: { "--mdc-theme-primary": "red" } }
          : {})}
        onClick={action("onClick")}
      >
        {text("Label", "Button")}
      </Button>
    ))
  );
