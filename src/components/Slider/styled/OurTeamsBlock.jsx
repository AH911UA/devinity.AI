import styled from "styled-components";
import colors from "../../colors";
import fonts from "../../fonts";

export const OurTeamsBlock = styled.div`
  width: calc(((1200px - (30px * 2)) / 3) - 70px);
  height: ${({ height }) => height || "500px"};

  padding: 25px;
  margin: 0 auto;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h5 {
    color: ${colors.white};

    font-family: ${fonts.oxanium};
    font-size: 40px;
    font-weight: 700;

    margin: 0;
    padding: 10px 0 25px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 100px);

    > div:first-child {
      flex-direction: column;
      gap: 15px;

      > div:nth-child(2) img {
        height: 35px;
      }
    }

    > div:nth-child(2) img {
      width: 100%;
      height: auto;
    }
  }
`;
