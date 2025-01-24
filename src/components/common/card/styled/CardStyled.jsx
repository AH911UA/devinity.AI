import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

export const CardStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr 100px;
  gap: 10px;

  font-family: ${fonts.oxanium};
  border-radius: 30px;
  background-color: ${colors.silver600};
  backdrop-filter: blur(50px);
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px 30px 0px;

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
      margin: 0;
    }

    p {
      color: ${colors.white};
      font-size: 18px;
      font-weight: 300;
      line-height: 35.1px;
      margin: 0;
    }

    @media (max-width: 1000px) {
      h3 {
        font-size: 18px;
        line-height: 30px;
      }
      p {
        font-size: 14px;
        line-height: 28px;
      }
    }
  }

  .card_header {
    position: relative;
    display: block;
    padding: 0;
    width: 100%;
    height: 256px;

    img {
      position: absolute;
      left: 0;
      top: -10px;

      height: 100%;
      width: 100%;

      object-position: top center;
      object-fit: cover;
    }
  }
`;
