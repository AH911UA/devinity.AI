import colors from "../../../colors";
import styled from "styled-components";

import imageLines from "../../../../images/svg/home-top-lines.svg";

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
      border-radius: 50px;

      gap: 0;
    }

    > div > div {
      display: grid;
      grid-template-columns: 60fr 40fr;
      grid-template-rows: 1fr;
      grid-template-areas: "first second";

      @media (max-width: 1290px) {
        display: flex;
        flex-direction: column-reverse;

        border-radius: 25px;
        padding: 22px 20px;
      }

      @media (max-width: 999px) {
        padding: 22px 0px;
      }

      h1 {
        padding: 22px 0px 20px 16px;
        z-index: 2;
      }

      .information {
        padding: 100px 0 23px 55px;

        .options {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0 25px;
          margin: 25px 0;

          ul {
            margin: 0;
            padding-left: 20px;

            li {
              color: ${colors.white};
              font-size: 20px;
              font-weight: 700;
              line-height: 45px;

              &::marker {
                color: ${colors.green};
              }

              @media (max-width: 768px) {
                font-size: 1em;
                line-height: 30px;
              }
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

        div {
        }

        @media (max-width: 999px) {
          padding: 100px 10px 0px;
        }
      }

      .second-container {
        width: 100%;
        @media (max-width: 1290px) {
          height: 400px;
        }
      }

      .only-mobile {
        display: none;
        @media (max-width: 1290px) {
          display: block;
        }
      }

      .only-desktop {
        display: block;
        @media (max-width: 1291px) {
          display: none;
        }
      }

      .footer {
        width: 100%;
        display: grid;
        grid-template-columns: 4fr 3fr 1fr;
        gap: 30px;

        @media (max-width: 1000px) {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
          gap: 15px;
        }
      }
    }
  }

  @media (max-width: 999px) {
    margin-top: 50px;

    > div {
      padding: 40px 20px 0;
    }

    > div > div {
      padding: 0;
      border-radius: 20px;
      @media (max-width: 1000px) {
        border-radius: 40px;
      }
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
    z-index: -1;

    @media (min-width: 1291px) {
      width: 150px;
      height: 150px;
      right: 0;
    }

    @media (max-width: 1290px) {
      display: none;
    }
  }

  .planet-cut {
    position: absolute !important;

    object-fit: contain;
    object-position: left;

    @media (min-width: 1291px) {
      width: 350px;
      height: 350px;
      left: 0;
      bottom: -220px;
      z-index: -1;
    }

    @media (max-width: 1290px) {
      width: 215px;
      height: 215px;
      right: 0;
      top: 80px;
      transform: rotate(180deg);
      z-index: 1;
    }

    @media (max-width: 1000px) {
      z-index: -1;
    }
  }
`;
