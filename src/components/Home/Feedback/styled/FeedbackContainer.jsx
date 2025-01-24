import styled from "styled-components";
import fonts from "../../../fonts";

export const FeedbackContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: linear-gradient(180deg, #0E0A0E 69.46%, rgba(14, 10, 14, 0.00) 100%);
  
  margin-top: 120px;

  .label {
    color: #62ED2E;
    
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
    margin-top: 80px;
  }
`
