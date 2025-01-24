import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import PhoneInputDevItiny from "../../InputField/PhoneInput";
import ButtonForm from "../ButtonForm";
import Text from "../../Text";
import ContactFormContainer from "./styled";
import {toast} from "react-toastify";

import iconPreloader from "../../../../images/gif/loader-black.gif";

const ContactFormFooter = () => {
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

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const utmContent = queryParams.get("utm_content");

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
            'send_to': 'AW-11470082789/DnnsCLqH1cEZEOWlrt0q',
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
    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="first_name"
        control={control}
        rules={{ required: true }}
        placeholder="Name*"
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
        placeholder="Email*"
        errors={errors}
      />

      <PhoneInputDevItiny
        item={"phone"}
        placeholder={"Phone Number"}
        rules={{ required: true }}
        control={control}
        setValue={setValue}
        errors={errors}
      />

      <ButtonForm type="submit">
        <Text>Book a call</Text>
        {loader && (
          <img
            src={iconPreloader}
            height={30}
            style={{ marginLeft: 10 }}
            alt={"Icon Preloader Devinity LLC"}
          />
        )}
      </ButtonForm>
    </ContactFormContainer>
  );
};

export default ContactFormFooter;
