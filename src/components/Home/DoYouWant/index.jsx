import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../UI/Button";
import { DoYouWantLabel } from "./styled/DoYouWantLabel";
import GeneralContainer from "../../UI/GeneralContainer";
import ButtonSocial from "../../UI/ButtonSocial";
import ButtonsHorizontal from "../../UI/ButtonsHorizontal";
import { DoYouWantContainer } from "./styled/DoYouWantContainer";
import ContainerPadding from "../../UI/ContainerPadding";

import iconWhatsUp from "../../../images/svg/icon_whats_up.svg";
import iconPhone from "../../../images/svg/phone_purple.svg";
import Image from "../../UI/Image";

const DoYouWant = () => {
  return (
    <ContainerPadding>
      <GeneralContainer marginTop={"100px"}>
        <DoYouWantContainer>
          <div>
            <DoYouWantLabel>
              Do you want to turn your ideas into tech solutions?
            </DoYouWantLabel>

            <div>
              <div className={"mobile-img"}>
                <Image
                  filename={"doYouWant.png"}
                  style={{ objectPosition: "center", height: 100 }}
                />
              </div>

              <ButtonsHorizontal padding={"0"} paddingMobile={"0 0 80px"}>
                <Button
                  background={"#1A0E21"}
                  color={"#8446B6"}
                  $borderColor={"#331345"}
                  to={"/contact"}
                  isPhone
                >
                  Book a call
                  <img src={iconPhone} alt={"Icon Phone Devinity LLC"} />
                </Button>

                <ButtonSocial
                  href={process.env.GATSBY_WHATSAPP}
                  target={"_blank"}
                  rel="nofollow"
                >
                  <img src={iconWhatsUp} alt={"Icon WhatsApp Devinity LLC"} />
                  <p>WhatsApp</p>
                </ButtonSocial>

                {/*<ButtonSocial>*/}
                {/*  <img src={iconTelegram} />*/}
                {/*  <p>Telegram</p>*/}
                {/*</ButtonSocial>*/}
              </ButtonsHorizontal>
            </div>
          </div>

          <div className={"desktop-img"}>
            <Image
              filename={"doYouWant.png"}
              style={{ height: 250, width: 150 }}
              size={800}
            />
          </div>
        </DoYouWantContainer>
      </GeneralContainer>
    </ContainerPadding>
  );
};

export default DoYouWant;
