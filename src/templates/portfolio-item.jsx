import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import StarsBackground from "../components/UI/StarsBackground";
import GeneralContainer from "../components/UI/GeneralContainer";
import ContainerPadding from "../components/UI/ContainerPadding";
import Top from "../components/Portfolio/PortfolioItem/Top";
import { useHomeData } from "../hooks/query";
import DoYouWant from "../components/Home/DoYouWant";
import AboutProject from "../components/Portfolio/PortfolioItem/AboutProject";
import Image from "../components/UI/Image";
import { BrandsContainer } from "../components/Home/Brands/styled/BrandsContainer";
import LibrariesList from "../components/Portfolio/PortfolioItem/AboutProject/styled/LibrariesList";
import OurProjects from "../components/Contacts/Our Projects";
import VideoProject from "../components/Portfolio/PortfolioItem/VideoProject";

import imagePage from "../images/portfolio-top.png";

const PortfolioItem = ({ pageContext }) => {
  const { id } = pageContext;
  const { portfolio: portfolioData } = useHomeData();

  const findData = portfolioData?.find((one) => one?.id == id);
  const videosProject = findData?.videos || [];

  return (
    <Body>
      <StarsBackground>
        <GeneralContainer>
          <ContainerPadding>
            <Top data={findData} />

            <AboutProject data={findData} />
            <VideoProject videos={videosProject} />
          </ContainerPadding>
        </GeneralContainer>
      </StarsBackground>

      <BrandsContainer padding={"25px"} background={"#0D0810"}>
        <LibrariesList>
          {findData?.libraries?.length &&
            findData?.libraries?.map(({ url }) => (
              <Image
                filename={url}
                style={{
                  height: 80,
                  width: "100%",
                }}
              />
            ))}
        </LibrariesList>
      </BrandsContainer>

      <div
        style={{
          backgroundColor: "#0D0810",
        }}
      >
        <GeneralContainer
          style={{
            margin: "0 auto",
            paddingBottom: "100px",
          }}
        >
          <ContainerPadding>
            <OurProjects title={"See more our projects"} />
          </ContainerPadding>
        </GeneralContainer>
      </div>

      <StarsBackground>
        <DoYouWant />
      </StarsBackground>
    </Body>
  );
};

export default PortfolioItem;

export const Head = ({ pageContext: { id } }) => {
  const { portfolio: portfolioData } = useHomeData();

  const findData = portfolioData?.find((one) => one?.id == id);

  return (
    <HeadCustom
      title={findData?.title_seo}
      description={findData?.description_short}
      titleShort={findData?.title_seo}
      type={`website`}
      url={`https://devinity.ai/portfolio/${findData?.id}/`}
      image={imagePage}
      schema={`{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${findData?.title_seo}",
        "url": "https://devinity.ai/portfolio/${findData?.id}/",
        "description": "${findData?.description_short}",
        "image": "${imagePage}"
      }`}
    />
  );
};
