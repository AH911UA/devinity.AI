import styled, {css} from "styled-components";

const Horizontal = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: ${({ paddingMobile }) => paddingMobile || ""};

  @media screen and (max-width: 768px) {
    ${({ reverse }) => reverse && css`
      flex-direction: column-reverse;
    `}
  }
`

export default Horizontal;
