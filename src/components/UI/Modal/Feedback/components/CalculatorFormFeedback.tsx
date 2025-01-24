import styled from "styled-components";
import fonts from "../../../../fonts";

const CalculatorFormFeedback = styled.div`
  background-color: #1c1321;
  border-radius: 5px;
  padding: 22px 20px;

  > p {
    color: #fff;
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
  }
`;

export default CalculatorFormFeedback;
