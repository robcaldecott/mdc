import React from "react";
import { Select } from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <Select value="" label="Pick a food group">
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
    )
  ).toMatchSnapshot();
});
