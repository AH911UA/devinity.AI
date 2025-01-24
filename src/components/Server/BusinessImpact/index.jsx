import React from "react";
import Label from "../../UI/Label";
import { Wrapper, Inner, TextWrapper } from "./styled";

import imagePlanetCut from "../../../images/planet-cut.png";
import ButtonSquare from "../../UI/ButtonSquare";
import { Planet } from "./styled";

const DATA = [
  {
    title: "Cost Efficiency",
    text: "Optimize resource utilization by leveraging both on-premises infrastructure and scalable cloud resources, reducing operational costs and improving ROI.",
  },
  {
    title: "Scalability and Performance  ",
    text: "Scale applications and services independently based on demand, optimizing performance and enhancing user experience.",
  },
  {
    title: "Agility and Innovation",
    text: "Accelerate time-to-market for new applications and features by deploying them across hybrid environments, fostering agility and responsiveness to market demands.",
  },
  {
    title: "Operational Efficiency",
    text: "Simplify maintenance and updates by focusing on specific microservices, reducing operational complexities and improving overall system stability.",
  },
  {
    title: "Resilience and Reliability",
    text: "Enhance business continuity with resilient architecture that spans on-premises and cloud environments, minimizing downtime and ensuring data integrity.",
  },
  {
    title: "Competitive Advantage",
    text: "Foster innovation through faster development cycles and easier experimentation with new features, gaining a competitive edge in the market.",
  },
];

const BusinessImpact = () => {
  return (
    <Wrapper>
      <Label
        dangerouslySetInnerHTML={{ __html: "Business Impact" }}
        margin={"120px 0 10px"}
      />

      <Inner>
        {DATA.map(({ title, text }) => (
          <div key={title}>
            <h3>{title}</h3>

            <p>{text}</p>
          </div>
        ))}
      </Inner>

      <Planet>
        <img
          src={imagePlanetCut}
          alt={"Planet Green Devinity LLC"}
          height={264}
        />
      </Planet>

      <div className={"button"}>
        <ButtonSquare href={process.env.GATSBY_WHATSAPP} target={"_blank"}>
          Request a Call
        </ButtonSquare>
      </div>
    </Wrapper>
  );
};

export default BusinessImpact;
