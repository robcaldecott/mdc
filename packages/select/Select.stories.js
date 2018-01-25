import React from "react";
import { Select } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("select", module)
  .addDecorator(withKnobs)
  .add("controlled", () => {
    class ControlledSelect extends React.Component {
      state = { value: "" };

      render() {
        return (
          <div>
            <Select
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              label="Pick a food group"
              disabled={boolean("disabled", false)}
            >
              <option value="grains">Bread, Cereal, Rice, and Pasta</option>
              <option value="vegetables" disabled>
                Vegetables
              </option>
              <option value="fruit">Fruit</option>
              <option value="dairy">Milk, Yogurt, and Cheese</option>
              <option value="meat">
                Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
              </option>
              <option value="fats">Fats, Oils, and Sweets</option>
            </Select>
            <p>Selected value: {this.state.value}</p>
          </div>
        );
      }
    }
    return <ControlledSelect />;
  });
