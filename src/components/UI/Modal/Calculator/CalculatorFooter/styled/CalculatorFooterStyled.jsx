import styled from "styled-components";

export const CalculatorFooterStyled = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => columns || '1fr 2fr 1fr'};
  grid-template-rows: 1fr;
  gap: 4px;

  margin-top: 35px;

  a {
    height: 30px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      text-wrap: nowrap;
      font-size: 18px;
    }
  }
`;
