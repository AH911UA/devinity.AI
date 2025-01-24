import React from "react";
import HeadingText from "../../UI/HeadingText";
import { useDispatch } from "react-redux";
import { updateShowFeedback } from "../../../state/actions";
import { TopContainer } from "./styled";

import imagePlanetCut from "../../../images/planet-cut.png";
import imagePlanetFull from "../../../images/planet-full.png";
import Button from "../../UI/Button";
import blogHeaderImg from "../../../images/blog/blog_header.png";

import slide1 from "../../../images/home-page/slide-1.png";

const TopBlog = () => {
  const dispatch = useDispatch();

  return (
    <TopContainer>
      <div>
        <div>
          <div className="content">
            <div className={"information"}>
              <HeadingText padding={"0px"} className="only-desktop">
                <p className="pre-title">Python practices</p>
                <h1>
                  Best practices in <br />
                  <span>Python</span> development
                </h1>
              </HeadingText>

              <div className={"desc"}>
                <p>
                  Let's understand the best practices in Python development.
                  This programming language has a lot of features, and the right
                  approach will help you create better code.
                </p>
              </div>

              <div className={"footer"}>
                <Button
                  color={"#000"}
                  background={"#62ED2E"}
                  $borderColor={"#62ED2E"}
                  style={{
                    cursor: "pointer",
                    width: 'auto'
                  }}
                  whitespace={"nowrap"}
                  to="/blog/1"
                >
                  Read Now
                </Button>
              </div>
            </div>

            <div className={"second-container"}>
              <img src={blogHeaderImg} alt="" />
            </div>

            <HeadingText padding={"0px 0px 30px"} className="only-mobile">
              <p className="pre-title">Python practices</p>
              <h1>
                Shaping the <br />
                <span>Digital</span> Frontier
              </h1>
            </HeadingText>
          </div>

          <div>
            <div
              style={{
                flex: "1 1 100%",
                display: "contents",
              }}
            ></div>
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

export default TopBlog;
