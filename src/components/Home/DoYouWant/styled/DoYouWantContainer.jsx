import styled from "styled-components";

export const DoYouWantContainer = styled.div `
  border-radius: 14px;
  border: 1px solid #1B1121;
  background: #0F0C10;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  
  padding: 35px 50px;

  @media (max-width: 768px) {
      padding: 35px 15px;
  }
  
  p { margin: 0; }
  
  >div {
    display: inline-flex;
    flex-direction: column;
    gap: 25px;
  }

  .desktop-img {
    display: block;
  }

  .mobile-img {
    display: none;
  }

  @media (max-width: 768px) {
    background: none;
    border: none;
    flex-direction: column;
    padding: 0;

    a {
        width: auto;
        text-align: center;
    }
    
    .desktop-img {
      display: none;
    }
    
    .mobile-img {
      display: block;
      text-align: right;
    }
  }
`
