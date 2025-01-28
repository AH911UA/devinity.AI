import React, { useEffect, useState } from "react";
import HeadingText from "../../UI/HeadingText";
import Image from "../../UI/Image";
import linkIcon from "../../../images/svg/link.svg";
import H3 from "../../UI/H3";
import TitleWithIconDesc from "../../common/container/TitleWithIconDesc/TitleWithIconDesc";
import PortFolioTop from "./styled/PortFolioTop";
import { TechnologyImgs } from "../../common/Image/TechnologyImgs";
import useIsMobile from "../../../hooks/useIsMobile";



const Top = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{maxWidth: '1400px', margin: 'auto', padding: '0 8px'}}>
      <PortFolioTop reverse reverseOn1000>
        <HeadingText
          hideOn1000
          paddingMobile={"20px 0"}
          padding="0"
          maxWidth={"800px"}
          ga
        >
          <TitleWithIconDesc
            icon={linkIcon}
            text="MYND"
            tag="#mobile"
            link="https://www.myndai.app/"
          ></TitleWithIconDesc>
          <h1>
            Featured
            <span> {`Project`} </span>
            MYND
          </h1>

          <H3>
            MYND is an innovative mental health app offering personalized
            support through AI, developed by Devinity.AI . Personal AI Companion
            is a central feature of MYND, providing real-time support based on
            user’s mood and preferences. The app also features AI-Generated
            Meditation sessions, creating custom scripts tailored to the user's
            goals and problems.
          </H3>
          <TechnologyImgs isMobile={isMobile}/>
        </HeadingText>

        <div className="right-images">
          <Image
            filename={"portfolio-top-1.png"}
            style={{
              width: isMobile ? "100%" : 264,
              // marginTop: isMobile ? 50 : -50,
            }}
            styleImg={{}}
          />
          <Image
            filename={"portfolio-top-2.png"}
            style={{
              width: isMobile ? "100%" : 287,
              // marginTop: isMobile ? 50 : -50,
            }}
            styleImg={{}}
          />
        </div>

        <h1>
          Featured
          <span> {`Project`} </span>
          MYND
        </h1>
      </PortFolioTop>
    </div>
  );
};

export default Top;
