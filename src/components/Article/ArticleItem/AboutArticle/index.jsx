import React from "react";
import {useDispatch} from "react-redux";
import HeadingText from "../../../UI/HeadingText";
import H3 from "../../../UI/H3";
import Button from "../../../UI/Button";
import {updateShowCalculator} from "../../../../state/actions";
import {AboutArticleHorizontal} from "./styled/AboutArticleHorizontal";

import iconArrow from "../../../../images/svg/icon-arrow-right-purple.svg";

const AboutArticle = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <HeadingText
        padding={'70px 0 25px'}
        paddingMobile={"20px 0 0"}
        maxWidth={'auto'}
      >
        About Technology:
      </HeadingText>

      <AboutArticleHorizontal>
        <H3
          maxWidth={'100%'}
          style={{marginTop: 0}}

          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </AboutArticleHorizontal>

      <div
        style={{textAlign: 'center'}}
        onClick={() => dispatch(updateShowCalculator(true))}
      >
        <Button
          background={'#1A0E21'}
          color={'#8446B6'}
          $borderColor={'#331345'}
          fontSize={'24px'}
          gap={'35px'}
        >
          Get estimation

          <img src={iconArrow} alt={'Arrow to Right'}/>
        </Button>
      </div>
    </>
  )
}

export default AboutArticle;
