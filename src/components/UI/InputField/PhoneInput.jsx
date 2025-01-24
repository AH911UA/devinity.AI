import React from "react";
import { Controller } from "react-hook-form";
import { isEmpty } from "lodash";
import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InputContainer from "./styled/InputContainer";


const PhoneInputDevItiny = ({
  item,
  control,
  setValue,
  errors,
  placeholder,
  rules,
}) => {
  const validatePhone = async (value) => {
    return isEmpty(value) || isValidPhoneNumber(`+${value}`);
  };

  return (
    <InputContainer>
      <Controller
        name={item}
        control={control}
        rules={{
          validate: validatePhone,
          ...rules,
        }}
        render={({ field }) => (
          <PhoneInput
            {...field}
            specialLabel={""}
            country={"us"}
            enableSearch={true}
            placeholder={placeholder}
            inputProps={{
              name: item,
              ref: field.ref,
              required: false,
              // autoFocus: true,
            }}
            inputClass={errors[item] && "input-error"}
            countryCodeEditable
            autoFormat
            // onlyCountries={['us', 'gb', 'ua', 'pl', 'ae']}
            onChange={(phone, code) => {
              setValue("country_code", code?.dialCode);
              setValue(item, phone);
            }}
          />
        )}
      />

      {errors[item] && (
        <span className={"error"}>
          {isEmpty(errors[item]?.message)
            ? `Phone is invalid`
            : errors[item]?.message}
        </span>
      )}
    </InputContainer>
  );
};

export default PhoneInputDevItiny;
