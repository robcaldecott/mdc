import React from "react";
import { FormField } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("form-field", module)
  .addDecorator(withKnobs)
  .add("props", () => (
    <FormField alignEnd={boolean("alignEnd", false)}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Label</label>
    </FormField>
  ));
