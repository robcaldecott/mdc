import React from "react";
import { FormField } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("FormField", module)
  .addDecorator(withKnobs)
  .add("knobs", () => (
    <FormField alignEnd={boolean("alignEnd", false)}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Label</label>
    </FormField>
  ));
