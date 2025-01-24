import styled from "styled-components";

const BrandsList = styled.div `
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px 100px;
  
  padding: 30px 0 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 30px;
  }
`

export default BrandsList;
