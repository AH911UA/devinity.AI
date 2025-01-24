import InputField from "../InputField";
import PhoneInputDevItiny from "../InputField/PhoneInput";
import ContainerFlex from "../ContainerFlex";
import ButtonForm from "./ButtonForm";
import Text from "../Text";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { useForm } from "react-hook-form";
import { useLocation } from "react-use";
import {toast} from "react-toastify";

import iconCall from "../../../images/svg/icon_call.svg";
import iconPreloader from "../../../images/gif/loader-black.gif";

const Form = () => {
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
    },
  });

  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

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
        typeof window !== "undefined" &&
          window.gtag('event', 'conversion', {
            'send_to': 'AW-11470082789/LI-LCL79no8ZEOWlrt0q',
            'event_callback': function() {
              console.log('Event sent successfully');
            }
          });

        toast.success("Your request has been sent", {
          position: 'bottom-left',
          autoClose: 5000,
        });
        reset();
      } else {
        toast.error("The message was not sent, try again", {
          position: 'bottom-left',
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("The message was not sent, try again", {
        position: 'bottom-left',
        autoClose: 5000,
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
        placeholder={"Phone number (optional)"}
        rules={{ required: true }}
        control={control}
        setValue={setValue}
        errors={errors}
      />

      <ContainerFlex flex={"1 250px"}>
        <ButtonForm type="submit">
          <Text>Book a call</Text>
          <img
            src={loader ? iconPreloader : iconCall}
            height={loader ? 40 : 20}
            alt={"Icon Callback Devinity LLC"}
          />
        </ButtonForm>
      </ContainerFlex>
    </FormContainer>
  );
};

export default Form;
