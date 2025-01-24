import React from "react";
import { isArray } from "lodash";
import HeadingText from "../../../HeadingText";
import { useHomeData } from "../../../../../hooks/query";
import CalculatorFooter from "../CalculatorFooter";
import { CalculatorItemsHorizontal } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { updateSteps } from "../../../../../state/actions";

const StepsLot = ({ step, setStep }) => {
  const { calculator } = useHomeData();

  const dispatch = useDispatch();

  const { typeDev, steps } = useSelector((state) => state);

  const handleSet = (data) => {
    const existingArray = Array.isArray(steps["LoT"]) ? steps["LoT"] : [];
    const existingIndex = existingArray.findIndex(
      (item) => item.id === data.id
    );

    const updatedArray =
      existingIndex !== -1
        ? existingArray.filter((item) => item.id !== data.id)
        : [...existingArray, data];

    dispatch(
      updateSteps({
        ["LoT"]: updatedArray,
      })
    );
  };

  const lotDataArray = calculator[typeDev]?.types?.services;
  const lotData =
    isArray(lotDataArray) &&
    lotDataArray.find((service) => service?.name === "LoT");

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        {lotData?.name}
      </HeadingText>

      <CalculatorItemsHorizontal>
        {lotData?.child?.services?.map((service) => (
          <div
            key={service?.id}
            className={
              isArray(steps["LoT"]) &&
              steps["LoT"]?.find((data) => data?.id === service?.id)
                ? "active"
                : ""
            }
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
        steps={0}
        validate={isArray(steps["LoT"]) && steps["LoT"]?.length}
        short
      />
    </>
  );
};

export default StepsLot;
