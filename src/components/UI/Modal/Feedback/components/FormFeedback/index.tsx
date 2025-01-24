import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";

// components
import FormFeedbackContainer from "./FormFeedbackContainer";
import InputField from "../../../../InputField";
import PhoneInputDevItiny from "../../../../InputField/PhoneInput";
import ContainerFlex from "../../../../ContainerFlex";

type FormFeedbackProps = {
  sendBtnRef: React.RefObject<HTMLButtonElement>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
};

const FormFeedback: FunctionComponent<FormFeedbackProps> = ({
  sendBtnRef,
  loader,
  setLoader,
  onClose,
}) => {
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
      description: "",
    },
  });

  const onSubmit = async (data: {
    first_name: string;
    email: string;
    phone: string;
    country_code: string;
    description: string;
  }) => {
    if (loader) return;

    setLoader(true);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });
      if (response.ok) {
        typeof window !== "undefined" &&
          window.gtag("event", "send_form_call_now");

        reset();
        onClose();

        toast.success("Your request has been sent", {
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
    <FormFeedbackContainer onSubmit={handleSubmit(onSubmit)}>
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
        control={control}
        rules={{ required: true }}
        setValue={setValue}
        errors={errors}
      />
      <InputField
        name="description"
        control={control}
        rules={{ required: false }}
        placeholder="<Description> (optional)"
        errors={errors}
        textareaCustom={true}
      />
      <ContainerFlex flex={"1 250px"}>
        <button ref={sendBtnRef} style={{ display: "none" }}>
          send
        </button>
      </ContainerFlex>
    </FormFeedbackContainer>
  );
};

export default FormFeedback;
