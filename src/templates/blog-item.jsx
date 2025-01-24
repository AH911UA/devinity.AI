import React, { useEffect } from "react";
import Body from "../components/Body";
import StarsBackground from "../components/UI/StarsBackground";
import GeneralContainer from "../components/UI/GeneralContainer";
import ContainerPadding from "../components/UI/ContainerPadding";
import { useHomeData } from "../hooks/query";
import { BlogItemComponent } from "../components/Blog/BlogItemComponent/BlogItemComponent";
import { BlogItemFooterStyledComponent } from "../components/Blog/BlogItemComponent/styled/BlogItemStyledComponent";
import { cardsData } from "../components/Blog/BlogComponent";
import Glowing, {
  GlowingContainer,
} from "../components/common/container/GlowingContainer/styled/GlowingContainer";
import { MoreBlogs } from "../components/Blog/MoreBlogs/MoreBlogs";

const BlogItem = ({ pageContext }) => {
  const { id } = pageContext;
  const { blogItem } = useHomeData();
  const blog = blogItem?.find((item) => item?.id == id);
  const cardsFiltered = cardsData.filter((card) => card.id !== id);
  const cards = cardsFiltered.slice(0, 2);
  const cardsSlides = cardsFiltered.slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Body>
      <GlowingContainer>
        <StarsBackground>
          <GeneralContainer>
            <ContainerPadding>
              <BlogItemComponent blog={blog} />
              <BlogItemFooterStyledComponent>
                <MoreBlogs cardsSlides={cardsSlides} cards={cards} />
              </BlogItemFooterStyledComponent>
            </ContainerPadding>
          </GeneralContainer>
        </StarsBackground>
        {/* <Glowing
          z-index="100"
          width="1000px"
          height="1000px"
          top="30%"
          left="-00px"
          style={{ transform: "translate(-50%, -50%)" }}
          key={"Glowing-blog-item-1"}
        />
        <Glowing
          width="500px"
          height="500px"
          blur="blur(50px)"
          top="70%"
          right="0vw"
          style={{ transform: "translate(-50%, -50%)" }}
          key={"Glowing-blog-item-2"}
        /> */}
      </GlowingContainer>
    </Body>
  );
};

export default BlogItem;
