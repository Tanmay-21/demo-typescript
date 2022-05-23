import React, { Component } from "react";

import "./Button.css";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
