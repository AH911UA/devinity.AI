import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const DoYouWantLabel = styled.p `
  max-width: 770px;
  color: ${colors.white};
  font-family: ${fonts.oxanium};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;

  @media (max-width: 768px) {
    text-transform: none;
    font-size: 32px;
  }
`
