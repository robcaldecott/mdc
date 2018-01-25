import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemGraphic,
  ListItemMeta,
  ListDivider,
  ListGroup,
  ListGroupSubheader,
  ListGroupDivider,
  NavList,
  NavListItem,
  NavListDivider
} from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("list", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    const twoLine = boolean("twoLine", false);
    const graphics = boolean("graphics", false);
    const meta = boolean("meta", false);
    const dividers = boolean("dividers", false);
    const padded = boolean("padded dividers", false);
    const inset = boolean("inset dividers", false);
    const selected = boolean("selected items", false);
    const activated = boolean("activate first item", false);
    return (
      <List
        nonInteractive={boolean("nonInteractive", false)}
        dense={boolean("dense", false)}
        twoLine={twoLine}
      >
        {[...Array(5).keys()].map(index => (
          <Fragment>
            <ListItem selected={selected} activated={activated && index === 0}>
              {graphics && (
                <ListItemGraphic>
                  <i className="material-icons">star</i>
                </ListItemGraphic>
              )}
              {!twoLine && `Item ${index + 1}`}
              {twoLine && (
                <ListItemText>
                  Item {index + 1}
                  <ListItemSecondaryText>
                    Secondary item {index + 1}
                  </ListItemSecondaryText>
                </ListItemText>
              )}
              {meta && (
                <ListItemMeta>
                  <i className="material-icons">delete</i>
                </ListItemMeta>
              )}
            </ListItem>
            {dividers && <ListDivider padded={padded} inset={inset} />}
          </Fragment>
        ))}
      </List>
    );
  })
  .add("groups", () => (
    <ListGroup>
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
  ))
  .add("nav list", () => (
    <NavList onClick={e => e.preventDefault()}>
      <NavListItem href="#item1" selected>
        <ListItemGraphic>
          <i className="material-icons">inbox</i>
        </ListItemGraphic>Item 1
      </NavListItem>
      <NavListItem href="#item2">
        <ListItemGraphic>
          <i className="material-icons">star</i>
        </ListItemGraphic>Item 2
      </NavListItem>
      <NavListDivider />
      <NavListItem href="#item3">
        <ListItemGraphic>
          <i className="material-icons">delete</i>
        </ListItemGraphic>Item 3
      </NavListItem>
    </NavList>
  ));
