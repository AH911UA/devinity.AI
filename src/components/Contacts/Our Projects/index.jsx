import React, { useRef } from "react";
import GeneralContainer from "../../UI/GeneralContainer";
import { OurProjectsContainer } from "./styled/OurProjectsContainer";
import { OurProjectsHeader } from "./styled/OurProjectsHeader";
import OurProjectsSlider from "../../Slider/OurProjects";

import btn_back from "../../../images/svg/btn_back.svg";
import btn_next from "../../../images/svg/btn_next.svg";

const OurProjects = ({ title }) => {
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  return (
    <OurProjectsContainer>
      <GeneralContainer marginTop={"75px"} fullWidth>
        <OurProjectsHeader>
          <p className={"label"}>{title || "Our projects"}</p>

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
        </OurProjectsHeader>

        <OurProjectsSlider
          arrowLeftRef={arrowLeftRef}
          arrowRightRef={arrowRightRef}
        />
      </GeneralContainer>
    </OurProjectsContainer>
  );
};

export default OurProjects;
