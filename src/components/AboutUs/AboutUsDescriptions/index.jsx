import React from "react";
import Horizontal from "../../UI/Horizontal";
import styled from "styled-components";
import { HowWe_Label } from "../../Home/HowWeWork/styled/HowWe_Label";
import H3 from "../../UI/H3";
import { useHomeData } from "../../../hooks/query";

const AboutUsDescriptions = () => {
  const { aboutUsDescriptions: items } = useHomeData();

  const showText = (text) => {
    const firstText = text.split(":")[0];
    const secondText = text.split(":")[1];
    return (
      <>
        <b>{firstText}:</b>
        {secondText}
      </>
    );
  };

  return (
    <Horizontal style={{ marginTop: 150 }}>
      {items?.map((item) => (
        <Item>
          <HowWe_Label fontSize={"40px"} padding={"0 0 30px"}>
            {item?.label}
          </HowWe_Label>

          <H3>
            {item?.description}

            {/* {item?.list && (
              <ul>
                {item?.list?.map((item, index) => (
                  <li key={index}>{showText(item)}</li>
                ))}
              </ul>
            )} */}
          </H3>
        </Item>
      ))}
    </Horizontal>
  );
};

const Item = styled.div`
  display: block;
  flex: 1 1 250px;
  padding: 50px 85px;

  &:nth-child(odd) {
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      #0e0a0e 75.75%,
      rgba(14, 10, 14, 0) 108.27%
    );
  }

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;

export default AboutUsDescriptions;
