import React, { useEffect, useRef, useState } from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import StarsBackground from "../components/UI/StarsBackground";
import GeneralContainer from "../components/UI/GeneralContainer";
import ContainerPadding from "../components/UI/ContainerPadding";
import Top from "../components/Portfolio/Top";
import { useHomeData } from "../hooks/query";
import DoYouWant from "../components/Home/DoYouWant";
import FiltersType from "../components/Portfolio/FiltersType";
import imagePage from "../images/portfolio-top.png";
import Glowing from "../components/common/container/GlowingContainer/styled/GlowingContainer";
import { PortfolioContainerBig } from "../components/Portfolio/PortfolioContainerBig/PortfolioContainerBig";

const PortfolioPage = () => {
  const { portfolio: portfolioData } = useHomeData();

  const [typeFilter, setTypeFilter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const containerCardsRef = useRef(null);
  const [glowingList, setGlowingList] = useState([]);


  useEffect(() => {
    setFilteredData(portfolioData?.filter((one) =>
      typeFilter ? typeFilter === one?.type : true
    ))
  }, [portfolioData, typeFilter]);

  useEffect(() => {
    if (containerCardsRef.current) {
      const elems = [];
      const dimensions = containerCardsRef.current.getBoundingClientRect();
      for (let index = 700; index + 1600 < dimensions.bottom; index+= 1000) {
        const randomOffset = getRandomNumber(-100, 100);
        const randomBlur = getRandomNumber(50, 150);
        const positionSide = Math.random() > 0.5 ? "left" : "right";

        elems.push(<Glowing
          position="absolute"
          width="300px"
          height="600px"
          top={`${index}px`}
          style={{ [positionSide]: `${randomOffset}px` }}
          blur={`blur(${randomBlur}px)`}
          key={`Glowing-portfolio-${index}`}
        />)

      }
      setGlowingList(elems);
    }
  }, [filteredData]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return (
    <Body>
      <StarsBackground>
        <Top />
      </StarsBackground>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: 70,
          paddingBottom: 70,
        }}
      >
        <GeneralContainer
          style={{
            margin: "0 auto",
          }}
        >
          <ContainerPadding ref={containerCardsRef}>
            <FiltersType filter={typeFilter} setFilter={setTypeFilter} />
            <PortfolioContainerBig
              portfolioData={filteredData}
            />
          </ContainerPadding>
        </GeneralContainer>

       {glowingList}


      </div>

      <StarsBackground>
        <DoYouWant />
      </StarsBackground>
    </Body>
  );
};

export default PortfolioPage;

export const Head = () => (
  <HeadCustom
    title={`Devinity Portfolio: Transforming Ideas in Mobile Apps, Web`}
    description={`Explore Devinity LLC's coding, AI, blockchain, and web excellence. Join the tech revolution with us, propelling innovation in development and blockchain.`}
    titleShort={`Portfolio | Devinity LLC`}
    type={`website`}
    url={`https://devinity.ai/portfolio/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Devinity Portfolio: Transforming Ideas in Mobile Apps, Web",
      "url": "https://devinity.ai/portfolio/",
      "description": "Explore Devinity LLC's coding, AI, blockchain, and web excellence. Join the tech revolution with us, propelling innovation in development and blockchain.",
      "image": "${imagePage}"
    }`}
  />
);
