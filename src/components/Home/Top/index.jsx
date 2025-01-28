import React, { useEffect, useState } from "react";
import HeadingText from "../../UI/HeadingText";
import { useDispatch } from "react-redux";
import {
  updateShowCalculator,
  updateShowFeedback,
} from "../../../state/actions";
import { TopContainer } from "./styled";
import useIsMobile from "../../../hooks/useIsMobile";
import imagePlanetCut from "../../../images/planet-cut.png";
import imagePlanetFull from "../../../images/planet-full.png";
import { CaurouselComponent } from "../../common/carousel/Carousel";
import Button, { ButtonEvent } from "../../UI/Button";

import slide2 from "../../../images/home-page/slide-2.png";
import slide3 from "../../../images/home-page/slide-3.png";
import slide4 from "../../../images/home-page/slide-4.png";

import slideMobile1 from "../../../images/home-page/slide-mobile-1.png";
import slideMobile2 from "../../../images/blog/items/blog-item-6-1.png";
import slideMobile3 from "../../../images/blog/items/blog-item-2-4.png";
import slideMobile4 from "../../../images/home-page/slide-4.png";

const _slidesMobile = [
  {
    img: slideMobile1,
    desc: "MYND is a mental health app offering personalized AI support, featuring a Personal AI Companion for real-time user assistance...",
  },
  {
    img: slideMobile2,
    desc: "Struggling with too many tasks? AI can simplify mobile app development, reducing costs and speeding up the process...",
  },
  {
    img: slideMobile3,
    desc: "AI boosts app development by cutting costs and accelerating time-to-market for busy teams...",
  },
  {
    img: slideMobile4,
    desc: "o1-mini: OpenAI's fast reasoning model offers cost-effective, high-speed coding and math capabilities...",
  },
];

const _slides = [
  {
    id: 1,
    img: slideMobile1,
    desc: "MYND is an innovative mental health app offering personalized support through AI, developed by Devinity.AI . Personal AI Companion is a central feature of MYND, providing real-time support based on user’s mood and preferences. The app also features AI-Generated Meditation sessions...",
    link: "/portfolio/",
  },
  {
    id: 2,
    img: slide2,
    desc: "Ever feel like you're juggling too many tasks (and not enough time) when building a mobile app? You're not alone. Getting an app to market can be complex, especially if you're worried about skyrocketing costs and tight deadlines. Fortunately, artificial intelligence (AI) has come a long way in helping teams move faster and spend less...",
    link: "/blog/6/",
  },
  {
    id: 3,
    img: slide3,
    desc: "Boost App Development with AI. AI simplifies app development, reducing costs and speeding up time-to-market for busy teams...",
    link: "/blog/2/",
  },
  {
    id: 4,
    img: slide4,
    desc: "As the AI landscape continues to evolve, developers and businesses seek the perfect balance of speed, cost-efficiency, and capability. Enter o1-mini, OpenAI’s small reasoning model that boasts lightning-fast processing especially when it comes to coding and math without compromising on quality. Below, we’ll explore what o1-mini brings to the table...",
    link: "/blog/7/",
  },
];

const Top = () => {
  const dispatch = useDispatch();
  const [slides, setSlides] = useState([]);
  const isMobile = useIsMobile(1290);
  const isMobileSmall = useIsMobile(690);

  useEffect(() => {
    if (isMobileSmall) {
      setSlides(
        _slides.map((slide, i) => i === 1 ? ({ ...slide, ..._slidesMobile[i] }) : ({ ...slide, desc: _slidesMobile[i].desc }))
      );
    } else if (isMobile) {
      setSlides(_slides.map((slide, i) => ({ ...slide, ..._slidesMobile[i] })));
    } else {
      setSlides(_slides);
    }
  }, [isMobile, isMobileSmall]);

  return (
    <TopContainer>
      <div>
        <div>
          <div>
            <div className={"information"}>
              <HeadingText padding={"0px"} className="only-desktop">
                <h1>
                  Shaping the <br />
                  <span>Digital</span> Frontier
                </h1>
              </HeadingText>

              <div className={"options"}>
                <ul>
                  <li>$22/h development</li>
                  <li>Fully european based workforce</li>
                  <li>Working under US jurisdiction</li>
                </ul>

                <ul>
                  <li>Top 1% industry talent</li>
                  <li>#1 Price leaders in the industry</li>
                </ul>
              </div>

              <div className={"footer"}>
                <Button
                  color={"#000"}
                  background={"#62ED2E"}
                  $borderColor={"#62ED2E"}
                  style={{
                    cursor: "pointer",
                    width: "auto",
                  }}
                  whitespace={"nowrap"}
                  to={"/contact"}
                >
                  Contact Now
                </Button>

                <ButtonEvent
                  color={"#fff"}
                  background={"transperent"}
                  $borderColor={"#62ED2E"}
                  style={{
                    cursor: "pointer",
                    width: "auto",
                  }}
                  whitespace={"nowrap"}
                  widthMobile={""}
                  onClick={() => dispatch(updateShowCalculator(true))}
                >
                  Project Evaluation
                </ButtonEvent>
              </div>
            </div>

            <div className={"second-container"}>
              {slides?.length && <CaurouselComponent slides={slides} />}
            </div>

            <HeadingText padding={"0px"} className="only-mobile">
              <h1>
                Shaping the <br />
                <span>Digital</span> Frontier
              </h1>
            </HeadingText>
          </div>
        </div>
      </div>

      <img
        className={"planet-full"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />

      <img
        className={"planet-cut"}
        src={imagePlanetCut}
        alt={"Planet Green Devinity LLC"}
      />
    </TopContainer>
  );
};

export default Top;
