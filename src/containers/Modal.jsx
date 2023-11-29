import React from "react";
import OpenAcc from "./OpenAcc";
import { ModalStyles } from "../styles/Modal";
import { Col, Container } from "react-bootstrap";

function Modal({ openAccountHandler }) {
  const closeHandler = function () {
    openAccountHandler(false);
  };
  return (
    <ModalStyles>
      <Container className="modal-content">
        <button className="close" onClick={closeHandler}>
          X
        </button>
        <p></p>
        <Col>
          <OpenAcc />
        </Col>
      </Container>
      <div onClick={closeHandler} className="modal-bg"></div>
    </ModalStyles>
  );
}

export default Modal;
