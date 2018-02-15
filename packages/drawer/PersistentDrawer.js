import React from "react";
import classnames from "classnames";
import { DrawerContainer } from "./DrawerContainer";

export class PersistentDrawer extends React.Component {
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

  onTransitionEnd = () => {
    this.setState({ animating: false });
  };

  handleKeyDown = e => {
    (e.key === "Escape" || e.keyCode === 27) &&
      this.props.onClose &&
      this.props.onClose();
  };

  open() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  close() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { open, className, children, ...other } = this.props;

    return (
      <aside
        className={classnames(
          "mdc-drawer",
          "mdc-drawer--persistent",
          "mdc-typography",
          {
            "mdc-drawer--open": open,
            "mdc-drawer--animating": this.state.animating
          },
          className
        )}
        onTransitionEnd={this.onTransitionEnd}
        {...other}
      >
        <DrawerContainer>{children}</DrawerContainer>
      </aside>
    );
  }
}
