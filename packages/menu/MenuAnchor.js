import React from "react";
import classnames from "classnames";

export class MenuAnchor extends React.Component {
  state = { top: 0, left: 0 };

  componentDidMount() {
    this.setPosition(this.props.menuPosition);
  }

  componentWillReceiveProps({ menuPosition }) {
    if (menuPosition !== this.props.menuPosition) {
      this.setPosition(menuPosition);
    }
  }

  setPosition(menuPosition) {
    if (this.anchor && this.menu) {
      switch (menuPosition) {
        default:
        case "top-left":
          this.setState({ top: 0, left: 0 });
          break;
        case "top-right":
          this.setState({ top: 0, left: this.anchor.width });
          break;
        case "bottom-right":
          this.setState({
            top: this.anchor.offsetHeight,
            left: this.anchor.offsetWidth
          });
          break;
        case "bottom-left":
          this.setState({ top: this.anchor.offsetHeight, left: 0 });
      }
    }
  }

  render() {
    const { className, menu, menuPosition, children, ...other } = this.props;
    return (
      <div
        className={classnames("mdc-menu-anchor", className)}
        ref={anchor => {
          this.anchor = anchor;
        }}
        {...other}
      >
        {children}
        {menu &&
          React.cloneElement(menu, {
            menuRef: menu => {
              this.menu = menu;
            },
            style: {
              position: "absolute",
              top: this.state.top,
              left: this.state.left
            }
          })}
      </div>
    );
  }
}
