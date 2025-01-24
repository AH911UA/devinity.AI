import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

export const BlogItemStyledComponent = styled.div`
  max-width: 867px;
  margin: auto;
  padding: 40px;
  background-color: #ffffff1a;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  h1 {
    margin: 10px 0;
    color: ${colors.silver};
    font-family: ${fonts.oxanium};
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    span {
      color: ${colors.green};
    }

    @media (max-width: 1200px) {
      font-size: 44px;
      line-height: 60px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }

    @media (max-width: 668px) {
      font-size: 28px;
      line-height: 35px;
    }
  }

  h3 {
    margin: 50px 0 0;
    color: ${colors.green};
    font-family: ${fonts.oxanium};
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    @media (max-width: 768px) {
      font-size: 20px;
      margin: 40px 0 0;
    }
  }

  h4 {
    margin: 30px 0 0;
    color: ${colors.silver};
    font-family: ${fonts.oxanium};
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-top: 20px;
    }
  }

  h5 {
    margin-top: 20px;
    color: ${colors.silver};
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  ol,
  ul {
    margin: 20px 0 20px 40px;
    padding: 0;
    color: ${colors.silver};
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-weight: 300;
    line-height: 35px;

    li {
      margin-bottom: 10px;
      color: ${colors.silver100};

      span {
        font-weight: 600;
        color: ${colors.yellow};
      }
    }

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 10px 0 10px 20px;
    }
  }

  img {
    border-radius: 30px;
    @media (max-width: 768px) {
      border-radius: 21px;
    }
  }

  a {
    color: ${colors.green};
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease;

    &:hover {
      color: ${colors.yellow};
      text-shadow: 0 0 5px ${colors.yellow};
    }

    &:active {
      color: ${colors.silver};
    }

    &:visited {
      color: ${colors.silver100};
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  pre {
    background-color: ${colors.black};
    color: #f8f8f2;
    padding: 20px;
    border-radius: 10px;
    font-family: "Fira Code", monospace;
    font-size: 14px;
    overflow-x: auto;
    margin: 20px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    @media (max-width: 768px) {
      padding: 15px;
      font-size: 12px;
    }
  }

  code {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ff79c6;
    padding: 2px 5px;
    border-radius: 5px;
    font-family: "Fira Code", monospace;
    font-size: 13px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  pre code {
    background-color: transparent;
    color: inherit;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-family: $oxanium-font;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    overflow: hidden;
    color: $silver;

    @media (max-width: 768px) {
      margin: 16px 0;
    }

    th {
      font-size: 18px;
      font-weight: 500;
      background-color: rgba(0, 0, 0, 0.3);
      color: ${colors.green};
      text-align: left;
      padding: 15px 20px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

      &:first-of-type {
        border-top-left-radius: 15px;
      }

      &:last-of-type {
        border-top-right-radius: 15px;
      }
    }

    td {
      font-size: 16px;
      font-weight: 300;
      padding: 12px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      color: ${colors.silver100};
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

      &:last-of-type {
        text-align: right;
      }
    }

    tr:last-child td {
      border-bottom: none;
    }

    @media (max-width: 768px) {
      th,
      td {
        font-size: 14px;
        padding: 10px;
      }
    }

    @media (max-width: 768px) {
      th,
      td {
        font-size: 12px;
        padding: 6px;
      }
    }
  }

  p {
    margin: 30px 0;
    color: ${colors.silver100};
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-weight: 300;
    line-height: 35.1px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    span {
      font-weight: 600;
      color: ${colors.yellow};
    }

    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 35.1px;
    }
  }

  section {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 30px;

    @media (max-width: 568px) {
      grid-template-columns: 1fr;
      gap: 20px;

      .gatsby-image-wrapper {
        width: 100%;
        height: auto;
        img {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
  }

  .planet-full {
    position: absolute;

    object-fit: contain;
    object-position: left;

    width: 50px;
    height: 50px;

    z-index: -1;

    @media (min-width: 1291px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 1290px) {
      display: none;
    }

    &:nth-of-type(1) {
      top: 100px;
      left: -90px;
    }

    &:nth-of-type(2) {
      top: 100vh;
      right: 20px;
    }

    &:nth-of-type(3) {
      top: 200vh;
      left: 100px;
      z-index: 1;
    }

    &:nth-of-type(4) {
      top: 300vh;
      right: 100px;
      z-index: 1;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 1000px;
    height: auto
  }
`;

export const BlogItemFooterStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin-bottom: 250px;

  h4 {
    text-align: center;
    font-family: ${fonts.oxanium};
    font-size: 64px;
    font-weight: 700;
    line-height: 79px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    text-transform: uppercase;
    color: ${colors.white};
    margin-bottom: 0px;

    span {
      font-family: ${fonts.oxanium};
      color: ${colors.green};
      font-size: inherit;
      font-weight: 700;
      line-height: 79px;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  @media (max-width: 1150px) {
    margin-bottom: 300px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 400px;
  }

  .only-desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* .gatsby-image-wrapper {
    background-color: red;
    box-shadow: 20px 20px 20px red;
    width: 100%;
    height: 300px !important;
    img {
      position: relative;
      width: 100%;
      height: 300px !important;
      object-fit: cover;
    }
  } */
`;
