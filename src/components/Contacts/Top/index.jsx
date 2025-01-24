import React, {useEffect, useState} from "react";
import HeadingText from "../../UI/HeadingText";
import Image from "../../UI/Image";
import Horizontal from "../../UI/Horizontal";

import logo from "../../../images/svg/logo.svg";

const Top = () => {
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

      <Horizontal reverse>
        <HeadingText paddingMobile={"20px 0"} maxWidth={'650px'}>
          <h1>
            Your idea.
            <span> {`Our skills.`} </span>
            Let’s match them.
          </h1>
        </HeadingText>

        <Image
          filename={'contacts_header.png'}
          style={{width: isMobile ? '100%' : 370, marginTop: isMobile ? 50 : -50}}
          styleImg={{}}
        />
      </Horizontal>
    </>
  )
}

export default Top;
