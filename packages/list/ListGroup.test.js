import React from "react";
import {
  ListGroup,
  ListGroupSubheader,
  ListGroupDivider,
  List,
  ListItem
} from ".";
import renderer from "react-test-renderer";

it("renders", () => {
  expect(
    renderer.create(
      <ListGroup className="custom">
        <ListGroupSubheader>List 1</ListGroupSubheader>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
        <ListGroupDivider />
        <ListGroupSubheader>List 2</ListGroupSubheader>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      </ListGroup>
    )
  ).toMatchSnapshot();
});
