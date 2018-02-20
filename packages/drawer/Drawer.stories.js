import React from "react";
import {
  PermanentDrawer,
  DrawerToolbarSpacer,
  DrawerContent,
  PersistentDrawer,
  DrawerHeader,
  DrawerHeaderContent,
  TemporaryDrawer
} from ".";
import { storiesOf } from "@storybook/react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarTitle
} from "@mdc/toolbar";
import {
  NavList,
  NavListItem,
  NavListDivider,
  ListItemGraphic
} from "@mdc/list";

const DemoToolbar = ({ menu, onMenu }) => (
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection align="start">
        {menu && (
          <ToolbarIcon menu onClick={onMenu}>
            menu
          </ToolbarIcon>
        )}
        <ToolbarTitle>Title</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

const NavMenu = () => (
  <NavList>
    <NavListItem selected>
      <ListItemGraphic>
        <i className="material-icons">home</i>
      </ListItemGraphic>Home
    </NavListItem>
    <NavListItem>
      <ListItemGraphic>
        <i className="material-icons">mail</i>
      </ListItemGraphic>Inbox
    </NavListItem>
    <NavListItem>
      <ListItemGraphic>
        <i className="material-icons">send</i>
      </ListItemGraphic>Sent Items
    </NavListItem>
    <NavListDivider />
    <NavListItem>
      <ListItemGraphic>
        <i className="material-icons">delete</i>
      </ListItemGraphic>Deleted Items
    </NavListItem>
  </NavList>
);

storiesOf("drawer", module)
  .add("permanent (above toolbar)", () => (
    <div
      style={{
        display: "flex"
      }}
    >
      <PermanentDrawer style={{ height: "100vh" }}>
        <DrawerToolbarSpacer />
        <DrawerContent>
          <NavMenu />
        </DrawerContent>
      </PermanentDrawer>

      <div style={{ flexGrow: 1 }}>
        <DemoToolbar />
        <main>Content</main>
      </div>
    </div>
  ))
  .add("permanent drawer below toolbar", () => (
    <div>
      <DemoToolbar />
      <div style={{ display: "flex" }}>
        <PermanentDrawer style={{ height: "calc(100vh - 64px)" }}>
          <NavMenu />
        </PermanentDrawer>
        <main>Content</main>
      </div>
    </div>
  ))
  .add("persistent drawer", () => {
    class ControlledPersistentDrawer extends React.Component {
      state = { open: false };

      render() {
        return (
          <div style={{ display: "flex" }}>
            <PersistentDrawer
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
              style={{ height: "100vh" }}
            >
              <DrawerHeader className="mdc-theme--primary-bg">
                <DrawerHeaderContent className="mdc-theme--text-primary-on-primary">
                  Header
                </DrawerHeaderContent>
              </DrawerHeader>
              <DrawerContent>
                <NavMenu />
              </DrawerContent>
            </PersistentDrawer>
            <div style={{ flexGrow: 1 }}>
              <DemoToolbar
                menu
                onMenu={() => this.setState(state => ({ open: !state.open }))}
              />
              <main>Content</main>
            </div>
          </div>
        );
      }
    }
    return <ControlledPersistentDrawer />;
  })
  .add("temporary", () => {
    class ControlledTemporaryDrawer extends React.Component {
      state = { open: false };

      render() {
        return (
          <div>
            <DemoToolbar
              menu
              onMenu={() => this.setState(state => ({ open: !state.open }))}
            />

            <TemporaryDrawer
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
            >
              <DrawerHeader className="mdc-theme--primary-bg">
                <DrawerHeaderContent className="mdc-theme--text-primary-on-primary">
                  Header
                </DrawerHeaderContent>
              </DrawerHeader>
              <DrawerContent>
                <NavMenu />
              </DrawerContent>
            </TemporaryDrawer>

            <main>Content</main>
          </div>
        );
      }
    }
    return <ControlledTemporaryDrawer />;
  });
