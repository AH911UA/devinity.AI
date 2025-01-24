import styled from "styled-components";
import fonts from "../../../fonts";

export const OutsourceKeys = styled.div `
  display: flex;
  flex-direction: row;
  gap: 70px;
  
  p {
    color: #AE59F3;
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 185%;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
