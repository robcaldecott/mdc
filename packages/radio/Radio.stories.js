import React, { Fragment } from "react";
import { Radio } from ".";
import { FormField } from "@mdc/form-field";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("radio", module)
  .addDecorator(withKnobs)
  .add("controlled", () => {
    class ControlledRadioGroup extends React.Component {
      state = {
        value: "1997",
        items: [
          { label: "OK Computer", value: "1997" },
          { label: "Kid A", value: "2000" },
          { label: "In Rainbows", value: "2007" }
        ]
      };

      render() {
        return (
          <Fragment>
            {this.state.items.map(({ label, value }) => (
              <FormField key={value} alignEnd={this.props.alignEnd}>
                <Radio
                  id={`radio-${value}`}
                  value={value}
                  checked={value === this.state.value}
                  onChange={e => this.setState({ value })}
                  disabled={this.props.disabled}
                />
                <label htmlFor={`radio-${value}`}>{label}</label>
              </FormField>
            ))}
            <p>Selected option: {this.state.value}</p>
          </Fragment>
        );
      }
    }
    return (
      <ControlledRadioGroup
        disabled={boolean("disabled", false)}
        alignEnd={boolean("alignEnd", false)}
      />
    );
  });
