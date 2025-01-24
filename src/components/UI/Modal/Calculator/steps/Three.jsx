import React, { useState } from "react";
import HeadingText from "../../../HeadingText";
import { useHomeData } from "../../../../../hooks/query";
import calculatorIcon from "../utils/calculatorIcon";
import CalculatorFooter from "../CalculatorFooter";
import { CalculatorItems } from "../styled";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  updateComment,
  updateDesign,
  updateSteps,
  updateType,
  updateTypeChild,
} from "../../../../../state/actions";

const StepThree = ({ step, setStep }) => {
  const { calculator } = useHomeData();

  const dispatch = useDispatch();

  const { type, typeDev } = useSelector((state) => state);

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (name) => {
    setIsHovered(name);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleSetType = (service) => {
    dispatch(updateType(type?.id !== service?.id ? service : null));

    dispatch(updateTypeChild(null));

    dispatch(updateDesign(null));

    dispatch(updateSteps([]));

    dispatch(updateComment(""));
  };

  const typeData = calculator[typeDev]?.types;

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        {typeData?.name}
      </HeadingText>

      <CalculatorItems>
        {typeData?.services?.map((service) => (
          <div
            key={service?.id}
            className={type?.name === service?.name && "active"}
            onClick={() => handleSetType(service)}
            onMouseEnter={() => handleMouseEnter(service?.name)}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: "pointer",
            }}
          >
            <div>
              <img
                style={{ height: 22 }}
                src={
                  calculatorIcon(service?.name)[
                    type?.name === service?.name || isHovered === service?.name
                      ? "hover"
                      : "normal"
                  ]
                }
                alt={"Icon Calculator Devinity LLC"}
              />
            </div>

            <span>{service?.name}</span>
          </div>
        ))}
      </CalculatorItems>

      <CalculatorFooter
        step={step}
        setStep={setStep}
        validate={!isEmpty(type)}
      />
    </>
  );
};

export default StepThree;
