import styled from "styled-components";

const H3 = styled.h3`
  max-width: ${({ maxWidth }) => maxWidth || "780px"};
  color: #fbfbfb;
  font-size: 18px;
  font-weight: 300;
  line-height: 195.5%;

  opacity: 0.8;
  &.show {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &.hidden {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  b {
    font-weight: 600;
  }
`;

export default H3;
