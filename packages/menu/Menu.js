import React from "react";
import { bool, func } from "prop-types";
import classnames from "classnames";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatingOpen: false,
      animatingClosed: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.open && this.open();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("click", this.handleClick);
    // Tidy up handlers
    cancelAnimationFrame(this.openAnimationId);
    cancelAnimationFrame(this.closeAnimationId);
    clearTimeout(this.openTimerId);
    clearTimeout(this.closeTimerId);
  }

  componentWillReceiveProps({ open }) {
    if (open !== this.props.open) {
      open ? this.open() : this.close();
    }
  }

  open() {
    this.openAnimationId = requestAnimationFrame(() => {
      this.setState({ animatingOpen: true });
      this.openTimerId = setTimeout(() => {
        this.openTimerId = 0;
        this.setState({ animatingOpen: false });
      }, 120);
    });
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleClick);
  }

  close() {
    this.closeAnimationId = requestAnimationFrame(() => {
      this.setState({ animatingClosed: true });
      this.closeTimerId = setTimeout(() => {
        this.closeTimerId = 0;
        this.setState({ animatingClosed: false });
      }, 75);
    });
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("click", this.handleClick);
  }

  handleKeyDown(e) {
    this.props.open &&
      (e.key === "Escape" || e.keyCode === 27) &&
      this.props.onCancel();
  }

  handleClick(e) {
    this.props.open &&
      this.menu &&
      !this.menu.contains(e.target) &&
      this.props.onCancel();
  }

  render() {
    const { open, className, children, onSelected, ...other } = this.props;
    return (
      <div
        className={classnames(
          "mdc-simple-menu",
          {
            "mdc-simple-menu--open": open,
            "mdc-simple-menu--animating-open": this.state.animatingOpen,
            "mdc-simple-menu--animating-closed": this.state.animatingClosed
          },
          className
        )}
        tabIndex="-1"
        ref={menu => {
          this.menu = menu;
        }}
        {...other}
      >
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          {React.Children.map(children, (item, index) =>
            React.cloneElement(item, {
              onClick: () => onSelected(index, item)
            })
          )}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  open: bool,
  onSelected: func,
  onCancel: func
};

Menu.defaultProps = {
  onSelected: () => {},
  onCancel: () => {}
};

export default Menu;
