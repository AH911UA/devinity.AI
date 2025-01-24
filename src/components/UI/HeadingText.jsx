import styled, { css } from "styled-components";
import colors from "../colors";
import fonts from "../fonts";

const HeadingText = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || "850px"};
  position: relative;
  color: ${({ textColor }) => textColor || colors.silver};
  font-family: ${fonts.oxanium};
  font-size: ${({ fontSize }) => fontSize || "65px"};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  line-height: normal;
  padding: ${({ padding }) => padding || "70px 0"};

  .pre-title {
    color: #62ED2E !important;
  }

  h1 {
    color: #e6e6e6;
    font-family: ${fonts.oxanium};
    font-size: 72px;
    font-weight: 700;

    word-wrap: break-word;
    overflow-wrap: anywhere;

    margin: 0;

    @media (max-width: 768px) {
      font-size: 35px;
      line-height: 50px;
    }

    ${({ isPhone }) =>
      isPhone &&
      `@media (max-width: 430px) {
        font-size: 1.5rem;
      }`}
  }

  span {
    color: ${colors.green};
  }

  .portfolio-status {
    color: #8155d1;

    font-family: ${fonts.oxanium};
    font-size: 22px;
    font-weight: 700;

    margin-top: 50px;
  }

  @media screen and (max-width: 1000px) {
    ${({ hideOn1000 }) =>
      hideOn1000 &&
      css`
        h1 {
          display: none;
        }
      `}
  }

  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 50px;

    padding: ${({ paddingMobile }) => paddingMobile || ""};
  }
`;

export default HeadingText;
