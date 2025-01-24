import styled from "styled-components";
import fonts from "../../../../fonts";

export const InfoRowContainer = styled.div`
  width: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: transparent;
  padding: 10px 0;

  @media (max-width: 678px) {
    width: 90%;
    margin: auto;
  }
`;

export const InfoRowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${fonts.oxanium};
  font-size: 18px;
  color: #ffffff;
`;
