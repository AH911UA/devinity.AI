import styled from "styled-components";
import fonts from "../../../fonts";
import colors from "../../../colors";

export const TestimonialsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    180deg,
    #0e0a0e 75.75%,
    rgba(14, 10, 14, 0) 108.27%
  );

  margin-top: 120px;

  .label {
    color: ${colors.white};

    font-family: ${fonts.oxanium};
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .reviews-separator {
    padding: 0px;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;
