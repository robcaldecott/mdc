import React, { Fragment } from "react";
import {
  Typography,
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Subheading2,
  Subheading1,
  Body2,
  Body1,
  Caption,
  Button
} from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("typography", module)
  .addDecorator(withKnobs)
  .add("base", () => (
    <Fragment>
      {[
        "display4",
        "display3",
        "display2",
        "display1",
        "headline",
        "title",
        "subheading2",
        "subheading1",
        "body2",
        "body1",
        "caption",
        "button"
      ].map((type, index) => (
        <Typography key={index} type={type} element="div">
          {type}
        </Typography>
      ))}
    </Fragment>
  ))
  .add("types", () => {
    const adjustMargin = boolean("adjustMargin", false);
    return (
      <Fragment>
        {[
          Display4,
          Display3,
          Display2,
          Display1,
          Headline,
          Caption,
          Title,
          Subheading2,
          Subheading1,
          Body2,
          Body1,
          Button
        ].map((component, index) =>
          React.createElement(
            component,
            { key: index, adjustMargin },
            component.name
          )
        )}
      </Fragment>
    );
  });
