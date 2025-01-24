import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import GeneralContainer from "../components/UI/GeneralContainer";
import Outsource from "../components/Home/Outsource";
import HowWeWork from "../components/Home/HowWeWork";
import Brands from "../components/Home/Brands";
import Technologies from "../components/Home/Technologies";
import Feedback from "../components/Home/Feedback";
import OurProcess from "../components/Home/OurProcess";
import StarsBackground from "../components/UI/StarsBackground";
import Top from "../components/Home/Top";
import { useHomeData } from "../hooks/query";
import DoYouWant from "../components/Home/DoYouWant";
import Testimonials from "../components/Home/Testimonials";
// import {useDispatch} from "react-redux";

import imagePage from "../images/home-header-new.png";

const IndexPage = () => {
  // const dispatch = useDispatch();

  const { home: homeData } = useHomeData();

  // useEffect(() => {
  //   const isSeeCalculator = localStorage.getItem('isSeeCalculator');
  //
  //   if(isSeeCalculator !== '1')
  //     dispatch(updateShowCalculator(true))
  // }, [])

  return (
    <Body>
      <StarsBackground>
        {/*<MoonTopRight/>*/}

        <Top />

        <GeneralContainer>
          <Outsource />

          <HowWeWork data={homeData?.howWeWork} />
        </GeneralContainer>
      </StarsBackground>

      <Testimonials data={homeData?.reviews} />

      <Brands data={homeData?.brands} />

      <Technologies data={homeData?.technologies} />

      <Feedback data={homeData?.reviews} />

      <StarsBackground>
        <OurProcess data={homeData?.process} />

        <DoYouWant />
      </StarsBackground>
    </Body>
  );
};

export default IndexPage;

export const Head = () => (
  <HeadCustom
    title={`Devinity.AI | Mobile, Web and AI Developers`}
    description={`Top-tier talent in AI-powered mobile and web development. Fully European staffed. Explore excellency in AI, mobile, web, blockchain, desktop and game development.`}
    titleShort={`Devinity.AI: Development Company`}
    type={`website`}
    url={`https://devinity.ai/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Devinity.AI | Mobile, Web and AI Developers",
      "url": "https://devinity.ai/",
      "description": "Top-tier talent in AI-powered mobile and web development. Fully European staffed. Explore excellency in AI, mobile, web, blockchain, desktop and game development.",
      "image": "${imagePage}"
    }`}
  />
);
