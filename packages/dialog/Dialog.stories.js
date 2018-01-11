import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton
} from ".";
import { storiesOf } from "@storybook/react";

storiesOf("Dialog", module).add("dialog", () => {
  class ControlledDialog extends React.Component {
    state = { open: false, focus: false };
    render() {
      return (
        <div style={{ minHeight: "1000px" }}>
          <Dialog
            open={this.state.open}
            onClose={() => this.setState({ open: false })}
          >
            <DialogHeader>
              <DialogHeaderTitle>Dialog title</DialogHeaderTitle>
            </DialogHeader>

            <DialogBody>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogBody>

            <DialogFooter>
              <DialogFooterButton
                onClick={() => this.setState({ open: false })}
                type="cancel"
              >
                Decline
              </DialogFooterButton>
              <DialogFooterButton
                type="accept"
                action
                onClick={() => this.setState({ open: false })}
              >
                Accept
              </DialogFooterButton>
            </DialogFooter>
          </Dialog>

          <button
            className="mdc-button"
            onClick={() => this.setState(state => ({ open: !state.open }))}
          >
            Toggle
          </button>
        </div>
      );
    }
  }
  return <ControlledDialog />;
});
