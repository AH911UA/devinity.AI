import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import { useHomeData } from "../hooks/query";
import Top from "../components/MobileApp/Top";
import TimeLine from "../components/TimeLine";
import AboutTechnology from "../components/MobileApp/AboutTechnology";
import Technologies from "../components/MobileApp/Technologies";
import OurProjects from "../components/MobileApp/OurProjects";
import CrossPlatform from "../components/MobileApp/CrossPlatform";
import EstimateSales from "../components/MobileApp/EstimateSales";
import ContactForm from "../components/MobileApp/ContactForm";
import DefaultBackground from "../components/UI/DefaultBackground";
import AiIntegration from "../components/MobileApp/AiIntegration";
import RequestACall from "../components/AI/RequestACall";

import iconOpenAI from "../images/image-openai.png";
import iconGoogle from "../images/image-google.png";
import iconFacebook from "../images/image-facebook.png";
import iconMistral from "../images/image-mistral.png";
import iconGrok from "../images/image-grok.png";
import imageFestoWeb from "../images/portfolio/minimal/portfolio-festoweb.jpg";
import imageBoxing from "../images/portfolio/minimal/portfolio-boxing.jpg";
import imagePage from "../images/technologies/technologies_2.png";

const AIPage = ({ id }) => {
  const { article: articleData } = useHomeData();

  const findData = articleData?.find((one) => one?.id == id);

  return (
    <Body colorBackground={"#0B0B0B"}>
      <DefaultBackground>
        <Top
          data={findData}
          title="Artificial Intelligence "
          description="We leverage AI to streamline your business operations. We integrate AI into apps, websites, tools, and businesses to automate processes boost efficiency. Our expertise in AI integration ensures. Our expertise in AI integration ensures top-tier performance and innovation."
          technologies={[
            "Open AI",
            "Gemini",
            "Mistral 8x7b",
            "Lambda",
            "Grok",
            "Meta",
          ]}
        />

        <AboutTechnology
          subTitle="We are the"
          subTitleBold="AI Sorcerers!"
          title="AI Emergence Changed All"
          description="AI chatbots like ChatGPT have sparked a new boom in the market, similar to how the “dot com” phenomenon happened in late 1990s. Now, investors from all over the world are trying to monetize on this trend via AI-powered apps and services.
          <br/>
Whether you have a new app idea that uses AI or want to streamline your business through AI, there is no better partner for you than Devinity.AI. After all, “AI” is in the name! We are experts when it comes to integrating AI APIs and developing custom libraries or even models.
<br/>
Our expertise has a proven track record visible to anyone in our portfolio. So what are you waiting for? Got an idea for AI-powered solution? Let’s talk!"
          image="ai-chat-screens.png"
          maxHeight={537}
        />

        <RequestACall />

        <EstimateSales withRequestBtn={false} />

        <AiIntegration />

        <Technologies
          title="Models"
          data={[
            {
              title: `OpenAI`,
              icon: iconOpenAI,
              description:
                "OpenAI’s models, like GPT-4, are renowned for high accuracy, fast processing, scalability, and advanced NLP capabilities, excelling in tasks like text generation and translation through continuous innovation",
            },
            {
              title: `Gemini`,
              icon: iconGoogle,
              description:
                "Gemini models are  known for being less censored and provide comprehensive, multilingual support, making them a versatile choice for diverse applications. Additionally, integrated Google browsing helps fetch accurate real-time data",
            },
            {
              title: `Meta`,
              icon: iconFacebook,
              description:
                "Meta AI’s Llama 3 excels in complex problem-solving and coding, and is freely available for research and commercial use, making it highly accessible to developers and researchers",
            },
            {
              title: `Mistral`,
              icon: iconMistral,
              description:
                "Mistral AI’s models can be totally uncensored and locally installed. They are highly performant, making them ideal for various applications while providing full control and flexibility for users",
            },
            {
              title: `Grok`,
              icon: iconGrok,
              description:
                "Grok AI, developed by xAI, is open-sourced, can be locally installed, and is designed to be more uncensored. It also features a unique sense of humor, making it engaging and flexible for users",
            },
          ]}
        />

        <TimeLine />

        <CrossPlatform
          title={`Which AI is Right for <span>Me</span>?`}
          description={`Choosing the right tech doesn’t have to be hard... Let us help you!`}
          styleSubTitle={{
            padding: "0 150px 0 0",
          }}
          posts={[
            {
              title: `Communication & Content Creation`,
              description: `If the goal of AI is to chat with users, answer their questions, and offer support, OpenAI is the top choice. Additionally, OpenAI models are great for creation of advanced or specific text content and generation images or videos.`,
              image: "ai-page/open-ai-big.png",
            },
            {
              title: `Customization`,
              description: `If you need a highly customized solution, Mistral AI might be a better choice with their open-source code.`,
              image: "ai-page/mistral-big.png",
            },
            {
              title: `Cost`,
              description: `AI model pricing is constantly changing, so new research is always needed to determine the most cost-efficient model for the purpose at any given time.`,
              image: "ai-page/socials-big.png",
            },
          ]}
          isReverse
        />

        <OurProjects
          data={[
            {
              title: `Festo Web`,
              description: `The project was completed`,
              link: "/portfolio/2",
              image: imageFestoWeb,
            },
            {
              title: `Boxing Trainer`,
              description: `The project was completed`,
              link: "/portfolio/4",
              image: imageBoxing,
            },
          ]}
        />

        <ContactForm />
      </DefaultBackground>
    </Body>
  );
};

export default AIPage;

export const Head = () => (
  <HeadCustom
    title={`Create your website with Devinity.AI we are experts websites`}
    description={`We give technology of website with Devinity. From corporate to blogs, we guide you through the process, offering expertise to elevate your online presence`}
    titleShort={`Website Development | Devinity LLC`}
    type={`website`}
    url={`https://devinity.ai/web/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Create your website with Devinity.AI we are experts websites",
      "url": "https://devinity.ai/web/",
      "description": "We give technology of website with Devinity. From corporate to blogs, we guide you through the process, offering expertise to elevate your online presence",
      "image": "${imagePage}"
    }`}
  />
);
