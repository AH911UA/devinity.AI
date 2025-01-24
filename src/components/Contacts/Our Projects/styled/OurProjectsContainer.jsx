import styled from "styled-components";
import fonts from "../../../fonts";

export const OurProjectsContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 120px;

  .label {
    color: #FFF;
    
    font-family: ${fonts.oxanium};
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
  .reviews-separator {
    padding: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 0;

    .label {
      font-size: 48px;
    }
  }
`
