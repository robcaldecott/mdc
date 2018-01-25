import React from "react";
import { TextField, TextFieldHelperText, TextFieldIcon } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

storiesOf("text-field", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    class ControlledTextField extends React.Component {
      state = { value: this.props.initialValue };

      render() {
        return (
          <div>
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
              {...(boolean("leadingIcon", false)
                ? { leadingIcon: <TextFieldIcon>event</TextFieldIcon> }
                : {})}
              {...(boolean("trailingIcon", false)
                ? {
                    trailingIcon: (
                      <TextFieldIcon
                        tabIndex="0"
                        onClick={() => this.setState({ value: "" })}
                      >
                        delete
                      </TextFieldIcon>
                    )
                  }
                : {})}
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
