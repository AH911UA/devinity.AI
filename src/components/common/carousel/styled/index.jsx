import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

export const CaurouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  div {
    position: relative;
    width: 100%;
    height: 100%;

    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

    overflow: hidden;

    .bg_img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center center;
      z-index: -1;

      @media (max-width: 999px) {
        width: 100%;
        /* height: auto; */
        object-position: center center;
      }
    }

    .desc {
      position: absolute;
      bottom: -100vh;

      width: 100%;
      height: max-content;

      padding: 20px 30px;

      background-color: ${colors.purpleTransperent500};
      box-sizing: border-box;
      border-radius: 0;

      display: flex;
      align-items: flex-start;
      gap: 8px;

      transition: 0.3s ease-in-out;

      p {
        color: #fbfbfbcf;
        width: 100%;
        font-family: DM Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 26.96px;
        text-align: left;
      }
    }

    @media (max-width: 1290px) {
      border-radius: 0;
    }
  }

  &:hover {
    .desc {
      bottom: 0;
    }
  }

  .dots {
    position: absolute;
    right: 37px;
    top: 38px;

    width: max-content;
    height: max-content;

    display: flex;
    gap: 28px;

    padding: 15px;
    span,
    .dots_current {
      position: relative;
      display: block;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #b1b3b2;
    }

    .dots_current {
      &::after {
        position: absolute;
        transform: translate(-26%, -26%);
        /* left: -11px;
        top: -11px; */
        content: "";
        display: block;

        width: 22px;
        height: 22px;

        border: 1px solid #b1b3b2;
        border-radius: 50%;
      }
    }

    @media (max-width: 1290px) {
      top: auto;
      right: auto;
      bottom: -56px;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 678px) {
      bottom: -40px;
    }
  }

  @media (max-width: 1290px) {
    magin-bottom: 100px;
  }

  @media (max-width: 678px) {
    magin-bottom: 50px;
    max-height: 100%;
  }
`;
