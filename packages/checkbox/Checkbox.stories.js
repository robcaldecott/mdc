import React from "react";
import { Checkbox } from ".";
import { FormField } from "@mdc/form-field";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("checkbox", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    class ControlledCheckbox extends React.Component {
      state = { checked: this.props.initialState };

      render() {
        return (
          <FormField alignEnd={boolean("alignEnd", false)}>
            <Checkbox
              checked={this.state.checked}
              onChange={e => this.setState({ checked: e.target.checked })}
              disabled={boolean("disabled", false)}
              id="my-checkbox"
            />
            <label htmlFor="my-checkbox">{text("label", "Label")}</label>
          </FormField>
        );
      }
    }
    return <ControlledCheckbox initialState={boolean("checked", false)} />;
  });
