import React from "react";
import { DrawerContainer } from "./DrawerContainer";

export class TemporaryDrawer extends React.Component {
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

  onTransitionEnd = () => {
    this.setState({ animating: false });
  };

  onKeyDown = e => {
    (e.key === "Escape" || e.keyCode === 27) &&
      this.props.onClose &&
      this.props.onClose();
  };

  onClick = e => {
    e.target.classList.contains("mdc-drawer--temporary") &&
      this.props.onClose &&
      this.props.onClose();
  };

  open() {
    document.addEventListener("keydown", this.onKeyDown);
    document.body.classList.add("mdc-dialog-scroll-lock");
  }

  close() {
    document.removeEventListener("keydown", this.onKeyDown);
    document.body.classList.remove("mdc-dialog-scroll-lock");
  }

  render() {
    const { className, open, children, ...other } = this.props;
    return (
      <aside
        className={`mdc-drawer
        mdc-drawer--temporary
        mdc-typography
        ${className}
        ${open && "mdc-drawer--open"}
        ${this.state.animating && "mdc-drawer--animating"}
        `}
        onTransitionEnd={this.onTransitionEnd}
        onClick={this.onClick}
        {...other}
      >
        <DrawerContainer>{children}</DrawerContainer>
      </aside>
    );
  }
}
