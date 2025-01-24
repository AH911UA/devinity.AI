import styled from "styled-components";

export const HowWeWorkContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
