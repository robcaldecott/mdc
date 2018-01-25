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

storiesOf("dialog", module).add("controlled", () => {
  class ControlledDialog extends React.Component {
    state = { open: false };

    handleClose = () => {
      this.setState({ open: false }, () => this.button.focus());
    };

    render() {
      return (
        <div style={{ minHeight: "1000px" }}>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            onReady={() => this.accept.focus()}
          >
            <DialogHeader>
              <DialogHeaderTitle>Dialog title</DialogHeaderTitle>
            </DialogHeader>

            <DialogBody>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogBody>

            <DialogFooter>
              <DialogFooterButton onClick={this.handleClose}>
                Decline
              </DialogFooterButton>
              <DialogFooterButton
                action
                onClick={this.handleClose}
                buttonRef={button => {
                  this.accept = button;
                }}
              >
                Accept
              </DialogFooterButton>
            </DialogFooter>
          </Dialog>

          <button
            className="mdc-button"
            onClick={() => this.setState({ open: true })}
            ref={button => {
              this.button = button;
            }}
          >
            Toggle
          </button>
        </div>
      );
    }
  }
  return <ControlledDialog />;
});
