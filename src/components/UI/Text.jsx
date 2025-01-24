import styled from "styled-components";
import colors from "../colors";

const Text = styled.p`
  color: ${({ color }) => color || colors.white || colors.silverText};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 168.5%;
`;

export default Text;
