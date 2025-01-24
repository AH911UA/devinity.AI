import React from "react";
import HeadingText from "../../../HeadingText";
import { useHomeData } from "../../../../../hooks/query";
import CalculatorFooter from "../CalculatorFooter";
import { CalculatorItemsHorizontal } from "../styled";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { updateDesign } from "../../../../../state/actions";

const StepFive = ({ step, setStep }) => {
  const { calculator } = useHomeData();

  const dispatch = useDispatch();

  const { design } = useSelector((state) => state);

  const handleSet = (data) => {
    dispatch(updateDesign(design !== data ? data : null));
  };

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        {calculator?.design?.name}
      </HeadingText>

      <CalculatorItemsHorizontal>
        {calculator?.design?.services?.map((service) => (
          <div
            key={service?.id}
            className={design?.id === service?.id && "active"}
            onClick={() => handleSet(service)}
            style={{
              cursor: "pointer",
            }}
          >
            <span>{service?.name}</span>
          </div>
        ))}
      </CalculatorItemsHorizontal>

      <CalculatorFooter
        step={step}
        setStep={setStep}
        validate={!isEmpty(design)}
      />
    </>
  );
};

export default StepFive;
