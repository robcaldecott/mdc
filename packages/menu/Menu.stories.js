import React from "react";
import { Menu, MenuItem, MenuDivider } from ".";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("menu", module)
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
  });
