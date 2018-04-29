import React, { Fragment } from "react";
import {
  Typography,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption,
  Button,
  Overline
} from ".";
import { storiesOf } from "@storybook/react";

storiesOf("typography", module)
  .add("base", () => (
    <Fragment>
      {[
        "headline1",
        "headline2",
        "headline3",
        "headline4",
        "headline5",
        "headline6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
        "overline"
      ].map((type, index) => (
        <Typography key={index} type={type} element="div">
          {type}
        </Typography>
      ))}
    </Fragment>
  ))
  .add("types", () => {
    return (
      <Fragment>
        {[
          Headline1,
          Headline2,
          Headline3,
          Headline4,
          Headline5,
          Headline6,
          Subtitle1,
          Subtitle2,
          Body1,
          Body2,
          Caption,
          Button,
          Overline
        ].map((Component, index) => (
          <Component key={index}>{Component.name}</Component>
        ))}
      </Fragment>
    );
  });
