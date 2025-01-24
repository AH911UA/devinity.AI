import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const OutsourceLabel = styled.h3 `
  color: ${colors.white};
  font-family: ${fonts.oxanium};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`
