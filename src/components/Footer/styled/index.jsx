import styled from "styled-components";
import fonts from "../../fonts";

const FooterContainer = styled.footer`
  position: relative;
  background-color: #0b0b0b;
  padding: 0;

  margin-top: 100px;

  .banner {
    width: calc(100% - 200px);
    padding: 0 100px;
    margin-bottom: -150px;

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: #5fe931;
      border-radius: 30px;

      margin: 0 auto;

      padding: 65px 0;

      h2 {
        max-width: 915px;

        color: #0b0b0b;
        text-align: center;
        font-family: ${fonts.oxanium};
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 69px;
        z-index: 1;
      }

      .buttons {
        display: flex;
        gap: 15px;

        a:first-child {
          color: #fff;
          text-align: center;
          font-family: ${fonts.oxanium};
          font-size: 18px;
          font-weight: 700;

          background-color: #000000;
          border: 1px solid #000;
          border-radius: 9px;

          padding: 20px 25px;
          z-index: 1;
        }

        a:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;

          color: #000;
          text-align: center;
          font-family: ${fonts.oxanium};
          font-size: 18px;
          font-weight: 700;

          background-color: transparent;
          border: 1px solid #000;
          border-radius: 9px;

          padding: 20px 25px;
          z-index: 1;
        }

        a:hover {
          box-shadow: 10px 10px 50px rgb(255 255 255 / 40%);
        }
      }
    }

    .planet-left,
    .planet-right {
      position: absolute;
      z-index: 0;
    }

    .planet-left {
      left: 0;
      bottom: 0;
      border-radius: 0 0 0 30px;
    }

    .planet-right {
      right: 0;
      top: 0;
      border-radius: 0 30px 0 0;
    }
  }

  .general {
    display: block;
    background-color: rgba(255, 255, 255, 0.1);
    padding-top: 150px;

    > img {
      height: 120px;
      padding: 50px 100px 18px;
    }

    .blocks {
      width: calc(100% - 200px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      padding: 0 100px 100px;

      .left {
        flex: 1;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }

        p {
          position: relative;
          color: #fff;
          text-align: center;
          font-family: ${fonts.oxanium};
          font-size: 24px;
          font-weight: 700;
          line-height: 28px;
          max-width: 325px;
        }

        .socials {
          display: flex;
          gap: 12px;

          a {
            display: inline-flex;
            background-color: #62ed2e;
            border-radius: 50%;
            padding: 12px;

            img {
              width: 25px;
              height: 25px;
            }
          }
        }
      }

      .center {
        flex: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }
        p {
          position: relative;
          color: #fff;
          text-align: center;
          font-family: ${fonts.oxanium};
          font-size: 24px;
          font-weight: 700;
          line-height: 28px;
        }

        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;

          color: #5fe931;
          text-align: center;
          font-size: 18px;
          font-style: normal;
          font-weight: 300;
          line-height: 28px;
          text-decoration-line: underline;

          &:hover {
            color: rgba(95, 233, 49, 0.7);
            box-shadow: none;
          }

          &.address {
            color: #ffffff;
            text-decoration: none;
          }

          img {
            width: 22px;
            height: 22px;
          }
        }
      }

      .right {
        flex: 1;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        gap: 16px;

        > p {
          color: #fff;
          text-align: center;
          font-family: ${fonts.oxanium};
          font-size: 24px;
          font-weight: 700;
          line-height: 28px;
        }

        .input-email {
          background: transparent;
          border: 1px solid #ffffff;
          border-radius: 9px;

          padding: 5px 7px;

          input {
            color: #fff;
            text-align: left;
            font-size: 18px;
            font-weight: 300;
            line-height: 28px;

            background: transparent;
            border: none;

            &:focus {
              outline: none;
              box-shadow: none;
            }

            &::placeholder {
              color: #ffffff;
            }
          }

          button {
            color: #0b0b0b;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            background-color: #5fe931;
            border-radius: 9px;
            padding: 10px 25px;
          }
        }

        .logos {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          gap: 25px;

          margin-top: 15px;

          img {
            height: 40px;
          }
        }
      }
    }

    .bottom {
      width: calc(100% - 70px);
      padding: 0 35px 35px;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        border-radius: 50px;
        background: #5fe931;

        padding: 20px 70px;

        p,
        li {
          color: #0b0b0b;
          font-size: 20px;
          font-weight: 500;

          a:hover {
            opacity: 0.8;
          }
        }

        ul {
          display: flex;
          flex-direction: row;
          gap: 25px;
          list-style: none;
          text-decoration-line: underline;
          padding: 0;
        }
      }
    }
  }

  a:hover,
  button:hover {
    box-shadow: 0 0 20px rgba(95, 233, 49, 0.4);
  }

  @media (max-width: 1100px) {
    margin-top: 0;

    .banner {
      width: calc(100% - 60px);
      padding: 0 30px;

      > div {
        h2 {
          font-size: 25px;
          line-height: 130%;
          padding: 0 5px;
        }

        .buttons {
          flex-direction: column;
          align-items: center;

          a {
            width: 100%;
            border-radius: 9px !important;

            &:first-child {
              padding: 15px 20px;
            }

            &:nth-child(2) {
              align-items: flex-end;
              padding: 15px 20px;
            }
          }
        }
      }

      .planet-left,
      .planet-right {
        width: calc(100% / 2);
      }
    }

    .general {
      > img {
        padding-left: 30px;
      }

      .blocks {
        width: calc(100% - 60px);
        flex-direction: column;
        gap: 50px;

        padding: 0 30px 30px;

        .right {
          align-items: flex-start;

          .input-email {
            input {
              font-size: 12px;
            }

            button {
              font-size: 12px;
            }
          }

          .logos {
            gap: 25px;

            img {
              height: 30px;
            }
          }
        }
      }

      .bottom > div {
        flex-direction: column;
        border-radius: 12px;
        padding: 20px 10px 10px;

        p,
        li {
          font-size: 12px;
        }
      }
    }
  }

  .img_blog {
    position: absolute;
    height: 314px;
    z-index: 1;
    top: -280px;
    left: 50%;
    transform: translateX(-50%);

    img {
      height: 100%;
      width: 100%;
    }

    @media (max-width: 768px) {
      height: 270px;
      top: -230px;
    }
  }
`;

export default FooterContainer;
