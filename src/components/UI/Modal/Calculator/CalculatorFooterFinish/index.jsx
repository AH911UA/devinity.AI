import React from "react";
import Button from "../../../Button";

import iconArrowRightBack from "../../../../../images/svg/icon-arrow-right-white.svg";
import iconPreloader from "../../../../../images/gif/loader-purple.gif"
import iconArrowRight from "../../../../../images/svg/icon-arrow-right-purple.svg";
import { CalculatorFooterStyled } from "../CalculatorFooter/styled/CalculatorFooterStyled";

const CalculatorFooterFinish = ({ step, setStep, sendBtnRef, sendBtnFunc, loader = false, next = false }) => {
  return (
     <CalculatorFooterStyled columns={'1fr 3fr'}>
      <div onClick={ () => setStep(step - 1) }>
        <Button
          background={'#130B17'}
          $borderColor={'#130B17'}
          fontSize={'24px'}
          gap={'35px'}
        >
          <img
            src={iconArrowRightBack}
            width={12}
            style={{
              opacity: .5,
              transform: 'rotate(180deg)'
            }}
            alt={'Icon Arrow Right Devinity LLC'}
          />
        </Button>
      </div>

      <div onClick={ () => sendBtnFunc ? sendBtnFunc() : sendBtnRef.current.click()}>
        <Button
          background={'#1A0E21'}
          color={'#913EC8'}
          $borderColor={'#331345'}
          fontSize={'24px'}
          gap={'35px'}
        >
          {next ? `Next` : `Finish`}

          {(loader || next) && (
            <img
              src={ (loader)
                ? iconPreloader
                : (next)
                  ? iconArrowRight
                  : ''
              }
              width={(loader) ? 30 : 17}
              alt={'Icon Right Preloader Devinity LLC'}
            />
          )}
        </Button>
      </div>
    </CalculatorFooterStyled>
  )
}

export default CalculatorFooterFinish;
