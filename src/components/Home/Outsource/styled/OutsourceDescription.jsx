import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

export const OutsourceDescription = styled.p `
  color: #D8D8D8;
  font-family: ${fonts.oxanium};
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;
  
  span {
    color: ${colors.green};
    font-family: ${fonts.oxanium};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
