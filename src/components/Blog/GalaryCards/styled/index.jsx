import styled from "styled-components";
import fonts from "../../../fonts";

export const GalaryCardsStyled = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => `repeat(${columns || 3}, 1fr)`} ;
  grid-template-rows: auto;
  gap: 25px;

  max-width: ${({mw}) => mw ? mw : 'auto'};
  margin: auto;

  font-family: ${fonts.oxanium};
  border-radius: 30px;

  padding: ${({padding}) => padding || '100px 53px'};
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    padding: 100px 0px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }
`;
