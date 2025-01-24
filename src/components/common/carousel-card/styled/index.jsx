import styled from "styled-components";
import colors from "../../../colors";

export const CaurouselCardContainer = styled.div`
  max-height: 700px;
  min-height: 500px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  .card_slide--container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: max-content;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    flex-direction: column;
    gap: 10px;

    background-color: #ffffff1a;
    border-radius: 25px;
    overflow: hidden;

    @media (max-width: 1290px) {
      border-radius: 60px;
      magin-bottom: 100px;
    }

    @media (max-width: 900px) {
      border-radius: 25px;
    }

    @media (max-width: 769px) {
      display: block;
    }

    @media (max-width: 400px) {
      margin-top: 20px;
    }

    &:hover {
      .desc {
        bottom: 0;
      }
    }
  }

  .bg_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    z-index: -1;
  }

  .card_slide--img {
    height: 220px;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    overflow: hidden;

    @media (max-width: 900px) {
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
    }
  }

  .card_slide--content {
    padding: 10px 30px 22px;

    @media (max-width: 900px) {
      padding: 10px 20px 20px;
    }
    span {
      color: ${colors.purple};

      font-size: 18px;
      font-weight: 300;
      line-height: 35.1px;
    }

    h3 {
      color: ${colors.white};
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      text-transform: uppercase;

      @media (max-width: 900px) {
        font-size: 18px;
        margin: 8px 0;
      }
    }

    p {
      color: ${colors.white};
      font-size: 18px;
      font-weight: 300;
      line-height: 35.1px;
      margin-bottom: 20px;
      @media (max-width: 900px) {
        font-size: 14px;
        margin-bottom: 10px;
      }
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
      bottom: -90px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
