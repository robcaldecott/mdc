import React from "react";
import { Theme } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

storiesOf("theme", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    const text = select(
      "text",
      [
        "none",

        "primary",
        "primary-light",
        "primary-dark",
        "secondary",
        "secondary-light",
        "secondary-dark",

        "text-primary-on-background",
        "text-secondary-on-background",
        "text-hint-on-background",
        "text-disabled-on-background",
        "text-icon-on-background",

        "text-primary-on-primary",
        "text-secondary-on-primary",
        "text-hint-on-primary",
        "text-disabled-on-primary",
        "text-icon-on-primary",

        "text-primary-on-secondary",
        "text-secondary-on-secondary",
        "text-hint-on-secondary",
        "text-disabled-on-secondary",
        "text-icon-on-secondary",

        "text-primary-on-light",
        "text-secondary-on-light",
        "text-hint-on-light",
        "text-disabled-on-light",
        "text-icon-on-light",

        "text-primary-on-dark",
        "text-secondary-on-dark",
        "text-hint-on-dark",
        "text-disabled-on-dark",
        "text-icon-on-dark"
      ],
      "none"
    );
    const background = select(
      "background",
      [
        "none",
        "background",
        "primary-bg",
        "primary-light-bg",
        "primary-dark-bg",
        "secondary-bg",
        "secondary-light-bg",
        "secondary-dark-bg"
      ],
      "none"
    );
    return (
      <Theme
        text={text === "none" ? undefined : text}
        background={background === "none" ? undefined : background}
      >
        <div style={{ padding: 16, border: "1px solid #f0f0f0" }}>
          <p>Text: {text}</p>
          <p>Background: {background}</p>
          <p>
            <i className="material-icons">favorite</i>
          </p>
        </div>
      </Theme>
    );
  });
