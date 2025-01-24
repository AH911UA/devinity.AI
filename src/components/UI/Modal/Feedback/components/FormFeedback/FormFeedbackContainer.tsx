import styled from "styled-components";

const FormCalculateContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;

  border-radius: 5px;

  input {
    background: none;
    border-bottom: 2px solid #401c54;
    border-radius: 0;
    padding: 6px;

    margin-top: 22px;
  }
`;

export default FormCalculateContainer;
