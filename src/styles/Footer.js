import { styled } from "styled-components";

export const FooterStyles = styled.footer`
  max-width: 100%;
  margin: 0 auto;
  border-top: #c5c5c5 solid 1px;
  margin-top: 10em;
  background-color: #d3d3d3;
  bottom: 0;
  min-height: 10em;
  .wrapper {
    margin: 0 auto;
    margin-top: 2em;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1em;
    column-gap: 10px;
    padding-left: 0;
  }
  a {
    font-size: x-small;
    color: black;
    text-decoration: none;
    margin-right: 1.3em;
    white-space: nowrap;
  }
  a:hover {
    color: red;
  }
  p {
    font-size: x-small;
  }
`;
