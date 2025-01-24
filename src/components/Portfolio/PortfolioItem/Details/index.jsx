import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

const Details = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  margin: 50px 0 35px;
  gap: 40px 80px;
  
  >div {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    gap: 20px;
    
    span {
      color: ${colors.white};
      font-family: ${fonts.oxanium};
      font-size: 20px;
      font-weight: 300;
    }
  }
`

export default Details;
