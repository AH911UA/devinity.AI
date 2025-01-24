import styled, { css } from "styled-components";
import { Link } from "gatsby";
import colors from "../colors";
import fonts from "../fonts";

const Button = styled(Link)`
  cursor: pointer;
  display: inline-flex;
  padding: ${({ padding }) => padding || "20px 30px"};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap || "120px"};
  color: ${({ color }) => color || colors.green};
  font-family: ${fonts.oxanium};
  font-size: ${({ fontSize }) => fontSize || "20px"};
  font-weight: 700;
  line-height: normal;
  border-radius: 9px;
  background: ${({ background }) => background || "rgba(98, 237, 46, 0.10)"};
  /* background: red; */
  overflow-wrap: ${({ whitespace }) => whitespace || "normal"};
  white-space: ${({ whitespace }) => whitespace || "normal"};
  text-decoration: none;

  ${({ isPhone }) =>
    isPhone &&
    `@media (max-width: 768px) {
      gap: inherit;
      display: flex;
      flex-direction: row-reverse;
    }`}

  ${({ $opacity }) =>
    $opacity &&
    css`
      background: rgba(98, 237, 46, ${$opacity});
    `};

  ${({ $borderColor }) =>
    $borderColor &&
    css`
      border: 1px solid ${$borderColor};
    `};

  @media (max-width: 768px) {
    width: ${({ widthMobile }) => widthMobile || "calc(100% - 50px)"};
  }
  @media (max-width: 400px) {
    gap: ${({ gap }) => gap || "30px"};
  }
`;

export const ButtonEvent = styled.button.withConfig({
  shouldForwardProp: (prop) => !["widthMobile", "$borderColor", "$opacity"].includes(prop),
})`
  cursor: pointer;
  display: inline-flex;
  padding: ${({ padding }) => padding || "20px 30px"};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap || "120px"};
  color: ${({ color }) => color || colors.green};
  font-family: ${fonts.oxanium};
  font-size: ${({ fontSize }) => fontSize || "20px"};
  font-weight: 700;
  line-height: normal;
  border-radius: 9px;
  background: ${({ background }) => background || "rgba(98, 237, 46, 0.10)"};

  white-space: ${({ whitespace }) => whitespace || "normal"};

  text-decoration: none;

  ${({ isPhone }) =>
    isPhone &&
    `@media (max-width: 768px) {
      gap: inherit;
      display: flex;
      flex-direction: row-reverse;
    }`}

  ${({ $opacity }) =>
    $opacity &&
    css`
      background: rgba(98, 237, 46, ${$opacity});
    `};

  ${({ $borderColor }) =>
    $borderColor &&
    css`
      border: 1px solid ${$borderColor};
    `};

  @media (max-width: 768px) {
    width: ${({ widthMobile }) => widthMobile || "calc(100% - 50px)"};
  }
  @media (max-width: 400px) {
    gap: 70px;
  }
`;

export default Button;
