import React, { useRef } from "react";
import GeneralContainer from "../../UI/GeneralContainer";
import { TestimonialsContainer } from "./styled/TestimonialsContainer";
import { TestimonialsHeader } from "./styled/TestimonialsHeader";
import ContainerPadding from "../../UI/ContainerPadding";
import TestimonialsSlider from "../../Slider/Testimonials";

import btn_back from "../../../images/svg/btn_back.svg";
import btn_next from "../../../images/svg/btn_next.svg";

const Testimonials = ({ data }) => {
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  return (
    <TestimonialsContainer>
      <GeneralContainer marginTop={"75px"} fullWidth>
        <ContainerPadding>
          <TestimonialsHeader>
            <div className={"desc"}>
              <p className={"label"}>Testimonials:</p>

              <p>
                Your go-to solution for projects on any scale, involving
                MapsSDK, OpenAI, Blockchain, React Native, IOS and Android
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
                  alt={"Arrow to Left"}
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
                  alt={"Arrow to Right"}
                />
              </div>
            </div>
          </TestimonialsHeader>

          <TestimonialsSlider
            arrowLeftRef={arrowLeftRef}
            arrowRightRef={arrowRightRef}
            reviews={data}
          />
        </ContainerPadding>
      </GeneralContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;
