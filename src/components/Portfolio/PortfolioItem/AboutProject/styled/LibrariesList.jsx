import styled from "styled-components";

const LibrariesList = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  
  padding: 30px 0;
  
  >div {
    flex: 1 1 50px;
  }
`

export default LibrariesList;
