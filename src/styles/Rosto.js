import { styled } from "styled-components";

export const RostoStyles = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 5em;
  border-bottom: #d3d3d3 solid 1px;
  h1 {
    margin-bottom: 1em;
  }
  span {
    color: red;
  }
  p {
    color: #161616;
    font-size: 18px;
    font-weight: 400;
    max-width: 17em;
    line-height: 22px;
    height: 1.5em;
  }
  button {
    border: none;
    background-color: #c00;
    border-radius: 8px;
    padding: 0.7em 1em;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  button:hover {
    background-color: royalblue;
  }
  .rosto--text {
    display: flex;
    align-items: start;
    margin-bottom: 1.3em;
    margin-left: 1em;
  }
  .rosto--icon {
    margin-right: 8px;
  }
  .rosto--icon img {
    width: 35px;
  }
  .img {
    align-self: end;
  }
  .img img {
    width: 20em;
    align-items: end;
    fill: red;
  }
`;
