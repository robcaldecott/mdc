import React from "react";
import ReactDOM from "react-dom";
import {
  Dialog,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton
} from ".";
import renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";

class TestDialog extends React.Component {
  render() {
    return (
      <Dialog {...this.props}>
        <DialogHeader>
          <DialogHeaderTitle>Dialog title</DialogHeaderTitle>
        </DialogHeader>

        <DialogBody>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogBody>

        <DialogFooter>
          <DialogFooterButton type="cancel">Decline</DialogFooterButton>
          <DialogFooterButton type="accept" action>
            Accept
          </DialogFooterButton>
        </DialogFooter>
      </Dialog>
    );
  }
}

it("renders", () => {
  expect(renderer.create(<TestDialog open />)).toMatchSnapshot();
});

it("renders into the DOM", () => {
  TestUtils.renderIntoDocument(<TestDialog open />);
});

it("mounts and unmounts", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TestDialog />, div);
  ReactDOM.render(<TestDialog open />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("handles ESC", () => {
  const onClose = jest.fn();
  TestUtils.renderIntoDocument(<TestDialog open onClose={onClose} />);
  document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 27 }));
  expect(onClose).toHaveBeenCalled();
});

it("handles newer ESC events", () => {
  const onClose = jest.fn();
  TestUtils.renderIntoDocument(<TestDialog open onClose={onClose} />);
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  expect(onClose).toHaveBeenCalled();
});

it("handles clicking outside the dialog", () => {
  const onClose = jest.fn();
  const dom = TestUtils.renderIntoDocument(
    <TestDialog open onClose={onClose} />
  );
  const dialog = TestUtils.findRenderedDOMComponentWithClass(dom, "mdc-dialog");
  TestUtils.Simulate.click(dialog);
  expect(onClose).toHaveBeenCalled();
});

it("does not close when clicking on the dialog", () => {
  const onClose = jest.fn();
  const dom = TestUtils.renderIntoDocument(
    <TestDialog open onClose={onClose} />
  );
  const surface = TestUtils.findRenderedDOMComponentWithClass(
    dom,
    "mdc-dialog__surface"
  );
  TestUtils.Simulate.click(surface);
  expect(onClose).not.toHaveBeenCalled();
});

it("handles transition end", () => {
  const dom = TestUtils.renderIntoDocument(<TestDialog open />);
  const dialog = TestUtils.findRenderedDOMComponentWithClass(dom, "mdc-dialog");
  const surface = TestUtils.findRenderedDOMComponentWithClass(
    dom,
    "mdc-dialog__surface"
  );
  TestUtils.Simulate.transitionEnd(dialog, { target: surface });
  const accept = TestUtils.findRenderedDOMComponentWithClass(
    dom,
    "mdc-dialog__footer__button--accept"
  );
  expect(document.activeElement).toEqual(accept);
});
