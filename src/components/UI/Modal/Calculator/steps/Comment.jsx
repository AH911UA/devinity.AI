import React from "react";
import HeadingText from "../../../HeadingText";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import fonts from "../../../../fonts";
import CalculatorFooter from "../CalculatorFooter";
import {updateComment} from "../../../../../state/actions";

const StepComment = ({ step, setStep, localStep }) => {
  const dispatch = useDispatch()

  const { comment, steps } = useSelector(state => state);

  return (
    <>
      <HeadingText
        fontSize={'32px'}
        fontWeight={500}
        padding={'0'}
      >
        Please provide a short description of your project:
      </HeadingText>

      <CalculatorForm>
        <Textarea
          value={comment}
          onChange={(event) => dispatch(updateComment(event?.target?.value || ''))}
          rows={5}
          placeholder={'<Description>'}
        />
      </CalculatorForm>

      <CalculatorFooter
        step={step}
        setStep={setStep}
        localStep={localStep}
        validate={true}
      />
    </>
  )
}

export default StepComment;

const CalculatorForm = styled.div `
  background-color: #1C1321;
  border-radius: 5px;
  padding: 22px 20px;

  >p {
    color: #FFF;
    font-family: ${fonts.oxanium};
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
  }
`

const Textarea = styled.textarea `
  width: 100%;
  color: #FFF;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #401C54;
  resize: none;
`
