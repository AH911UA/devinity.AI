import styled from "styled-components";
import fonts from "../../../fonts";

const TimerHorisontalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 8px;
  z-index: 1;

  max-width: 420px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px !important;

  padding: 27px !important;
  border: 1.5px solid #4cef16;
  border-radius: 10px !important;

  backdrop-filter: blur(14px);

  p {
    color: #ffffff;
    font-family: ${fonts.oxanium};
    font-weight: 700;
    font-size: 18px;

    padding: 0px;

    span {
      color: #4cef16;
    }
  }

  & div {
    span {
      display: inline-block;

      color: #ffffff;
      font-family: ${fonts.oxanium};
      font-weight: 700;
      font-size: 18px;

      border: 1.5px solid #4cef16;
      border-radius: 8px;

      padding: 8px;
    }

    b {
      color: #4cef16;
      font-family: ${fonts.oxanium};
      font-weight: 700;
      font-size: 24px;

      padding: 0 5px;
    }
  }

  @media (max-width: 668px) {
    padding: 12px 18px !important;
    p {
      font-size: 14px;
    }

    & div {
      span {
        display: inline-block;

        color: #ffffff;
        font-family: ${fonts.oxanium};
        font-weight: 700;
        font-size: 14px;
      }
    }
  }
`;

export default TimerHorisontalContainer;
