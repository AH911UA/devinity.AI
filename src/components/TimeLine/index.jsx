import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

// components
import Image from "../UI/Image";
import ButtonSquare from "../UI/ButtonSquare";
import Label from "../UI/Label";

// images
import icon1 from "../../images/timeline/1.png";
import icon2 from "../../images/timeline/2.png";
import icon3 from "../../images/timeline/3.png";
import icon4 from "../../images/timeline/4.png";
import icon5 from "../../images/timeline/5.png";

// styles
import fonts from "../fonts";
import {updateShowCalculator} from "../../state/actions";
import {useDispatch} from "react-redux";

const TimeLine = ({ isFirstGreen, isWhatsApp }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Our <span>Process</span>
      </Label>

      <TimeLineContainer>
        <VerticalTimeline animate lineColor={"#3d3d3d"}>
          <VerticalTimelineElement
            icon={<img src={icon1} alt={"Icon Assessment Devinity LLC"} />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{
                color: isFirstGreen ? "#62ED2E" : "#fff",
              }}
            >
              Assessment
            </h3>
            <p>
              Once we've signed a non-disclosure agreement, we'll review the
              examples and requirements you provide. Our team will assess the
              project, then draft a proposal outlining all the end-product
              functionality, along with a detailed timeframe and cost breakdown
              for each component of the app.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={
              <img
                src={icon2}
                alt={"Icon Review and Negotiation Devinity LLC"}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Review and Negotiation
            </h3>
            <p>
              During this stage, you can review the proposal and ask any
              questions you may have. Once the project's price is negotiated and
              agreed upon, we can begin the project.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={
              <img
                src={icon3}
                alt={"Icon Preparation and Planning Devinity LLC"}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Preparation and Planning
            </h3>
            <p>
              We agree with you on the project costs and milestones. During this
              time, the design and planning phases begin. You have the option to
              be as involved in the project management and planning as you like,
              or you can leave it all to us, and we will handle your project
              with the utmost excellence. We then assemble a team of
              professional developers experienced in the key areas of your app.
              For payments, we use third-party services like Escrow, ensuring
              you pay only when each milestone is reached.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<img src={icon4} alt={"Icon Development Devinity LLC"} />}
          >
            <h3 className="vertical-timeline-element-title">Development</h3>
            <p>
              At this stage, the actual work begins. Our developers follow the
              agreed-upon plan, and you can monitor progress with full
              transparency on our interactive Jira dashboard. This allows you to
              see what tasks are being worked on, the hours spent, and the
              progress made. Additionally, you can test the app at any time
              using TestFlight for iOS or by downloading the APK for Android.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={
              <img src={icon5} alt={"Icon Release and Support Devinity LLC"} />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Release and Support
            </h3>
            <p>
              After the successful and timely development of your app, we assist
              you in releasing it to the App Store or Google Play Market. We
              handle all setups, requirements, and checks requested by the
              respective platforms. Once the app is live, we provide 6-month
              project support, during which we fix bugs and perform maintenance.
              Additionally, we offer SEO and SMM services through our in-house
              team or partner affiliate program.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TimeLineContainer>

      <Button
        className={"button"}
        onClick={() => dispatch(updateShowCalculator(true))}
      >
        <ButtonSquare
          style={{
            gap: 10,
          }}
        >
          Get Your App Now
          {isWhatsApp && (
            <Image
              filename={"whatsapp-icon.png"}
              alt={"WhatsApp"}
              style={{
                width: 20,
                height: 20,
                marginBottom: 2,
              }}
            />
          )}
        </ButtonSquare>
      </Button>
    </>
  );
};

export default TimeLine;

const Button = styled.div`
  margin: 120px 0;

  @media (max-width: 1169px) {
    margin: 50px 0 100px;
  }
`;

const TimeLineContainer = styled.div`
  width: 100%;

  .vertical-timeline {
    padding: 0;
  }

  .vertical-timeline.vertical-timeline--two-columns:before {
    width: 9px;
    margin-left: calc(-9px / 2);
  }

  .vertical-timeline--two-columns {
    .vertical-timeline-element-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: rgb(98, 237, 46);
      box-shadow: none;
      width: 100px;
      height: 100px;
      left: calc(50% - (100px / 2));
      margin-left: 0;

      img {
        width: 50px;
      }
    }
  }

  .vertical-timeline-element-content {
    border-radius: 20px;
    border: 1px solid rgba(255, 254, 254, 0.2);
    background: rgba(217, 217, 217, 0.1);
    box-shadow: none;

    .vertical-timeline-element-content-arrow {
      display: none;
    }

    h3 {
      color: #fff;
      font-family: ${fonts.oxanium};
      font-size: 20px;
      font-weight: 700;
      line-height: 45px;

      @media (max-width: 768px) {
        line-height: 30px;
      }
    }

    p {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      margin-top: 0;

      @media (max-width: 768px) {
        font-size: 1em;
      }
    }
  }

  .vertical-timeline-element:not(:first-child) {
    margin: 6em 0;
    margin-top: 0;
  }

  @media (max-width: 1169px) {
    :not(:first-child) {
      margin-top: 0;
    }

    .vertical-timeline-element:not(:first-child) {
      margin-bottom: 0;
    }

    .vertical-timeline-element:not(:last-child) {
      margin-bottom: 25px;
    }

    .vertical-timeline--two-columns {
      .vertical-timeline-element-icon {
        width: 70px;
        height: 70px;
        left: 0;

        img {
          width: 40px;
        }
      }
    }

    .vertical-timeline.vertical-timeline--two-columns:before {
      width: 5px;
      margin-left: calc(7px * 2);
    }

    .vertical-timeline-element-content {
      margin-left: 80px;
    }
  }
`;
