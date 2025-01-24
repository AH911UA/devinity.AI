import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import StarsBackground from "../components/UI/StarsBackground";
import GeneralContainer from "../components/UI/GeneralContainer";
import ContainerPadding from "../components/UI/ContainerPadding";
import { useHomeData } from "../hooks/query";
import DoYouWant from "../components/Home/DoYouWant";
import AboutArticle from "../components/Article/ArticleItem/AboutArticle";
import Top from "../components/Article/ArticleItem/Top";

import imagePage from "../images/technologies/technologies_6.png";

const ArticleItem = ({ pageContext }) => {
  const { id } = pageContext;
  const {article: articleData} = useHomeData();

  const findData = articleData?.find((one) => one?.id == id)

  return (
    <Body>
      <StarsBackground>
        <GeneralContainer>
          <ContainerPadding>
            <Top
              data={findData}
            />

            <AboutArticle
              data={findData}
            />
          </ContainerPadding>
        </GeneralContainer>
      </StarsBackground>

      <StarsBackground>

        <DoYouWant/>

      </StarsBackground>
    </Body>
  )
}

export default ArticleItem;

export const Head = ({ pageContext: { id } }) => {
  const {article: articleData} = useHomeData();

  const findData = articleData?.find((one) => one?.id == id)

  return (
    <HeadCustom
      title={findData?.title_seo}
      description={findData?.description_short}
      titleShort={findData?.title_seo}
      type={`website`}
      url={`https://devinity.ai/article/${findData?.id}/`}
      image={imagePage}
      schema={`{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${findData?.title_seo}",
        "url": "https://devinity.ai/article/${findData?.id}/",
        "description": "${findData?.description_short}",
        "image": "${imagePage}"
      }`}
    />
  )
}
