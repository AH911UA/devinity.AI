import React, { useRef } from "react";
import GeneralContainer from "../../UI/GeneralContainer";
import Reviews from "../../Slider/Reviews";
import { FeedbackContainer } from "./styled/FeedbackContainer";
import { FeedbackHeader } from "./styled/FeedbackHeader";

import btn_back from "../../../images/svg/btn_back.svg";
import btn_next from "../../../images/svg/btn_next.svg";
import ContainerPadding from "../../UI/ContainerPadding";

const Feedback = ({ data }) => {
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  return (
    <FeedbackContainer>
      <GeneralContainer marginTop={"75px"} fullWidth>
        <ContainerPadding>
          <FeedbackHeader>
            <div className={"desc"}>
              <p className={"label"}>Feedback</p>

              <p>
                Your go-to solution for projects on any scale, involving
                MapsSDK, OpenAI, Blockchain, React Native, IOS & Android
              </p>
            </div>

            <div className={"btns"}>
              <div
                onClick={() =>
                  arrowLeftRef?.current && arrowLeftRef.current.click()
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  src={btn_back}
                  style={{ height: 78 }}
                  alt={"Icon Arrow Left Devinity LLC"}
                />
              </div>

              <div
                onClick={() =>
                  arrowRightRef?.current && arrowRightRef.current.click()
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  src={btn_next}
                  style={{ height: 78 }}
                  alt={"Icon Arrow Right Devinity LLC"}
                />
              </div>
            </div>
          </FeedbackHeader>

          <Reviews
            arrowLeftRef={arrowLeftRef}
            arrowRightRef={arrowRightRef}
            reviews={data}
          />
        </ContainerPadding>
      </GeneralContainer>
    </FeedbackContainer>
  );
};

export default Feedback;
