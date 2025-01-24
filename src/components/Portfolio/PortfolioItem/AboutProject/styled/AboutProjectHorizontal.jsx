import styled from "styled-components";

export const AboutProjectHorizontal = styled.div `
  display: flex;
  flex-direction: row;
  gap: 220px;
  
  margin-bottom: 120px;
  
  >div {
    flex: 1 1 400px;
  }
  >h3 {
    flex: 1 1 600px;
  }

  @media (max-width: 1070px) {
    flex-direction: column-reverse;
    
    gap: 50px;
    
    >h3, >div {
      flex: 1;
    }
  }
`
