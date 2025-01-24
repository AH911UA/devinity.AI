import styled from "styled-components";

export const OurTeamsHeader = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  
  padding-bottom: 70px;
  
  .desc {
    max-width: 625px;
    
    color: #A0A0A0;

    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 195.5%;
  }
   
  .btns {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  @media (max-width: 768px) {
    padding-bottom: 40px;
    
    .desc {
      .label {
        font-size: 48px;
        padding-bottom: 15px;
      }
    }

    .btns {
      display: none;
    }
  }
`
