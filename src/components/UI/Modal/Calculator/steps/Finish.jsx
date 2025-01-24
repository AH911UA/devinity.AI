import React, { useEffect, useRef, useState } from "react";
import { isArray } from "lodash";
import HeadingText from "../../../HeadingText";
import { useDispatch, useSelector } from "react-redux";
import calculateTotalTime from "../utils/calculateTotalTime";
import { FinishContainer } from "../styled";
import styled from "styled-components";
import fonts from "../../../../fonts";
import CalculatorFooterFinish from "../CalculatorFooterFinish";
import { updateShowCalculator } from "../../../../../state/actions";

import iconListCircle from "../../../../../images/svg/calculator/list-circle.svg";

const StepFinish = ({ step, setStep, localStep }) => {
  const dispatch = useDispatch();

  const { design, type, typeChild, steps } = useSelector((state) => state);

  const [totalTime, setTotalTime] = useState(null);

  useEffect(() => {
    const calc = (
      calculateTotalTime(steps) +
      (design?.time || 0) +
      (type?.time || 0) +
      (typeChild?.time || 0)
    )?.toFixed(1);

    if (calc > 180) setTotalTime(Math.random() * (180 - 170) + 170);
    else setTotalTime(calc);
  }, [steps]);

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        The estimated team and time for your project:
      </HeadingText>

      <FinishContainer>
        <div>
          <img
            src={iconListCircle}
            width={20}
            alt={"Icon List Circle Devinity LLC"}
          />

          <p>
            <span className={"green"}>
              {(totalTime / 30 / 3)?.toFixed(1)} months
            </span>{" "}
            or{" "}
            <span className={"purple"}>
              {(totalTime / 30 / 4)?.toFixed(1)} months
            </span>
            ;
          </p>
        </div>

        <div>
          <img
            src={iconListCircle}
            width={20}
            alt={"Icon List Circle Devinity LLC"}
          />

          <p>Project Manager;</p>
        </div>

        <div>
          <img
            src={iconListCircle}
            width={20}
            alt={"Icon List Circle Devinity LLC"}
          />

          <p>QA;</p>
        </div>
      </FinishContainer>

      <CalculatorFooterFinish
        step={step}
        setStep={setStep}
        localStep={localStep}
        validate={isArray(steps[localStep]) && steps[localStep]?.length}
        sendBtnFunc={() => dispatch(updateShowCalculator(false))}
      />
    </>
  );
};

export default StepFinish;
