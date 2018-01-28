import React from "react";
import { TextArea } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("textarea", module)
  .addDecorator(withKnobs)
  .add("controlled", () => {
    class ControlledTextArea extends React.Component {
      state = { value: "" };

      render() {
        return (
          <TextArea
            rows="8"
            cols="40"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            label={text("label", "Label")}
            disabled={boolean("disabled", false)}
            fullWidth={boolean("fullWidth", false)}
            dense={boolean("dense", false)}
            required={boolean("required", false)}
          />
        );
      }
    }
    return <ControlledTextArea />;
  });
