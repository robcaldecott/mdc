import React from "react";
import { Checkbox } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("knobs", () => {
    class ControlledCheckbox extends React.Component {
      state = { checked: this.props.initialState };

      render() {
        return (
          <Checkbox
            checked={this.state.checked}
            onChange={e => this.setState({ checked: e.target.checked })}
            disabled={boolean("disabled", false)}
            id="my-checkbox"
            alignEnd={boolean("alignEnd", false)}
          >
            {text("label", "Label")}
          </Checkbox>
        );
      }
    }
    return <ControlledCheckbox initialState={boolean("checked", false)} />;
  });
