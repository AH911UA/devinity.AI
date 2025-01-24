import styled from "styled-components";
import fonts from "../../../fonts";

export const TechnologiesContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .planet-cut {
    position: absolute;
    top: -50px;
    left: -70px;
    height: 250px;
    z-index: -1;
  }

  h2 {
    margin-bottom: 50px;
  }

  @media (max-width: 1100px) {
    .planet-cut {
      top: 0;
      left: -30px;
      height: 150px;
    }
  }
`;

export const TechnologiesItems = styled.div`
  //width: calc(100% - 200px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  justify-content: center;
  gap: 19px;

  > div {
    max-width: 350px;
    min-width: 225px;
    border-radius: 25px;
    border: 1px solid #fff;
    padding: 60px 19px 60px 31px;
    text-align: center;

    @media (max-width: 1199px) {
      padding: 30px 19px 30px 31px;
    }

    img {
      width: 60px;
      height: 60px;
      margin-bottom: 25px;
    }

    h3 {
      color: #fff;
      text-align: center;
      font-family: ${fonts.oxanium};
      font-size: 20px;
      font-weight: 700;
      margin: 0;
    }

    p {
      color: #fff;
      text-align: center;
      font-size: 18px;
      line-height: 25px;
      margin: 18px 0 0;
      text-align: center;
    }

    &:nth-of-type(7){
      grid-column: span 3;
      justify-self: center;

      @media (max-width: 1200px) {
        grid-column: span 1;
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TechnologiesInner = styled.div`
  //width: calc(calc(100% - 200px) / 3 - 20px);
  max-width: 400px;
  box-sizing: content-box;

  @media (max-width: 1169px) {
    //width: calc(calc(100% - 50px) / 3 - 20px);
  }
`;
