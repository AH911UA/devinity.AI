import React, {useContext, useRef} from "react";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {FeedbackBlock} from "./styled/FeedbackBlock";
import Text from "../UI/Text";

import 'react-horizontal-scrolling-menu/dist/styles.css';

import rating from "../../images/svg/rating.svg";

const Reviews = (
  {
    arrowLeftRef,
    arrowRightRef,
    reviews
  }
) => {
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
      {reviews?.map(review => (
        <FeedbackBlock tabIndex={review?.id} >
          <h5>
            {review?.title}
          </h5>

          <img
            src={rating}
            alt={'Icon Star Devinity LLC'}
          />

          <Text>
            {review?.description}
          </Text>
        </FeedbackBlock>
      ))}
    </ScrollMenu>
  )
}

export default Reviews;
