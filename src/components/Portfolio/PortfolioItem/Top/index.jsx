import React, {useEffect, useState} from "react";
import HeadingText from "../../../UI/HeadingText";
import Image from "../../../UI/Image";
import Horizontal from "../../../UI/Horizontal";
import Flag from "../../../Flag";
import Details from "../Details";
import Button from "../../../UI/Button";

import logo from "../../../../images/svg/logo.svg";
import iconCalendar from "../../../../images/svg/iconCalendar.svg";
import iconPerson from "../../../../images/svg/iconPerson.svg";
import iconLink from "../../../../images/svg/link.svg";
import {isEmpty} from "lodash";

const Top = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check if window is defined to avoid SSR issues
    if (typeof window !== 'undefined') {
      // Event listener for window resize
      window.addEventListener('resize', handleResize);

      // Set initial value
      setIsMobile(window.innerWidth <= 768);
    }

    // Clean up the event listener when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <>
      <img
        src={logo}
        alt={'Logo Devinity LLC'}
      />

      <Horizontal>
        <HeadingText paddingMobile={"20px 0"} maxWidth={'450px'}>
          <h1>
            {data?.title}
          </h1>

          <p className={'portfolio-status'}>
            {data?.status}
          </p>

          <Details>
            <div>
              <Flag
                name={data?.country?.code}
              />
              <span>{data?.country?.name}</span>
            </div>

            <div>
              <img
                src={iconCalendar}
                alt={'Icon Calendar Devinity LLC'}
              />
              <span>{data?.time}</span>
            </div>

            <div>
              <img
                src={iconPerson}
                alt={'Icon Person Devinity LLC'}
              />
              <span>{data?.members}</span>
            </div>
          </Details>

          {(!isEmpty(data?.link) && (
            <Button
              href={data?.link}
              target={"_black"}
              rel="nofollow"

              background={'#1A0E21'}
              color={'#8446B6'}
              $borderColor={'#331345'}
              fontSize={'24px'}
              gap={'35px'}
              widthMobile={'auto'}
            >
              Open Project

              <img
                src={iconLink}
                alt={'Icon Link Devinity LLC'}
              />
            </Button>
          ))}

        </HeadingText>

        <Image
          filename={data?.images[0]?.url}
          alt={data?.images[0]?.alt}
          style={{width: isMobile ? '100%' : 570, marginTop: isMobile ? 50 : -50}}
          styleImg={{}}
        />
      </Horizontal>
    </>
  )
}

export default Top;
