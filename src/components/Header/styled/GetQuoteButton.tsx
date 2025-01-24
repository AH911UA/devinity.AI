import styled, { css } from "styled-components";
import colors from "../../colors";
import fonts from "../../fonts";

export const GetQuoteButton = styled.a<{
  mobile?: boolean;
}>`
  height: 80px;
  display: flex;
  align-items: center;

  color: ${colors.black};

  font-family: ${fonts.oxanium};
  font-size: 22px;
  font-weight: 700;

  background: linear-gradient(90deg, #62ed2e 0%, #2aa66a 100%),
    rgba(27, 21, 29, 0.78);

  padding: 0 50px;

  ${({ mobile }) =>
    mobile &&
    css`
      height: 35px;
      font-size: 16px;
      border-radius: 8px;
      padding: 0 20px;
      margin-right: 10px;
    `};
`;
