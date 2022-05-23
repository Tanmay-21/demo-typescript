import React, { Component } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import "./Modal.css";

type ModalLayoutProps = {};

type ModalLayoutState = {};

const ModalRoot = document.getElementById("modal-root");

class ModalLayout extends Component<ModalLayoutProps, ModalLayoutState> {
  element: HTMLDivElement;

  constructor(props: ModalLayoutProps) {
    super(props);
    this.element = document.createElement("div");
  }

  componentDidMount() {
    ModalRoot?.appendChild(this.element);
  }

  componentWillUnmount() {
    ModalRoot?.removeChild(this.element);
  }

  content = (<div className="modal-layout">Works!</div>);

  render() {
    return ReactDOM.createPortal(this.content, this.element);
  }
}

type ModalProps = {
  show: boolean;
  onCancel?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

type ModalState = {};

class Modal extends Component<ModalProps, ModalState> {
  render() {
    return (
      <React.Fragment>
        {this.props.show && <Backdrop onClick={this.props.onCancel} />}
        {this.props.show && <ModalLayout />}
      </React.Fragment>
    );
  }
}

export default Modal;
