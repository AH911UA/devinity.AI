import styled from "styled-components";
import fonts from "../../../../fonts";

export const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`

export const Modal = styled.div `
  width: 470px;
  background-color: #0D0810;
  padding: 20px 40px 40px;
  border-radius: 5px;

  height: 70svh;
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 90svh;
    padding: 20px 20px 40px;
  }

  @media (max-width: 470px) {
    width: 100%;
  }
`

export const ModalDescription = styled.div `
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-top: 35px;

  >p {
    color: #EBE7ED;
    font-family: ${fonts.oxanium};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 170%;

    span {
      padding: 0 15px;
    }
  }
`
