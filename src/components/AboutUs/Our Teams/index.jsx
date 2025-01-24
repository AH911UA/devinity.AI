import React, { useRef } from "react";
import GeneralContainer from "../../UI/GeneralContainer";
import { OurTeamsContainer } from "./styled/OurTeamsContainer";
import { OurTeamsHeader } from "./styled/OurTeamsHeader";
import OurTeamsSlider from "../../Slider/OurTems";

import btn_back from "../../../images/svg/btn_back.svg";
import btn_next from "../../../images/svg/btn_next.svg";

const OurTeams = () => {
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  return (
    <OurTeamsContainer>
      <GeneralContainer marginTop={"75px"} fullWidth>
        <OurTeamsHeader>
          <p className={"label"}>
            <span>{`Devinity.AI`}</span> team proudly houses:
          </p>

          <div className={"btns"}>
            <div
              onClick={() =>
                arrowLeftRef?.current && arrowLeftRef.current.click()
              }
              style={{ cursor: "pointer" }}
            >
              <img src={btn_back} style={{ height: 78 }} />
            </div>

            <div
              onClick={() =>
                arrowRightRef?.current && arrowRightRef.current.click()
              }
              style={{ cursor: "pointer" }}
            >
              <img src={btn_next} style={{ height: 78 }} />
            </div>
          </div>
        </OurTeamsHeader>

        <OurTeamsSlider
          arrowLeftRef={arrowLeftRef}
          arrowRightRef={arrowRightRef}
        />
      </GeneralContainer>
    </OurTeamsContainer>
  );
};

export default OurTeams;
