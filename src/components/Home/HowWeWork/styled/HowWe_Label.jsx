import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const HowWe_Label = styled.div `
  color: ${colors.green};
  font-family: ${fonts.oxanium};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  font-size: ${({ fontSize }) => fontSize || "24px"};
  padding: ${({ padding }) => padding || "50px 0 30px"};
`
