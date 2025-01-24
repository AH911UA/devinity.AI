import styled from "styled-components";

export const Header = styled.div`
  padding: 50px 0;

  p {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }

  @media (max-width: 1100px) {
    h2 {
      margin-bottom: 10px;
    }

    p {
      font-size: 1em;
      padding-bottom: 25px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  width: 100%;
  padding-bottom: 200px;

  @media (max-width: 1100px) {
    gap: 100px;
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 100px;

  > div {
    flex: 1;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    gap: 0;

    div:nth-child(2) {
      width: 100%;
      img {
        width: calc(100% / 1.5);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    width: calc(100% - 50px);
  }
`;

export const TextWrapper = styled.div`
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
`;

export const ImageWrapper = styled.div`
  > div {
    margin: 0 auto;
  }
`;
