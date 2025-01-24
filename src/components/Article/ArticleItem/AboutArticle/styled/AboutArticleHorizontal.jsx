import styled from "styled-components";

export const AboutArticleHorizontal = styled.div `
  display: flex;
  flex-direction: row;
  gap: 220px;
  
  margin-bottom: 50px;
  
  @media (max-width: 1070px) {
    flex-direction: column-reverse;
    
    gap: 50px;
    
    >h3, >div {
      flex: 1;
    }
  }
`
