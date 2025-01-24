import React from "react";
import Label from "../../UI/Label";
import {
  TechnologiesContainer,
  TechnologiesInner,
  TechnologiesItems,
} from "./styled";

import imagePlanetCut from "../../../images/planet-cut.png";

const Technologies = ({ data, title = "Technologies" }) => {
  return (
    <TechnologiesContainer>
      <Label>{title}</Label>

      <img
        src={imagePlanetCut}
        className={"planet-cut"}
        alt={"Planet Green Devinity LLC"}
      />

      <TechnologiesItems>
        {data?.map(({ title, icon, description }) => (
          <TechnologiesInner>
            <img src={icon} alt={`${title} with Devinity LLC`} />

            <h3>{title}</h3>

            <p>{description}</p>
          </TechnologiesInner>
        ))}
      </TechnologiesItems>
    </TechnologiesContainer>
  );
};

export default Technologies;
