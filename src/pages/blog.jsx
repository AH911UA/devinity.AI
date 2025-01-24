import React from "react";
import Body from "../components/Body";
import StarsBackground from "../components/UI/StarsBackground";
import ContainerPadding from "../components/UI/ContainerPadding";
import { BlogComponent } from "../components/Blog/BlogComponent";
import TopBlog from "../components/Blog/Top/TopBlog";

const BlogPage = () => {
  return (
    <Body>
      <StarsBackground>
        <TopBlog></TopBlog>

        <ContainerPadding>
          <BlogComponent />
        </ContainerPadding>
      </StarsBackground>
    </Body>
  );
};

export default BlogPage;
