import React, { useRef, useState } from "react";
import HeadingText from "../../../HeadingText";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../fonts";
import FormCalculate from "../../../FormCalculate";
import { isArray } from "lodash";
import CalculatorFooterFinish from "../CalculatorFooterFinish";

const StepForm = ({ step, setStep, localStep }) => {
  const sendBtnRef = useRef(null);

  const [loader, setLoader] = useState(false);

  const { steps } = useSelector((state) => state);

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        Please provide your information to finalise estimation.
      </HeadingText>

      <CalculatorForm style={{ marginTop: 25 }}>
        <p>Contact information:</p>

        <FormCalculate
          sendBtnRef={sendBtnRef}
          loader={loader}
          setLoader={setLoader}
          nextFunc={() => setStep(step + 1)}
        />
      </CalculatorForm>

      <CalculatorFooterFinish
        step={step}
        setStep={setStep}
        localStep={localStep}
        validate={isArray(steps[localStep]) && steps[localStep]?.length}
        sendBtnRef={sendBtnRef}
        loader={loader}
        next
      />
    </>
  );
};

export default StepForm;

const CalculatorForm = styled.div`
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
