import styled from "styled-components";

export const OutsourceContainer = styled.div`
  border-radius: 14px;
  border: 1px solid #1b1121;
  background: #0f0c10;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;

  padding: 35px 50px;

  p {
    margin: 0;
  }

  > div {
    display: inline-flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 35px 15px;

    p {
      font-weight: 400;
    }

    a {
      width: auto;
      display: block;
      text-align: center;
      margin: 0 auto;
    }
  }

  .desktop-img {
    display: contents;
    max-height: 200px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-img {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-height: 200px;
      margin-top: 25px;
    }
  }

  .footer {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 4fr 1fr;
    gap: 30px;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 15px;
    }
  }
`;
