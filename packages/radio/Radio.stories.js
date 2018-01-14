import React, { Fragment } from "react";
import { Radio } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .add("knobs", () => {
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
              <Radio
                key={value}
                id={`radio-${value}`}
                value={value}
                checked={value === this.state.value}
                onChange={e => this.setState({ value })}
                disabled={this.props.disabled}
                alignEnd={this.props.alignEnd}
              >
                {label}
              </Radio>
            ))}
            <p className="mdc-typography">
              Selected option: {this.state.value}
            </p>
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
