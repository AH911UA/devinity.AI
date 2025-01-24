import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const TechnologiesBlock = styled.div`
  display: inline-flex;
  padding: 40px 57px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  border-radius: 13px;
  background: #110c11;

  box-shadow: 7px 9px 12px 0 #0c080c;

  .label {
    color: ${colors.silver};

    font-family: ${fonts.oxanium};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;

    margin-top: 35px;
  }

  p {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
  #btn-point {
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 550px) {
      width: 50px;
    }
  }
`;
