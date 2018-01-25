import React from "react";
import { Switch } from ".";
import { FormField } from "@mdc/form-field";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

storiesOf("switch", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    class ControlledSwitch extends React.Component {
      state = { checked: false };

      render() {
        return (
          <FormField alignEnd={boolean("alignEnd", false)}>
            <Switch
              id="switch"
              checked={this.state.checked}
              onChange={e => this.setState({ checked: e.target.checked })}
            />
            <label htmlFor="switch">{text("Label", "Label")}</label>
          </FormField>
        );
      }
    }
    return <ControlledSwitch />;
  });
