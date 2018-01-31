import React from "react";
import { Slider } from ".";
import "./Slider.css";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

storiesOf("slider", module)
  .addDecorator(withKnobs)
  .add("controlled", () => {
    class ControlledSlider extends React.Component {
      state = { value: 50 };

      render() {
        return (
          <div>
            <Slider
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              min={number("min", 0)}
              max={number("max", 100)}
              step={number("step", 1)}
              disabled={boolean("disabled", false)}
            />
            <p>Value: {this.state.value}</p>
          </div>
        );
      }
    }
    return <ControlledSlider />;
  });
