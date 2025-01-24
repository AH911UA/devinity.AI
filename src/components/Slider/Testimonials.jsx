import React, { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { OurTeamsBlock } from "./styled/OurTeamsBlock";
import { useHomeData } from "../../hooks/query";
import styled from "styled-components";
import colors from "../colors";
import fonts from "../fonts";
import VideoComponent from "../VideoComponent";
import { graphql, useStaticQuery } from "gatsby";
import VideoPopup from "../Popups/VideoPopup";

import iconStars from "../../images/svg/stars5.svg";
import iconPlay from "../../images/svg/iconPlay.svg";

import "react-horizontal-scrolling-menu/dist/styles.css";

const TestimonialsSlider = ({ arrowLeftRef, arrowRightRef }) => {
  const { testimonials: testimonialsData } = useHomeData();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const dataVideos = useStaticQuery(
    graphql`
      query {
        allVideoFfmpeg {
          edges {
            node {
              webm: transcode(
                outputOptions: ["-crf 20", "-b:v 0"]
                maxWidth: 900
                maxHeight: 480
                fileExtension: "webm"
                codec: "libvpx-vp9"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
              mp4: transcode(
                maxWidth: 900
                maxHeight: 480
                fileExtension: "mp4"
                codec: "libx264"
                audioCodec: "aac"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
            }
          }
        }
      }
    `
  );

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
      <button
        onClick={() => scrollPrev()}
        style={{ display: "none" }}
        ref={arrowLeftRef}
        disabled={isFirstItemVisible}
      >
        back
      </button>
    );
  };

  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
      <button
        onClick={() => scrollNext()}
        style={{ display: "none" }}
        ref={arrowRightRef}
        disabled={isLastItemVisible}
      >
        next
      </button>
    );
  };

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      separatorClassName={"reviews-separator"}
      scrollContainerClassName={"teams-scroll-container"}
    >
      {testimonialsData?.map((person) => (
        <OurTeamsBlock tabIndex={person?.id}>
          <div
            onClick={() => {
              const findVideo = dataVideos?.allVideoFfmpeg?.edges?.find(
                (item) => item?.node?.mp4?.originalName === person?.video
              );
              setSelectedVideo(findVideo?.node?.mp4);
              setModalIsOpen(true);
            }}
          >
            <ReviewContainer>
              <VideoComponent
                image={person?.image}
                videoOrigin={person?.video}
                data={dataVideos}
              />

              <div className={"info-review"}>
                <div className={"time"}>
                  {person?.time}

                  <img src={iconPlay} alt={"Icon Play Devinity LLC"} />
                </div>

                <div className={"description"}>
                  {person?.name}

                  <img src={iconStars} alt={"Icon Stars Devinity LLC"} />
                </div>
              </div>
            </ReviewContainer>
          </div>
        </OurTeamsBlock>
      ))}

      <VideoPopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selectedVideo={selectedVideo}
      />
    </ScrollMenu>
  );
};

export default TestimonialsSlider;

const ReviewContainer = styled.div`
  position: relative;

  .info-review {
    display: flex;
    position: absolute;
    top: 0;

    width: calc(100% - 30px);
    height: calc(500px - 35px);

    flex-direction: column;
    justify-content: space-between;

    padding: 15px 15px 20px;
  }

  .time {
    display: flex;
    align-self: flex-end;
    align-items: center;
    color: ${colors.white};
    font-family: ${fonts.oxanium};
    font-size: 16px;
    font-weight: 700;
    border-radius: 9px;
    background: rgba(0, 0, 0, 0.08);
    padding: 12px;

    gap: 10px;
  }

  .description {
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    color: ${colors.silver};

    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.71);
    font-family: ${fonts.oxanium};
    font-size: 20px;
    font-weight: 700;

    gap: 15px;

    img {
      width: 90px;
      margin-left: -5px;
    }
  }
`;
