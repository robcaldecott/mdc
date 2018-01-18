import React from "react";
import { Snackbar, SnackbarAction } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Snackbar", module)
  .addDecorator(withKnobs)
  .add("@mdc/snackbar", () => (
    <Snackbar
      active={boolean("active", true)}
      multiline={boolean("multiline", false)}
      {...(boolean("action", false)
        ? {
            action: (
              <SnackbarAction onClick={action("onClick")}>Undo</SnackbarAction>
            )
          }
        : {})}
      actionOnBottom={boolean("actionOnBottom", false)}
      alignStart={boolean("alignStart", false)}
    >
      {text("message", "Message sent")}
    </Snackbar>
  ));
