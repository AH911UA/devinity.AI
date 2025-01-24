import styled, { css } from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

const PortFolioTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 430px;
  grid-template-rows: 1fr;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff1a;
  backdrop-filter: blur(50px);

  border: 1px solid #ffffff33;
  border-radius: 50px;

  margin-bottom: 70px;
  margin-top: 110px;
  padding: 60px 80px;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    padding: 40px 23px;
    gap: 0px;
  }

  & .right-images {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    height: 600px;

    div:first-of-type {
      position: absolute !important;
      left: 0px !important;
      top: 0px;
      height: 592px !important;
    }
    div:last-of-type {
      position: absolute !important;
      left: 145px !important;
      top: 0px;
      height: 592px !important;
    }

    @media screen and (max-width: 1000px) {
      height: 385px;
      max-width: 320px;
      div:first-of-type {
        position: relative !important;
        height: 349px !important;
        width: 200px;
        margin-left: -50px;
      }
      div:last-of-type {
        height: 385px !important;
        width: 210px;
        top: 0px !important;
        left: auto !important;
        right: -80px !important;
      }
    }

    @media screen and (max-width: 770px) {
      height: 300px;
      max-width: 320px;
      div:first-of-type {
        position: relative !important;
        height: 249px !important;
        width: 200px !important;
        margin-left: -20px;
      }
      div:last-of-type {
        height: 285px !important;
        width: 210px;
        top: 10px !important;
        left: auto !important;
        right: -130px !important;
      }
    }
  }

  & > h1 {
    display: none;
    color: #e6e6e6;
    font-family: ${fonts.oxanium};
    font-size: 35px;
    line-height: 50px;
    font-weight: 700;

    word-wrap: break-word;
    overflow-wrap: anywhere;

    margin: 0;

    span {
      color: ${colors.green};
    }

    @media screen and (max-width: 1001px) {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    ${({ reverseOn1000 }) =>
      reverseOn1000 &&
      css`
        display: flex;
        flex-direction: column-reverse;
        border-radius: 40px;
      `}
  }

  @media screen and (max-width: 768px) {
    ${({ reverse }) =>
      reverse &&
      css`
        display: flex;
        flex-direction: column-reverse;
      `}
  }
`;

export default PortFolioTop;
