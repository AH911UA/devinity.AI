import styled from "styled-components";
import fonts from "../../../../fonts";

const ContactFormContainer = styled.form `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;

  padding: 30px 0;

  >div {
      flex: 1;
  }

  input, textarea {
      color: #6A6A6A;
      font-size: 18px;
      border-radius: 10px;
      border: 1px solid #6A6A6A;
      background: #0B0B0B;
      padding: 30px 15px;

      &::placeholder {
          color: #6A6A6A;
          font-size: 18px;
          font-weight: 400;
          padding-left: 15px;
      }
  }

    button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #5FE931;
        border-radius: 9px;
        cursor: pointer;

        color: #FFF;
        font-size: 18px;
        font-weight: 700;

        height: auto;
        flex-direction: row;
        background: transparent;

        padding: 15px 50px;

        p {
            color: #FFF;
            font-family: ${fonts.oxanium};
            font-size: 22px;
            font-weight: 700;
        }

        &:hover {
            box-shadow: 0 0 20px rgba(95, 233, 49, 0.4);
        }
    }
`

export default ContactFormContainer;
