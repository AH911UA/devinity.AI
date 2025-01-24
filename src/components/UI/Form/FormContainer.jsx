import styled from "styled-components";

const FormContainer = styled.form `
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;

  background:#FFFFFF1A;
  backdrop-filter: blur(25px);

  border-radius: 20px;
  border: 1px solid #FFFFFF33;

  padding: 42px 45px;

  @media (max-width: 1150px) {
    grid-template-columns:  100%;
    grid-template-rows: repeat(4, 1fr);
    input {
      max-width: 100%;
    }
  }


  @media (max-width: 999px) {
    padding: 20px 15px;
  }
`

export default FormContainer;
