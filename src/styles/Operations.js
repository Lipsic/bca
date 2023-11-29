import { styled } from "styled-components";

export const OperationsStyles = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 3em;
  div {
    display: flex;
    justify-content: center;
    gap: 1em;
  }
  button {
    border: none;
    width: 11em;
    border-radius: 4em;
    font-weight: 600;
    font-size: 0.9em;
  }

  button:hover {
    cursor: pointer;
  }

  .container {
    margin-top: 5em;
    min-height: 13rem;
    color: black;
    display: grid;
    border-radius: 10px;
    background-color: #f3f3f3;
  }
  .text {
    padding-left: 1.5em;
    display: flex;
    border: none;
  }
  .text p {
    color: #666;
    font-size: 1.2em;
  }
  .text-container {
    display: grid;
  }
  .svg-container {
    align-items: flex-start;
  }
  .svg-container div {
    object-fit: contain;
    width: 50px;
  }
  .svg-container img {
    object-fit: contain;
    padding: 2px;
    width: 40px;
    border-radius: 20px;
  }
  .btns {
    height: 2.4em;
    position: relative;
  }
  .btn-1 {
    background-color: #ffcb03;
    transform: translateY(-50%);
  }
  .btn-2 {
    background-color: #5ec576;
    transform: translateY(-50%);
  }
  .btn-3 {
    background-color: #ff585f;
    transform: translateY(-50%);
  }
  .occult {
    font-size: 0.1px;
  }
  .text {
    position: relative;
    display: flex;
  }
  .operantions--btn__animation {
    transform: translateY(-70%);
    transition: 200ms;
  }
`;
