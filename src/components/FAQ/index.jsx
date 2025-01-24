import Image from "../UI/Image";
import React from "react";
import { FaqPageContainer } from "./styled";
import { useHomeData } from "../../hooks/query";
import FaqList from "./FaqList";
import HeadingText from "../UI/HeadingText";

const FAQ = () => {
  const { faq: faqsData } = useHomeData();

  return (
    <FaqPageContainer>
      <div>
        <div>
          <HeadingText paddingMobile={"20px 0"} maxWidth={"650px"} isPhone>
            <h1>
              <span>F</span>requently
              <br />
              <span>A</span>sked
              <br />
              <span>Q</span>uestions
            </h1>
          </HeadingText>
        </div>

        <Image
          filename={"faq_martian.png"}
          alt={"Devinity FAQ"}
          style={{ maxWidth: 150 }}
        />
      </div>

      <div>
        <FaqList faqs={faqsData} />
      </div>
    </FaqPageContainer>
  );
};

export default FAQ;
