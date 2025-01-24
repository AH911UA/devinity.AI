import styled from "styled-components";

const ContainerFlex = styled.div `
  display: flex;
  flex: ${({ flex }) => flex || 1};
`

export default ContainerFlex;
