import React, { useMemo } from "react";
import { useSelector } from "react-redux";

// components
import Button from "../../../Button";

// hooks
import { useHomeData } from "../../../../../hooks/query";

// icons
import iconArrowRightBack from "../../../../../images/svg/icon-arrow-right-white.svg";
import iconArrowRight from "../../../../../images/svg/icon-arrow-right-purple.svg";
import { CalculatorFooterStyled } from "./styled/CalculatorFooterStyled";
import useIsMobile from "../../../../../hooks/useIsMobile";

const CalculatorFooter = ({
  step,
  setStep,
  localStep = 0,
  setLocalStep,
  steps,
  validate,
  short = false,
}) => {
  const {
    steps: stepsState,
    design,
    type,
    typeChild,
    comment,
    typeDev,
  } = useSelector((state) => state);
  const stepTitle = useMemo(() => step + localStep, [step, localStep]);
  const { calculator } = useHomeData();
  const isMobile = useIsMobile();

  const stepAllTitle = useMemo(() => {
    if (stepTitle === 1) return null;
    const questionsDev = typeDev ? calculator[typeDev].steps.length + 1 : 4;
    const design = 1;
    return 4 + questionsDev + design;
  }, [stepTitle]);

  return (
    <CalculatorFooterStyled>
      <div
        onClick={() =>
          stepsState["LoT"] && step !== 3
            ? setStep(3)
            : localStep && setLocalStep
            ? setLocalStep(localStep - 1)
            : setStep(step - 1)
        }
      >
        <Button
          background={"#130B17"}
          $borderColor={"#130B17"}
          fontSize={"24px"}
          gap={"35px"}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={iconArrowRightBack}
            width={12}
            style={{
              opacity: 0.5,
              transform: "rotate(180deg)",
            }}
            alt={"Icon Arrow Right Devinity LLC"}
          />
        </Button>
      </div>

      <Button
        className="step-button"
        background={"#130B17"}
        color={"#623282"}
        $borderColor={"#0D0810"}
        fontSize={"24px"}
        // padding={isMobile ? "10px 10px" : ""}
        overflow-wrap={"nowrap"}
      >
        {`Step ${stepTitle}${stepAllTitle ? ` of ${stepAllTitle}` : ""}`}
      </Button>

      <div
        onClick={() =>
          validate &&
          (short
            ? setStep(6)
            : setLocalStep && steps > localStep + 1
            ? setLocalStep(localStep + 1)
            : setStep(step + 1))
        }
      >
        <Button
          background={validate ? "#1A0E21" : "#130B17"}
          color={validate ? "#8446B6" : "#FFFFFF80"}
          $borderColor={validate ? "#331345" : "#130B17"}
          fontSize={"24px"}
          gap={"35px"}
          style={{
            cursor: "pointer",
          }}
        >
          Next
          <img
            src={validate ? iconArrowRight : iconArrowRightBack}
            width={12}
            style={{ opacity: validate ? 1 : 0.5 }}
            alt={"Icon Right Devinity LLC"}
          />
        </Button>
      </div>
    </CalculatorFooterStyled>
  );
};

export default CalculatorFooter;
