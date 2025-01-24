import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Image from "../../../UI/Image";
import Button from "../../../UI/Button";
import {updateShowCalculator} from "../../../../state/actions";

import {OutsourceContainer} from "../../../Home/Outsource/styled/OutsourceContainer";
import {OutsourceLabel} from "../../../Home/Outsource/styled/OutsourceLabel";
import {OutsourceDescription} from "../../../Home/Outsource/styled/OutsourceDescription";
import ContainerPadding from "../../../UI/ContainerPadding";

const Top = ({ data }) => {
  const dispatch = useDispatch();

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
      <OutsourceContainer>
        <div>
          <OutsourceLabel>
            {data?.title}
          </OutsourceLabel>

          <OutsourceDescription>
            {data?.description_short}
          </OutsourceDescription>

          <div>
            <div className={'mobile-img'}>
              <Image
                filename={data?.images[0]?.url}
                alt={data?.images[0]?.alt}
                style={{width: isMobile ? '100%' : 350, maxHeight: 200}}
                styleImg={{objectPosition: 'center center'}}
              />
            </div>
          </div>

          <div
            onClick={() => dispatch(updateShowCalculator(true))}
          >
            <Button
              $opacity={0.06}
            >
              Get estimation
            </Button>
          </div>
        </div>

        <div className={'desktop-img'}>
          <Image
            filename={data?.images[0]?.url}
            alt={data?.images[0]?.alt}
            style={{width: isMobile ? '100%' : 350}}
            styleImg={{}}
          />
        </div>
      </OutsourceContainer>
    </>
  )
}

export default Top;
