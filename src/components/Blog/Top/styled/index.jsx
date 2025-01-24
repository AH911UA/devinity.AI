import styled from "styled-components";
import fonts from "../../../fonts";
import imageLines from "../../../../images/svg/home-top-lines.svg";
import colors from "../../../colors";

export const TopContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 100px;

  > div {
    width: 100%;
    padding: 40px;

    > div {
      background-image: url(${imageLines});
      background-size: cover;

      background-color: rgba(255, 255, 255, 0);
      -webkit-backdrop-filter: blur(25px);
      backdrop-filter: blur(25px);

      border: 1px solid rgba(255, 255, 255, 0.2);
      background-color: ${colors.silver600};
      border-radius: 50px;

      gap: 0;
    }

    > div > .content {
      display: grid;
      grid-template-columns: 60fr 40fr;
      grid-template-rows: 1fr;
      grid-template-areas: "first second";
      overflow: hidden;

      @media (max-width: 1001px) {
        display: flex;
        flex-direction: column-reverse;

        border-radius: 25px;
        padding: 0;
      }

      .second-container {
        position: relative;
        overflow: hidden;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        img {
          position: absolute;
          top: 0;
          left: 0;

          width: 110%;
          height: 110%;

          object-fit: cover;
          z-index: -1;
        }

        @media (max-width: 1001px) {
          height: 400px;
          border-radius: 0;
        }
      }

      .only-mobile {
        display: none;
        @media (max-width: 1001px) {
          display: block;
          margin: 50px 0 0 20px;
        }

        @media (max-width: 999px) {
          .pre-title {
            font-size: 14px;
          }
        }
      }

      .pre-title {
        font-family: ${fonts.oxanium};
        font-size: 18px;
        font-weight: 300;
        line-height: 35.1px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }

      .only-desktop {
        display: block;
        @media (max-width: 1001px) {
          display: none;
        }
      }

      .footer {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 5fr;
        gap: 30px;

        @media (max-width: 1000px) {
          grid-template-columns: 1fr;
          gap: 15px;
        }
      }
    }

    .information {
      padding: 70px 38px 58px 75px;

      .desc {
        width: 90%;
        font-family: ${fonts.oxanium};
        font-size: 18px;
        font-weight: 300;
        line-height: 35.1px;

        @media (max-width: 1001px) {
          width: 100%;
          p {
            width: 100%;
          }
        }
      }

      h3 {
        @media (max-width: 768px) {
          margin: 0;
          font-size: 12px;
        }
      }

      p {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;

        padding: 25px 0;

        @media (max-width: 768px) {
          font-size: 1em;
          padding-top: 0;
        }
      }

      .button {
        display: contents;
      }

      @media (max-width: 1290px) {
        h1 {
          position: relative;
          z-index: 2;
          font-size: 54px;
        }
      }

      @media (max-width: 1001px) {
        padding: 30px;
      }

      @media (max-width: 999px) {
        padding: 30px 10px 40px;
      }
    }
  }

  @media (max-width: 999px) {
    margin-top: 50px;

    > div {
      padding: 40px 20px;
    }

    > div > div {
      padding: 0;
      border-radius: 20px;
    }

    .timer-mobile {
      display: block;
      width: 100%;
      margin-top: 50px;
    }
  }

  .planet-full {
    position: absolute !important;

    object-fit: contain;
    object-position: left;

    width: 50px;
    height: 50px;
    right: 0;
    z-index: 1;

    @media (min-width: 1001px) {
      width: 150px;
      height: 150px;
      right: 0;
    }

    @media (max-width: 1001px) {
      display: none;
    }
  }

  .planet-cut {
    position: absolute !important;

    object-fit: contain;
    object-position: left;

    @media (min-width: 1001px) {
      width: 350px;
      height: 350px;
      left: 0;
      bottom: -220px;
      z-index: -1;
    }

    @media (max-width: 1001px) {
      width: 215px;
      height: 215px;
      left: 0px;
      top: 80vh;
      transform: rotate(0deg);
      z-index: -1;
      /* display: none; */
    }
  }
`;
