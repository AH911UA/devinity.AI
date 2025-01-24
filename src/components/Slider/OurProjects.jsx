import React, {useContext} from "react";
import { navigate } from "gatsby"
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {OurProjectBlock} from "./styled/OurProjectBlock";
import Text from "../UI/Text";

import 'react-horizontal-scrolling-menu/dist/styles.css';

import {useHomeData} from "../../hooks/query";
import Image from "../UI/Image";

const OurProjectsSlider = (
  {
    arrowLeftRef,
    arrowRightRef,
  }
) => {
  const {portfolio: portfolioData} = useHomeData();

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev }
      = useContext(VisibilityContext);

    return (
      <button
        onClick={() => scrollPrev()}
        style={{display: 'none'}}
        ref={arrowLeftRef}
        disabled={isFirstItemVisible}
      >
        back
      </button>
    );
  }

  const RightArrow = () => {
    const { isLastItemVisible, scrollNext }
      = useContext(VisibilityContext);

    return (
      <button
        onClick={() => scrollNext()}
        style={{display: 'none'}}
        ref={arrowRightRef}
        disabled={isLastItemVisible}
      >
        next
      </button>
    );
  }

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      separatorClassName={'reviews-separator'}
    >
      {portfolioData?.map(portfolio => (
        <OurProjectBlock
          tabIndex={portfolio?.id}
          onClick={() => navigate(`/portfolio/${portfolio?.id}`)}
        >
          <div>
            <div>
              <h5>
                {portfolio?.title}
              </h5>

              <Text color={'#913EC8'}>
                #{portfolio?.type}
              </Text>
            </div>

            <div>
              {portfolio?.libraries?.slice(0, 2)?.map((library) => (
                <Image
                  key={library?.id}
                  filename={library?.url}
                  alt={library?.alt}
                  style={{objectPosition: 'center', width: 50}}
                />
              ))}
            </div>
          </div>

          <div style={{display: 'block'}}>
            <Image
              filename={portfolio?.images[0]?.url}
              alt={portfolio?.images[0]?.alt}
              style={{objectPosition: 'center', height: 250}}
              styleImg={{objectPosition: 'center', height: 220}}
            />
          </div>
        </OurProjectBlock>
      ))}
    </ScrollMenu>
  )
}

export default OurProjectsSlider;
