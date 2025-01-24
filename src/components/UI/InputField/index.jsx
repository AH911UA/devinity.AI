import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { isEmpty } from "lodash";
import DatePicker from "react-datepicker";
import { selectStyles } from "./utils/selectStyles";
import InputContainer from "./styled/InputContainer";

import "react-datepicker/dist/react-datepicker.css";

function InputField({
  name,
  control,
  rules,
  label,
  errors,
  textarea,
  textareaCustom,
  select,
  placeholder,
  options,
  className,
  date,
}) {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
          textareaCustom ? (
            <textarea
              {...field}
              placeholder={placeholder}
              className={`${className} ${
                !isEmpty(errors[name]) && "input-error"
              }`}
              style={{
                color: "#fff",
                backgroundColor: "transparent",
                borderRadius: "0",
                border: "none",
                borderBottom: "2px solid #401c54",
                resize: "none",
                height: "auto",
                minHeight: "100px",
                padding: "6px",
              }}
            />
          ) : textarea ? (
            <textarea
              {...field}
              placeholder={placeholder}
              className={!isEmpty(errors[name]) && "input-error"}
            />
          ) : date ? (
            <DatePicker
              {...field}
              placeholder={placeholder}
              selected={field.value}
              ref={(ref) => {
                if (ref) field.ref(ref.input);
              }}
            />
          ) : select ? (
            <Select
              {...field}
              inputRef={field.ref}
              options={options}
              className={!isEmpty(errors[name]) && "input-error"}
              styles={selectStyles}
            />
          ) : (
            <input
              {...field}
              placeholder={placeholder}
              className={`${className} ${
                !isEmpty(errors[name]) && "input-error"
              }`}
            />
          )
        }
      />
      {errors[name] && (
        <span className={"error"}>
          {isEmpty(errors[name]?.message)
            ? name === "phone"
              ? `Phone is invalid`
              : `This field is required`
            : errors[name]?.message}
        </span>
      )}
    </InputContainer>
  );
}

export default InputField;
