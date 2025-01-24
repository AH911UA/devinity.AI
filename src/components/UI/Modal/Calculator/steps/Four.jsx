import React from "react";
import HeadingText from "../../../HeadingText";
import CalculatorFooter from "../CalculatorFooter";
import { CalculatorItemsHorizontal } from "../styled";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { updateTypeChild } from "../../../../../state/actions";

const StepFour = ({ step, setStep }) => {
  const dispatch = useDispatch();

  const { type, typeChild } = useSelector((state) => state);
  const selectItem =
    type?.child?.services.find((item) => item.id === typeChild?.id) || null;

  const handleSet = (data) => {
    dispatch(updateTypeChild(typeChild !== data ? data : null));
  };

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        {type?.child?.name}
      </HeadingText>

      <CalculatorItemsHorizontal>
        {type?.child?.services?.map((service) => {
          const isOther = selectItem?.name.toLowerCase().includes("other");
          const isDisabled =
            typeChild && service?.id !== typeChild?.id && isOther;
          return (
            <div
              key={service?.id}
              className={typeChild?.id === service?.id && "active"}
              onClick={() => {
                if (!isDisabled) handleSet(service);
              }}
              style={{
                cursor: isDisabled ? "auto" : "pointer",
                opacity: isDisabled ? 0.5 : 1,
              }}
            >
              <span>{service?.name}</span>
            </div>
          );
        })}
      </CalculatorItemsHorizontal>

      <CalculatorFooter
        step={step}
        setStep={setStep}
        validate={!isEmpty(type)}
      />
    </>
  );
};

export default StepFour;
