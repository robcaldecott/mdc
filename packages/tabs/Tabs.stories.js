import React, { Fragment } from "react";
import { TabBar, Tab, TabIcon, TabIconText } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

storiesOf("tabs", module)
  .addDecorator(withKnobs)
  .add("props", () => {
    class ControlledTabs extends React.Component {
      state = {
        tabs: [
          { label: "Item One", icon: "phone" },
          { label: "Item Two", icon: "favorite" },
          { label: "Three", icon: "star" }
        ],
        active: 0
      };

      render() {
        const type = select(
          "type",
          ["text", "icon", "icons with text"],
          "text"
        );
        const indicator = select(
          "indicator",
          ["normal", "primary", "accent"],
          "normal"
        );

        return (
          <Fragment>
            <TabBar
              icons={type === "icon"}
              iconsWithText={type === "icons with text"}
              {...(indicator === "normal" ? {} : { indicator })}
            >
              {this.state.tabs.map(({ label, icon }, index) => (
                <Tab
                  key={index}
                  active={index === this.state.active}
                  onClick={() => this.setState({ active: index })}
                  iconAndText={type === "icons with text"}
                >
                  {type === "text" && label}
                  {type === "icon" && <TabIcon>{icon}</TabIcon>}
                  {type === "icons with text" && (
                    <Fragment>
                      <TabIcon>{icon}</TabIcon>
                      <TabIconText>{label}</TabIconText>
                    </Fragment>
                  )}
                </Tab>
              ))}
            </TabBar>
            <p>Active tab: {this.state.active}</p>
          </Fragment>
        );
      }
    }
    return <ControlledTabs />;
  });
