import { styled } from "styled-components";

export const HeaderStyles = styled.header`
  font-family: "Poppins", sans-serif;
`;

export const ContainerStyles = styled.div`
  padding-bottom: 10px;
  margin-top: 2em;
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 20em 1fr;
  margin-left: 6em;
  margin-right: 6em;
  justify-content: space-evenly;
  .logo {
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    align-items: center;
    position: relative;
    color: #c00;
  }
  .logo h4 {
    font-size: 2em;
    font-weight: bold;
    display: flex;
  }
`;
export const TableLinks = styled.div`
  align-self: center;
  min-height: 3em;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.4em;
    justify-content: center;
    align-items: center;
  }
  a {
    color: black;
    text-decoration: none;

    font-size: 1.2em;
  }
  a:hover {
    cursor: pointer;
    color: red;
    transition: 300ms;
    font-size: 130%;
  }
  a:not(:hover) {
    transition: 200ms;
  }
  .fadding-in {
    text-decoration: none;
    color: gray;
    font-size: 105%;
  }

  .link--3 {
    background-color: #c00;
    border-radius: 10px;
    padding: 0.25em 0.8em 0.25em 0.8em;
  }
  .link--3:hover {
    color: black;
    font-size: 120%;
  }
`;
