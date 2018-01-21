import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemGraphic,
  ListItemMeta,
  ListDivider
} from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <List twoLine dense className="custom-list">
        <ListItem activated>
          <ListItemGraphic>
            <i className="material-icons">inbox</i>
          </ListItemGraphic>
          <ListItemText>
            Text
            <ListItemSecondaryText>Line 2</ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListDivider inset />
        <ListItem selected>Text</ListItem>
        <ListDivider />
        <ListItem className="custom-list-item">
          Text
          <ListItemMeta>
            <i className="material-icons">delete</i>
          </ListItemMeta>
        </ListItem>
      </List>
    )
  ).toMatchSnapshot();
});
