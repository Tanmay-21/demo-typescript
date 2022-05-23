import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

type BackdropProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

type BackdropState = {};

const BackdropRoot = document.getElementById("backdrop-root");

class Backdrop extends Component<BackdropProps, BackdropState> {
  element: HTMLDivElement;
  constructor(props: BackdropProps) {
    super(props);
    this.element = document.createElement("div");
  }

  componentDidMount() {
    BackdropRoot?.appendChild(this.element);
  }

  componentWillUnmount() {
    BackdropRoot?.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="backdrop" onClick={this.props.onClick}></div>,
      this.element
    );
  }
}

export default Backdrop;
