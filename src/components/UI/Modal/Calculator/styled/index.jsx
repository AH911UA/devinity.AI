import styled from "styled-components";
import fonts from "../../../../fonts";

export const CalculatorItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 40px;
  gap: 15px;

  > div {
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1c1321;
    border-radius: 5px;
    border: 2px solid #1c1321;
    padding: 25px 20px;

    &.active {
      background-color: #0b0d0b;
      border-radius: 5px;
      border: 2px solid rgba(98, 237, 46, 0.4);

      > span {
        color: #62ed2e;
        font-weight: 600;
      }
    }

    @media (min-width: 768px) {
      &:hover {
        background-color: #0b0d0b;
        border-radius: 5px;
        border: 2px solid rgba(98, 237, 46, 0.4);

        > span {
          color: #62ed2e;
          font-weight: 600;
        }
      }
    }

    > span {
      color: #fff;
      font-family: ${fonts.oxanium};
      font-size: 20px;
      font-weight: 700;
      line-height: 150%;
    }

    img {
      margin-bottom: 22px;
    }
  }
`;

export const CalculatorItemsHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin-top: 40px;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1c1321;
    border-radius: 5px;
    border: 2px solid #1c1321;
    padding: 25px 20px;

    &.active {
      background-color: #0b0d0b;
      border-radius: 5px;
      border: 2px solid rgba(98, 237, 46, 0.4);

      > span {
        color: #62ed2e;
        font-weight: 600;
      }
    }

    @media (min-width: 768px) {
      &:hover {
        background-color: #0b0d0b;
        border-radius: 5px;
        border: 2px solid rgba(98, 237, 46, 0.4);

        > span {
          color: #62ed2e;
          font-weight: 600;
        }
      }
    }

    &.disabled {
      &:hover {
        opacity: 0.5;
        cursor: auto;
        border: 2px solid #1c1321;
        > span {
          color: #fff;
        }
      }
    }

    > span {
      color: #fff;
      font-family: ${fonts.oxanium};
      font-size: 20px;
      font-weight: 700;
      line-height: 150%;
    }
  }
`;

export const FinishContainer = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 20px;
    margin-bottom: 20px;

    > img {
      margin-right: 18px;
    }

    > p {
      color: #fff;
      font-family: ${fonts.oxanium};
      font-size: 20px;
      font-weight: 700;
      line-height: 150%;

      > span.green {
        color: #62ed2e;
        font-weight: 400;
      }

      > span.purple {
        color: #9840d3;
        font-weight: 400;
      }
    }
  }
`;
