import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 0 100px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const Planet = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  transform: rotate(180deg);
  z-index: -1;

  @media (max-width: 1100px) {
    right: -11px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 45px;
  margin-bottom: 50px;

  > div {
    width: calc(50% - 45px);

    @media (max-width: 500px) {
      width: 100%;
    }

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
    }

    @media (max-width: 1100px) {
      h3 {
        font-size: 20px;
      }

      p {
        font-size: 1em;
        line-height: 22px;
      }
    }
  }
`;
