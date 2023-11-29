import { styled } from "styled-components";

export const BenefitsStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;
  .row--benefits {
    background-color: #c33;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .row--1 {
    min-height: 20em;
  }
  .row--2 {
    min-height: 16em;
  }
`;
