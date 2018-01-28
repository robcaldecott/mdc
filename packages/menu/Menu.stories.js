import React from "react";
import { Menu, MenuItem, MenuDivider, MenuAnchor } from ".";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";

storiesOf("menu", module)
  .addDecorator(withKnobs)
  .add("open", () => (
    <Menu open onSelected={action("onSelected")} onCancel={action("onCancel")}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuDivider />
      <MenuItem disabled>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
  ))
  .add("controlled", () => {
    class ControlledMenu extends React.Component {
      state = { open: false, selectedIndex: null };

      render() {
        return (
          <div style={{ position: "relative" }}>
            <button
              className="mdc-button"
              onClick={() => this.setState({ open: true })}
            >
              Open
            </button>

            <Menu
              open={this.state.open}
              onSelected={selectedIndex =>
                this.setState({ selectedIndex, open: false })
              }
              onCancel={() => this.setState({ open: false })}
              style={{ position: "absolute", top: 8, left: 8 }}
            >
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuDivider />
              <MenuItem disabled>Item 3</MenuItem>
              <MenuItem>Item 4</MenuItem>
            </Menu>

            <p>Selected index: {this.state.selectedIndex}</p>
          </div>
        );
      }
    }
    return <ControlledMenu />;
  })
  .add("anchor", () => {
    class ControlledMenu extends React.Component {
      state = { open: false };

      render() {
        const menuPosition = select(
          "menuPosition",
          ["top-left", "top-right", "bottom-right", "bottom-left"],
          "top-left"
        );
        return (
          <div style={{ position: "relative" }}>
            <MenuAnchor
              style={{ position: "absolute", top: 0, left: 0 }}
              menu={
                <Menu
                  open={this.state.open}
                  onCancel={() => this.setState({ open: false })}
                >
                  <MenuItem>Item 1</MenuItem>
                  <MenuItem>Item 2</MenuItem>
                </Menu>
              }
              menuPosition={menuPosition}
            >
              <button
                className="mdc-button"
                onClick={() => this.setState({ open: true })}
              >
                Open
              </button>
            </MenuAnchor>
          </div>
        );
      }
    }
    return <ControlledMenu />;
  });
