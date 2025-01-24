import styled from "styled-components";
import colors from "../../colors";
import fonts from "../../fonts";

export const FeedbackBlock = styled.div `
  min-width: 310px;
  
  border-radius: 13px;
  background: #140F14;

  box-shadow: 7px 9px 12px 0 #0C080C;
  
  padding: 25px;
  
  margin-bottom: 15px;

  h5 {
    color: ${colors.silver};
    margin: 0;

    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.71);
    font-family: ${fonts.oxanium};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
  }
  
  img {
    padding: 25px 0 10px;
  }
`
