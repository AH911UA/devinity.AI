import styled from "styled-components";

export const BrandsContainer = styled.div `
  background: ${({ background }) => background || "#110C11"};
  
  padding: ${({ padding }) => padding || "50px 50px 100px"};
  
  >div {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin: 50px 0;
    padding: 40px 25px 50px;
    
    a {
        width: auto;
        gap: 25px;
        display: flex;
    }
  }
`
