import styled from "styled-components";

export const TechnologiesList = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
