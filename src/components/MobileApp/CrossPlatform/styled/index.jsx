import styled from "styled-components";

export const CrossPlatformContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-child > p {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }

  .planet-left {
    visibility: hidden;
    position: absolute;
    height: 250px;
    top: 0;
    left: -60px;
    z-index: -1;
  }
  .planet-right {
    position: absolute;
    height: 250px;
    right: -60px;
    bottom: 500px;
    z-index: -1;
    transform: rotate(180deg);
  }

  @media (max-width: 1100px) {
    h2 {
      margin-bottom: 10px;
    }

    > div:first-child > p {
      font-size: 1em;
      padding-bottom: 25px;
    }

    .planet-left {
      visibility: visible;
      height: 180px;
      top: 200px;
    }
    .planet-right {
      height: 180px;
    }
  }
`;

export const CrossPlatformItems = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ gap }) => gap || "50px"};
  padding: 100px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    ${({ isReverse }) =>
      `
        flex-direction: ${isReverse ? "row-reverse" : "row"};
      `}

    &:nth-child(odd) {
      ${({ isReverse }) =>
        `
          flex-direction: ${isReverse ? "row" : "row-reverse"};
        `}

      @media (max-width: 768px) {
        flex-direction: column-reverse;
      }
    }

    > div:first-child {
      flex: 1;

      h3 {
        color: #fff;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      p {
        color: #fff;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        ${({ styleSubTitle }) => styleSubTitle || ""}
        @media (max-width: 768px) {
          min-width: auto;
        }
      }
    }

    > div:nth-child(2) {
      flex: 1;
      text-align: center;

      .gatsby-image-wrapper {
        margin: 0 auto;
        min-width: 250px;
      }
    }
  }

  @media (max-width: 1100px) {
    gap: 100px;
    padding: 30px 20px;

    > div,
    > div:nth-child(even),
    > div:first-child {
      flex-direction: column-reverse;
      gap: 0;

      > div,
      > div:nth-child(even),
      > div:first-child {
        h3 {
          font-size: 20px;
        }

        p {
          font-size: 1em;
          line-height: 22px;
        }
      }
    }

    > div > div:nth-child(2) img {
      width: calc(100% / 1.5);
    }
  }
`;
