import React from "react";
import { TextField, TextFieldHelperText } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .add("@mdc/text-field", () => {
    class ControlledTextField extends React.Component {
      state = { value: this.props.initialValue };

      render() {
        return (
          <div className="mdc-typography">
            <TextField
              id="textfield"
              label={!this.props.fullWidth && "Label"}
              placeholder={this.props.fullWidth ? "Placeholder" : ""}
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              fullWidth={this.props.fullWidth}
              disabled={boolean("disabled", false)}
              dense={boolean("dense", false)}
              box={boolean("box", false)}
              required={boolean("required", false)}
              pattern={text("pattern", "") || undefined}
              helperText={
                <TextFieldHelperText
                  persistent={boolean("persistent helperText", false)}
                  validation={boolean("validation helperText", false)}
                >
                  {text("helperText", "")}
                </TextFieldHelperText>
              }
            />
          </div>
        );
      }
    }
    return (
      <ControlledTextField
        initialValue={text("value", "")}
        fullWidth={boolean("fullWidth", false)}
      />
    );
  });
