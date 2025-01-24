import styled from "styled-components";

const GeneralContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: ${({ marginTop }) => marginTop || "150px"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};

  @media (max-width: 768px) {
    margin-top: ${({ marginTopMobile }) => marginTopMobile || "100px"};
  }
`;

export default GeneralContainer;
