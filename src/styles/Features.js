import { styled } from "styled-components";

export const FeaturesStyles = styled.div`
  max-width: 749px;
  justify-content: center;
  margin: 0 auto;
  h5 {
    font-weight: bold;
  }
  p {
    color: #666;
  }
  .row,
  .col {
    gap: 2em;
    margin-bottom: 1.5em;
    align-items: center;
  }

  .icon {
    width: 3em;
    height: 3em;
    margin-bottom: 1.4em;
    background-color: coral;
    border-radius: 100%;
    justify-content: center;
    display: flex;
  }
  .icon img {
    width: 2em;
  }
  .col div {
    vertical-align: middle;
    position: relative;
    /* display: flex;
    justify-content: start; */
  }
  .col div {
    max-width: 270px;
  }
  .col .lazy {
    width: 100%;
  }
`;
