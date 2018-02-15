import React from "react";
import classnames from "classnames";
import { DialogSurface } from "./DialogSurface";

export class Dialog extends React.Component {
  state = { animating: this.props.open };

  componentDidMount() {
    this.props.open && this.open();
  }

  componentWillReceiveProps({ open }) {
    if (open !== this.props.open) {
      open ? this.open() : this.close();
      this.setState({ animating: true });
    }
  }

  componentWillUnmount() {
    this.close();
  }

  open() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.body.classList.add("mdc-dialog-scroll-lock");
  }

  close() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.body.classList.remove("mdc-dialog-scroll-lock");
  }

  handleKeyDown = e => {
    (e.key === "Escape" || e.keyCode === 27) && this.handleClose();
  };

  handleClose = () => {
    this.props.onClose && this.props.onClose();
  };

  handleTransitionEnd = e => {
    if (e.target === this.surface) {
      this.setState({ animating: false });
      this.props.onReady && this.props.onReady();
    }
  };

  render() {
    const { open, className, onReady, children, ...other } = this.props;

    return (
      <aside
        className={classnames(
          "mdc-dialog",
          {
            "mdc-dialog--animating": this.state.animating,
            "mdc-dialog--open": open
          },
          className
        )}
        role="alertdialog"
        onClick={this.handleClose}
        onTransitionEnd={this.handleTransitionEnd}
        {...other}
      >
        <DialogSurface
          surfaceRef={surface => {
            this.surface = surface;
          }}
        >
          {children}
        </DialogSurface>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}
