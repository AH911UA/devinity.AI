import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

// components
import InputField from "../InputField";
import PhoneInputDevItiny from "../InputField/PhoneInput";
import ContainerFlex from "../ContainerFlex";
import FormCalculateContainer from "./FormCalculateContainer";
import { useAppSelector } from "../../../state/reducers";
import getAllNamesFromSteps from "../Modal/Calculator/utils/getAllNamesFromSteps";
import calculateTotalTime from "../Modal/Calculator/utils/calculateTotalTime";

const FormCalculate = ({ sendBtnRef, loader, setLoader, nextFunc }) => {
  const { design, type, typeChild, steps, comment, typeDev } = useAppSelector(
    (state) => state
  );

  const totalTime = useMemo(() => {
    const timeTotal = calculateTotalTime(steps);
    const daysType =
      type.name === "Website"
        ? 24
        : type.name === "App" || type.name === "Desktop"
        ? 30
        : 40;
    const designPercent =
      design?.name === "Advanced" ? 0.15 : design?.name === "basic" ? 0.5 : 0;
    const daysTypeDev = typeDev === "blockchain" ? 10 : 0;
    const daysFirst = (timeTotal || 0) + (daysType || 0) + daysTypeDev;
    const days =
      daysFirst -
      ((timeTotal || 0) + daysTypeDev + (daysType || 0)) * designPercent;
    return days;
  }, [design?.name, steps, typeDev]);

  const {
    handleSubmit,
    control,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      email: "",
      phone: "",
      country_code: "",
      content: `
        Comment: ${comment} \n
        ${
          !isEmpty(design?.name) && isEmpty(design?.time)
            ? `${design?.name} - ${design?.time} day(s) \n`
            : ""
        }
        ${
          !isEmpty(type?.name) && isEmpty(type?.time)
            ? `${type?.name} - ${type?.time} day(s) \n`
            : ""
        }
        ${
          !isEmpty(typeChild?.name) && isEmpty(typeChild?.time)
            ? `${typeChild?.name} - ${typeChild?.time} day(s) \n`
            : ""
        }
        ${getAllNamesFromSteps(steps)} \n
        TOTAL TIME: ${(totalTime / 30)?.toFixed(1)} months
      `,
      estimateTime: `TOTAL TIME: ${(totalTime / 30 / 3)?.toFixed(
        1
      )} months; or ${(totalTime / 30 / 4)?.toFixed(1)} months;`,
    },
  });

  const nextStep = () => nextFunc();

  const onSubmit = async (data) => {
    if (loader) return;

    setLoader(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (typeof window !== "undefined") {
          window.gtag("event", "conversion", {
            send_to: "AW-11470082789/hElCCKrqpI8ZEOWlrt0q",
            event_callback: function () {
              console.log("Event sent successfully");
            },
          });
          if (window?.lintrk)
            window.lintrk("track", { conversion_id: 18108722 });
        }

        // alert('Your request has been sent');
        nextStep();
        reset();
      } else {
        // alert('The message was not sent, try again');
        nextStep();
      }
    } catch (error) {
      console.error("Error:", error);
      // alert('The message was not sent, try again');
    } finally {
      setLoader(false);
    }
  };

  return (
    <FormCalculateContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="first_name"
        control={control}
        rules={{ required: true }}
        placeholder="<Enter your name>"
        errors={errors}
      />

      <InputField
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        }}
        placeholder="<Enter your e-mail>"
        errors={errors}
      />

      <PhoneInputDevItiny
        item={"phone"}
        placeholder={"<Phone number>"}
        rules={{ required: true }}
        control={control}
        setValue={setValue}
        errors={errors}
      />

      <ContainerFlex flex={"1 250px"}>
        <button ref={sendBtnRef} style={{ display: "none" }}>
          next
        </button>
      </ContainerFlex>
    </FormCalculateContainer>
  );
};

export default FormCalculate;
