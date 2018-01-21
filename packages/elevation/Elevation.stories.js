import React from "react";
import { Elevation } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

storiesOf("Elevation", module)
  .addDecorator(withKnobs)
  .add("@mdc/elevation", () => (
    <Elevation
      z={number("z", 2, { range: true, min: 0, max: 24, step: 1 })}
      style={{ margin: 24 }}
    >
      <p style={{ padding: 24 }}>Elevation</p>
    </Elevation>
  ))
  .add("transition", () => {
    class ControlledElevation extends React.Component {
      state = { z: 2 };

      render() {
        return (
          <Elevation
            z={this.state.z}
            transition
            style={{ margin: 24 }}
            onMouseEnter={() => this.setState({ z: 24 })}
            onMouseLeave={() => this.setState({ z: 2 })}
          >
            <p style={{ padding: 24 }}>Elevation</p>
          </Elevation>
        );
      }
    }
    return <ControlledElevation />;
  });
