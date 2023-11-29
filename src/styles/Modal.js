import { styled } from "styled-components";

export const ModalStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .modal-content {
    padding: 1.5em 2em;
    width: 60%;
    height: 100%;
    align-self: center;
    margin: 0 auto;
    z-index: 2;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  .close {
    max-width: 50px;
    position: absolute;
    right: 0;
    top: 0;
    border: gray 2px solid;
    border-radius: 50%;
    background-color: transparent;
  }
  .modal-bg {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: black;
    opacity: 0.3;
    z-index: 1;
  }
  .btn {
    width: 100%;
    margin: 0 auto;
  }
`;
