import React, { useState } from "react";
import HeadingText from "../../../HeadingText";
import calculatorIcon from "../utils/calculatorIcon";
import CalculatorFooter from "../CalculatorFooter";
import { CalculatorItems } from "../styled";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { updateTypeDev } from "../../../../../state/actions";
import useIsMobile from "../../../../../hooks/useIsMobile";

const StepTwo = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile(800);

  const typeDev = useSelector((state) => state.typeDev);

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (name) => {
    setIsHovered(name);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleSetType = (name) => {
    dispatch(updateTypeDev(name));
  };

  return (
    <>
      <HeadingText fontSize={isMobile? "22px !important" : "32px"} fontWeight={500} padding={"0"}>
        What type of development do you need?
      </HeadingText>

      <CalculatorItems>
        <div
          className={typeDev === "classic" && "active"}
          onClick={() => handleSetType("classic")}
          onMouseEnter={() => handleMouseEnter("classic")}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: "pointer",
          }}
        >
          <div>
            <img
              style={{ height: 22 }}
              src={
                calculatorIcon("classic")[
                  typeDev === "classic" || isHovered === "classic"
                    ? "hover"
                    : "normal"
                ]
              }
              alt={"Icon Calculator Devinity LLC"}
            />
          </div>

          <span>Classic Development</span>
        </div>

        <div
          className={typeDev === "blockchain" && "active"}
          onClick={() => handleSetType("blockchain")}
          onMouseEnter={() => handleMouseEnter("blockchain")}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: "pointer",
          }}
        >
          <div>
            <img
              style={{ height: 28 }}
              src={
                calculatorIcon("blockchain")[
                  typeDev === "blockchain" || isHovered === "blockchain"
                    ? "hover"
                    : "normal"
                ]
              }
              alt={"Icon Calculator Devinity LLC"}
            />
          </div>

          <span>Blockchain Development</span>
        </div>
      </CalculatorItems>

      <CalculatorFooter
        step={step}
        setStep={setStep}
        validate={!isEmpty(typeDev)}
      />
    </>
  );
};

export default StepTwo;
