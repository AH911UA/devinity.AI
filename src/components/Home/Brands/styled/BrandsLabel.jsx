import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const BrandsLabel = styled.p `
  color: ${colors.green};
  font-family: ${fonts.oxanium};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`
