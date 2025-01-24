import colors from "../../../colors";
import styled from "styled-components";

import imageLines from "../../../../images/svg/home-top-lines.svg";

export const TopContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  > div {
    width: auto;
    position: relative;

    padding: 40px;

    &:first-child {
      padding-bottom: 15px;
    }

    &.languages {
      padding-top: 15px;
      > div {
        border-radius: 20px;
        padding: 0 70px;

        @media (max-width: 724px) {
          padding: 0 35px;
        }
      }
    }

    > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;

      background-image: url(${imageLines});
      background-size: cover;

      background-color: rgba(255, 255, 255, 0.1);
      -webkit-backdrop-filter: blur(25px);
      backdrop-filter: blur(25px);

      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;

      gap: 50px 0;
      padding: 70px 70px 50px;

      @media (max-width: 1290px) {
        border-radius: 25px;
        padding: 22px 20px;
      }

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
              font-size: 1.5em;
            }

            @media (max-width: 768px) {
              font-size: 1em;
            }
          }
        }
      }

      .information {
        flex: 1 1 700px;

        h3 {
          @media (max-width: 768px) {
            margin: 0;
            font-size: 1em;
          }
        }

        p {
          color: #fff;
          font-size: 1em;
          font-weight: 400;
          line-height: 30px;

          padding: 25px 0;

          @media (max-width: 768px) {
            font-size: 1em;
          }
        }

        .button {
          display: contents;
        }

        &-btns {
          display: flex;
          gap: 25px;

          @media (max-width: 678px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;

            button {
              width: 100%;
            }
          }
        }
      }

      @media (max-width: 1062px) {
        & > div:nth-child(2) {
          margin: 0 auto;
        }
      }
    }
  }

  @media (max-width: 999px) {
    margin-top: 50px;

    > div {
      padding: 40px 20px;
    }
  }

  .planet-full {
    position: absolute !important;

    object-fit: contain;
    object-position: left;

    width: 150px;
    height: 150px;
    left: -50px;
    top: -20px;

    @media (max-width: 1290px) {
      width: 100px;
      height: 100px;
      left: -50px;
      top: 0;
      z-index: -1;
    }
  }

  .planet-cut {
    position: absolute !important;

    object-fit: contain;
    object-position: left;

    width: 250px;
    height: 250px;
    right: 0;
    bottom: 150px;
    transform: rotate(180deg);

    @media (max-width: 1290px) {
      width: 215px;
      height: 215px;
      right: 0;
      top: 300px;
      transform: rotate(180deg);
      z-index: -1;
    }
  }

  .rectangle-left {
    position: absolute !important;

    object-fit: fill;
    object-position: left;

    width: 18px;
    height: 115px;

    top: -50px;
    left: 70px;

    @media (max-width: 999px) {
      left: 40px;
    }
  }

  .rectangle-right {
    position: absolute !important;

    object-fit: fill;
    object-position: left;

    width: 18px;
    height: 115px;

    top: -50px;
    right: 70px;

    @media (max-width: 999px) {
      right: 40px;
    }
  }
`;
