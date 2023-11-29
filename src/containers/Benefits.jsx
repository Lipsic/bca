import React from "react";
import { BenefitsStyles } from "../styles/Benefits";
import ComponentHeader from "../styles/ComponentHeader";
import ControlledCarousel from "./Carroussel";

function Benefits() {
  return (
    <BenefitsStyles>
      <ComponentHeader>
        <h2>BENEFÍCIOS</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis.
        </h3>
      </ComponentHeader>
      <ControlledCarousel />
    </BenefitsStyles>
  );
}

export default Benefits;
