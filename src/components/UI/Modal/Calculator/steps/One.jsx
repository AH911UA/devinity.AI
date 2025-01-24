import React from "react";
import Image from "../../../Image";
import {ModalDescription} from "../ModalCalculatorStyled";
import Button from "../../../Button";
import useIsMobile from "../../../../../hooks/useIsMobile";
import iconArrowRight from "../../../../../images/svg/icon-arrow-right-purple.svg";

const StepOne = ({ step, setStep }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <Image
        filename={'calculator-top.png'}
        style={{objectPosition: 'center', width: '100%', margin: '0 auto'}}
      />

      <ModalDescription>
        <p>
          <span>🔍</span> Explore your project’s potential with a few inputs.
        </p>

        <p>
          <span>⏳</span> Determine the time and team you’ll need.
        </p>

        <p>
          <span>❓</span> Answer some questions and get an instant projection from our tool. 🚀
        </p>
      </ModalDescription>

      <div
        onClick={ () => setStep(1) }
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 35
        }}
      >
        <Button
          background={'#1A0E21'}
          color={'#8446B6'}
          $borderColor={'#331345'}
          fontSize={'24px'}
          overflow-wrap={'nowrap'}
          gap={isMobile ? '16px' : '35px'}
        >
          Start
          <img
            src={iconArrowRight}
            width={12}
            alt={'Icon Arrow Right Devinity LLC'}
          />
        </Button>
      </div>
    </>
  )
}

export default StepOne;
