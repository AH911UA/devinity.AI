import styled from "styled-components";
import fonts from "../../../fonts";

export const OurProcessBlock = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  >div {
    flex: 1;
    text-align: center;

    &:first-child {
      text-align: left;
      
      border-radius: 19px;
      background: linear-gradient(90deg, #0E0A0E 70%, rgba(14, 10, 14, 0.00) 100%);
      
      padding: 15px 50px 45px;
      
      .label-container {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;

        .label {
          position: absolute;
          left: 0;
          
          color: #62ED2E;

          font-family: ${fonts.oxanium};
          font-size: 40px;
          font-weight: 700;
        }

        .big-num {
          color: rgba(98, 237, 46, 0.08);

          font-family: ${fonts.oxanium};
          font-size: 200px;
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    &:nth-child(even) {
      flex-direction: column;
    }
    
    border-radius: 19px;
    background: linear-gradient(180deg, #140F14 33%, rgba(14, 10, 14, 0.00) 176.32%);

    >div:first-child {
      padding: 10px 20px;
    }
    
    >div:nth-child(even) {
      width: 80%;
      padding: 40px 25px;
    }
  }
`
