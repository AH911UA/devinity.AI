import styled from "styled-components";
import colors from "../../colors";
import fonts from "../../fonts";

export const OurProjectBlock = styled.div `
  position: relative;
  
  width: ${({ width }) => width || "520px"};

  border-radius: 5px;
  background: #171417;

  padding: 25px;
  margin-bottom: 15px;

  >div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    >div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 10px;

      img {
        height: 50px;
        opacity: .5;

        padding: 0;
      }
    }
  }

  >div:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  h5 {
    color: ${colors.white};

    font-family: ${fonts.oxanium};
    font-size: 30px;
    font-weight: 700;

    word-wrap: break-word;
    overflow-wrap: anywhere;

    margin: 0;
  }

  img {
    padding: 25px 0 10px;
  }
  
  .description {
    position: absolute;
    width: 100%;
    
    background-color: rgba(36, 9, 49, 0.95);
    
    bottom: 0;
    left: 0;
    
    >div {
      padding: 25px;
      
      p {
        color: #FFF;
        font-size: 18px;
        font-weight: 300;
        line-height: 170%;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -moz-box;
        -moz-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-clamp: 4;
        box-orient: vertical;
      }
    }
    
    img {
      padding: 0;
    }
  }
  
  .show {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  
  .hidden {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 150px);

    >div:first-child {
      flex-direction: column;
      gap: 15px;

      >div:nth-child(2) img {
        height: 35px;
      }
    }

    >div:nth-child(2) img {
      width: 100%;
      height: auto;
    }
  }
`
