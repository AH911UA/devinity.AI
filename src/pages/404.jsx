import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import GeneralContainer from "../components/UI/GeneralContainer";
import StarsBackground from "../components/UI/StarsBackground";
import MoonTopRight from "../components/UI/MoonTopRight";
import HeadingText from "../components/UI/HeadingText";
import ContainerPadding from "../components/UI/ContainerPadding";
import Button from "../components/UI/Button";
import ButtonsHorizontal from "../components/UI/ButtonsHorizontal";

import logo from "../images/svg/logo.svg";
import iconPlus from "../images/svg/icon_green_plus.svg";

const NotFoundPage = () => {
  return (
    <Body>
      <StarsBackground>
        <MoonTopRight/>

        <GeneralContainer>

          <ContainerPadding>
            <img src={logo} alt={'Logo Devinity LLC'}/>

            <HeadingText paddingMobile={"70px 0 15px"}>
              #Page not found
              <span> {`<404>`} </span>
            </HeadingText>
          </ContainerPadding>

          <ButtonsHorizontal>
            <Button
              to={'/'}
            >
              Go Home

              <img src={iconPlus} alt={'Icon Plus Devinity LLC'}/>
            </Button>
          </ButtonsHorizontal>
        </GeneralContainer>
      </StarsBackground>
    </Body>
  )
}

export default NotFoundPage

export const Head = () => <HeadCustom
  title={`<DEV>INITY - Not Found 404!`}
  description={``}
/>
