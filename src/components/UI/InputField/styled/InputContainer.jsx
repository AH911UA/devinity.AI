import styled from "styled-components";
import colors from "../../../colors";

const InputContainer = styled.div`
  width: 100%;
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;

  .input-error {
    border: 1px solid #fcc3c3;

    &::placeholder {
      color: #fcc3c3;
    }
  }

  .error {
    color: #d96262;
    padding: 10px 0 0;
  }

  input,
  textarea {
    width: auto;

    border: none;
    outline: none;

    color: white;

    border-radius: 10px;
    background: #0e0a0e;
    padding: 25px 15px;

    &::placeholder {
      color: #8a8a8a;
      font-size: 16px;
      font-weight: 400;
    }
  }

  &:focus-within {
    /* outline: 1px solid ${colors.green}; */
    /* border-radius: 10px; */
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0 1000px #0e0a0e inset;
  }

  input[type="date"] {
    width: 100%;
  }

  textarea {
    height: 250px;
    resize: none;
  }

  .react-tel-input {
    display: flex;
    width: auto;
    align-items: center;
    background: #0e0a0e;
    border-radius: 10px;
    padding: 10px 25px;
    color: white;
  }

  .react-tel-input .flag-dropdown {
    background: transparent;
    border: none;
  }

  .react-tel-input .form-control {
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 400;
    padding-left: 40px;
  }

  .react-tel-input .form-control:focus {
    outline: none;
  }

  .react-tel-input .country-list {
    background: #0e0a0e;
    color: white;
  }

  .react-tel-input .country-list .country {
    padding: 10px;
  }

  .react-tel-input .country-list .country:hover {
    background: #1c1c1c;
  }

  .react-tel-input .selected-flag:hover,
  .react-tel-input .selected-flag:focus {
    background: transparent;
  }

  .react-tel-input .country-list .search,
  .react-tel-input .flag-dropdown.open .selected-flag {
    background-color: #0e0a0e;
  }

  .react-tel-input .country-list .country.highlight {
    background-color: #FFFFFF33;
  }
`;

export default InputContainer;
