import styled from "styled-components";
import colors from "../colors";
import fonts from "../fonts";

const ButtonSocial = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  text-decoration: none;

  p {
    color: ${colors.white};
    font-family: ${fonts.oxanium};
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
  }
`;

export default ButtonSocial;
