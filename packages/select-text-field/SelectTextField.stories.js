import React from "react";
import { SelectTextField } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

storiesOf("select-text-field", module)
  .addDecorator(withKnobs)
  .add("controlled", () => {
    class ControlledSelectTextField extends React.Component {
      state = { value: this.props.value };

      render() {
        return (
          <div>
            <SelectTextField
              label="Pick a food group"
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
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
            </SelectTextField>
            <p>Selected value: {this.state.value}</p>
          </div>
        );
      }
    }
    return (
      <ControlledSelectTextField
        value={select(
          "value",
          ["", "grains", "vegetables", "fruit", "dairy", "meat", "fats"],
          ""
        )}
      />
    );
  });
