import React from "react";
import { IconToggle } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("icon-toggle", module)
  .addDecorator(withKnobs)
  .add("controlled", () => {
    class ControlledIconToggle extends React.Component {
      state = { toggled: false };

      render() {
        return (
          <IconToggle
            onClick={() =>
              this.setState(state => ({ toggled: !state.toggled }))
            }
            disabled={this.props.disabled}
          >
            {this.state.toggled ? "favorite" : "favorite_border"}
          </IconToggle>
        );
      }
    }
    return <ControlledIconToggle disabled={boolean("disabled", false)} />;
  });
