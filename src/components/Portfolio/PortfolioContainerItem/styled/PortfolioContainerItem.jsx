import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const PortfolioContainerItem = styled.div`
  position: relative;
  max-width: 100%;
  margin: 50px 0 100px;

  h2 {
    color: ${colors.silver};
    font-family: ${fonts.oxanium};
  }

  & .row {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 35px;
    margin-bottom: 26px;

    & > div:first-of-type {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .text {
        width: 100%;
        max-width: 550px;
        color: ${colors.silver100};
        font-size: 18px;
        font-weight: 300;
        line-height: 35.1px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

        word-wrap: break-word;
        box-sizing: border-box;

        padding: 1px;
        p {
          color: inherit;
        }

        @media (max-width: 1081px) {
          max-width: 100%;
        }
      }
    }

    & > div:last-of-type {
      margin-top: 60px;
      img {
        max-width: 100%;

      }
    }


    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  .only-mobile {
    display: none;
    @media (max-width: 1081px) {
      display: block;
    }

    &>div {
      @media (max-width: 1081px) {
        width: 90%;
        margin: auto;
      }
    }
  }

  .only-desktop {
    display: block;
    @media (max-width: 1080px) {
      display: none;
    }
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;