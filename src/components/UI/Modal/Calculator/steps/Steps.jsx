import React from "react";
import { isArray } from "lodash";
import HeadingText from "../../../HeadingText";
import { useHomeData } from "../../../../../hooks/query";
import CalculatorFooter from "../CalculatorFooter";
import { CalculatorItemsHorizontal } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { updateSteps } from "../../../../../state/actions";

const Steps = ({ step, setStep, localStep, setLocalStep }) => {
  const { calculator } = useHomeData();

  const dispatch = useDispatch();

  const { typeDev, type, steps } = useSelector((state) => state);

  const handleSet = (data) => {
    const isOne =
      data?.name.toLowerCase().includes("none") ||
      data?.name.toLowerCase().includes("other") ||
      data?.name.toLowerCase().includes("no") ||
      data?.name.toLowerCase().includes("yes") ||
      data?.name.toLowerCase().includes("blog");
    const existingArray = Array.isArray(steps[localStep])
      ? steps[localStep]
      : [];
    const existingIndex = existingArray.findIndex(
      (item) => item.id === data.id
    );

    const updatedArray =
      existingIndex !== -1
        ? existingArray.filter((item) => item.id !== data.id)
        : isOne
        ? [data]
        : [...existingArray, data];

    dispatch(
      updateSteps({
        ...steps,
        [localStep]: updatedArray,
      })
    );
  };

  const stepsJson = calculator[typeDev]?.steps;

  return (
    <>
      <HeadingText fontSize={"32px"} fontWeight={500} padding={"0"}>
        {stepsJson[localStep]?.name?.replace(/__type__/g, type?.name)}
      </HeadingText>

      <CalculatorItemsHorizontal>
        {stepsJson[localStep]?.services?.map((service) => {
          const isSelectNow = steps[localStep]?.find(
            (item) => item.id === service?.id
          );
          const isOther =
            (steps[localStep]?.find((item) =>
              item.name.toLowerCase().includes("other")
            ) ||
              false) &&
            !isSelectNow;
          const isNone =
            (steps[localStep]?.find((item) =>
              item.name.toLowerCase().includes("none")
            ) ||
              false) &&
            !isSelectNow;
          const isHide = service?.hide?.includes(type?.name);
          const isActive =
            !isHide &&
            isArray(steps[localStep]) &&
            steps[localStep]?.find((data) => data?.id === service?.id);
          const isDisabled74 =
            service.id === 74 &&
            isArray(steps[localStep]) &&
            steps[localStep]?.find(
              (data) => data?.id === 71 || data?.id === 73
            );
          const isDisabledOther =
            (service.id === 71 || service.id === 73) &&
            isArray(steps[localStep]) &&
            steps[localStep]?.find((data) => data?.id === 74);
          const isDisabled =
            isDisabled74 || isDisabledOther || isOther || isNone;
          return !isHide ? (
            <div
              key={service?.id}
              className={isDisabled ? "disabled" : isActive ? "active" : ""}
              onClick={() => !isDisabled && handleSet(service)}
              style={{
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "auto" : "pointer",
              }}
            >
              <span>{service?.name?.replace(/__type__/g, type?.name)}</span>
            </div>
          ) : null;
        })}
      </CalculatorItemsHorizontal>

      <CalculatorFooter
        step={step}
        setStep={setStep}
        localStep={localStep}
        setLocalStep={setLocalStep}
        steps={stepsJson?.length}
        validate={isArray(steps[localStep]) && steps[localStep]?.length}
      />
    </>
  );
};

export default Steps;
