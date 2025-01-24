import styled from "styled-components";

const FiltersContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: 12px;
  
  overflow-x: auto;
  
  >div {
    display: flex;
  }
`

export default FiltersContainer;
